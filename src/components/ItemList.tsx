import { initialItems } from "../lib/constants";

type ItemProps = {
	item: string;
	packed: boolean;
};

export default function ItemList() {
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

function Item({ item }: ItemProps): React.JSX.Element {
	return (
		<li className="item">
			<label>
				<input type="checkbox"></input>
				{item}
			</label>
		</li>
	);
}
