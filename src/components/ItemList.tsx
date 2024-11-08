import { ItemsType } from "../lib/types";

export default function ItemList({
	initialItems,
}: ItemsType): React.JSX.Element {
	return (
		<ul>
			{initialItems.map((item) => {
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

function Item({ item }: ItemsType): React.JSX.Element {
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
