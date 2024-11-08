import Button from "./Button";
import { SidebarProps } from "../lib/types";

export default function AddItemForm({ itemText, setItemText }: SidebarProps) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const newItem = {
					id: Date.now(),
					name: itemText,
					packed: false,
				};
				console.log(newItem);
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
