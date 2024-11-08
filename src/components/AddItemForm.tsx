import Button from "./Button";
import { SidebarProps } from "../lib/types";

export default function AddItemForm({ itemText, setItemText }: SidebarProps) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(itemText);
			}}
		>
			<h2>Add an item:</h2>
			<input
				type="text"
				value={""}
				onChange={(e) => {
					// setItemText(e.target.value);
					console.log(e.target.value);
				}}
			/>
			<Button>Add Item</Button>
		</form>
	);
}
