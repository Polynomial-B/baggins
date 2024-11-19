import { useMemo, useState } from "react";
import { sortingOptions } from "../lib/constants";
import {
	ItemElementProps,
	ItemsType,
	SortingOptionsType,
	SortType,
} from "../lib/types";
import EmptyList from "./EmptyList";
import Select from "react-select";
import { useItemsStore } from "./stores/itemsStore";

export default function ItemList(): React.JSX.Element {
	const [sort, setSort] = useState<SortType>("default");
	const items = useItemsStore((state) => state.items);
	const deleteItem = useItemsStore((state) => state.deleteItem);
	const toggleItem = useItemsStore((state) => state.toggleItem);

	const sortedItems: ItemsType[] = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sort === "packed") {
					return Number(b.packed) - Number(a.packed);
				}
				if (sort === "unpacked") {
					return Number(a.packed) - Number(b.packed);
				}
				return 0;
			}),
		[items, sort]
	);

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
						handleDeleteItem={deleteItem}
						handleToggleItem={toggleItem}
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
