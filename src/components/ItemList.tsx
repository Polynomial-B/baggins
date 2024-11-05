export default function ItemList() {
	return (
		<ul>
			<Item item="Item" />
			<Item item="Item" />
			<Item item="Item" />
		</ul>
	);
}

function Item({ item }: { item: string }): React.JSX.Element {
	return (
		<li className="item">
			<label>
				<input type="checkbox"></input>
				{item}
			</label>
		</li>
	);
}
