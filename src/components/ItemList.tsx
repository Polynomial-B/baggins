import { ItemListProps, ItemsType } from "../lib/types";

export default function ItemList({ items }: ItemListProps): React.JSX.Element {
	return (
		<ul>
			{items.map((item) => {
				return (
					<Item key={item.id} item={item.item} packed={item.packed} />
				);
			})}
		</ul>
	);
}

function Item({ item, packed }: ItemsType): React.JSX.Element {
	return (
		<li className="item">
			<label>
				<input type="checkbox" checked={packed}></input>
				{item}
			</label>
			<button>❌</button>
		</li>
	);
}
