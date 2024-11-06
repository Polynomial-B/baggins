import { InitialItems, ItemListProps } from "../lib/types";

export default function ItemList({ initialItems }: ItemListProps) {
	return (
		<ul>
			{initialItems.map((item: InitialItems) => {
				return (
					<Item
						key={item.id}
						item={item.item}
						packed={item.packed}
					></Item>
				);
			})}
		</ul>
	);
}

function Item({ item }: InitialItems): React.JSX.Element {
	return (
		<li className="item">
			<label>
				<input type="checkbox"></input>
				{item}
			</label>
			<button>❌</button>
		</li>
	);
}
