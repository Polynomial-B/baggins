import { ItemElementProps, ItemListProps } from "../lib/types";

export default function ItemList({
	items,
	handleDeleteItem,
}: ItemListProps): React.JSX.Element {
	return (
		<ul>
			{items.map((item) => {
				return (
					<Item
						key={item.id}
						id={item.id}
						item={item.item}
						packed={item.packed}
						handleDeleteItem={handleDeleteItem}
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
}: ItemElementProps): React.JSX.Element {
	return (
		<li className="item">
			<label>
				<input type="checkbox" checked={packed}></input>
				{item}
			</label>
			<button onClick={() => handleDeleteItem(id)}>❌</button>
		</li>
	);
}
