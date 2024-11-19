import Button from "./Button";
import { SidebarProps } from "../lib/types";
import { useRef, useState } from "react";

export default function AddItemForm({ onAddItem }: SidebarProps) {
	const [itemText, setItemText] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!itemText) {
			return;
		}

		onAddItem(itemText);
		setItemText("");
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item:</h2>
			<input
				type="text"
				placeholder="Type here"
				value={itemText}
				onChange={(e) => {
					setItemText(e.target.value);
				}}
				autoFocus
				ref={inputRef}
			/>
			<Button>Add Item</Button>
		</form>
	);
}
