import { ItemElementProps, ItemListProps } from "../lib/types";
import EmptyList from "./EmptyList";

export default function ItemList({
	items,
	handleDeleteItem,
	handleToggleItem,
}: ItemListProps): React.JSX.Element {
	return (
		<ul className="item-list">
			{items.length === 0 ? <EmptyList /> : null}
			{items.map((item) => {
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
					onClick={() => handleToggleItem(id)}
					type="checkbox"
					checked={packed}
				></input>
				{item}
			</label>
			<button onClick={() => handleDeleteItem(id)}>❌</button>
		</li>
	);
}
