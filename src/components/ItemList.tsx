import { useState } from "react";
import { sortingOptions } from "../lib/constants";
import {
	ItemElementProps,
	ItemListProps,
	ItemsType,
	SortingOptionsType,
	SortType,
} from "../lib/types";
import EmptyList from "./EmptyList";
import Select from "react-select";

export default function ItemList({
	items,
	handleDeleteItem,
	handleToggleItem,
}: ItemListProps): React.JSX.Element {
	const [sort, setSort] = useState<SortType>("default");

	const sortedItems: ItemsType[] = [...items].sort((a, b) => {
		if (sort === "packed") {
			return Number(b.packed) - Number(a.packed);
		}
		if (sort === "unpacked") {
			return Number(a.packed) - Number(b.packed);
		}
		return 0;
	});

	const handleSortChange = (sortingOption: SortingOptionsType | null) => {
		if (sortingOption?.value) {
			setSort(sortingOption.value);
		}
	};

	return (
		<ul className="item-list">
			{items.length === 0 ? (
				<EmptyList />
			) : (
				<section className="sorting">
					<Select
						onChange={handleSortChange}
						options={sortingOptions}
						defaultValue={sortingOptions[0]}
					/>
				</section>
			)}
			{sortedItems.map((item) => {
				return (
					<Item
						key={item.id}
						id={item.id}
						item={item.item}
						packed={item.packed}
						handleDeleteItem={handleDeleteItem}
						handleToggleItem={handleToggleItem}
					/>
				);
			})}
		</ul>
	);
}

function Item({
	item,
	id,
	packed,
	handleDeleteItem,
	handleToggleItem,
}: ItemElementProps): React.JSX.Element {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => handleToggleItem(id)}
					type="checkbox"
					checked={packed}
				></input>
				{item}
			</label>
			<button onChange={() => handleDeleteItem(id)}>❌</button>
		</li>
	);
}
