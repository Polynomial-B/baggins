import Button from "./Button";
import { ItemsType, SidebarProps } from "../lib/types";
import { useState } from "react";

export default function AddItemForm({ items, setItems }: SidebarProps) {
	const [itemText, setItemText] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const newItem: ItemsType = {
					id: Date.now(),
					item: itemText,
					packed: false,
				};
				setItems((prev) => [...prev, newItem]);
			}}
		>
			<h2>Add an item:</h2>
			<input
				type="text"
				value={itemText}
				onChange={(e) => {
					setItemText(e.target.value);
				}}
			/>
			<Button>Add Item</Button>
		</form>
	);
}
