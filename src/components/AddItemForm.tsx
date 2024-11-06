import Button from "./Button";
import { ItemProps } from "../lib/types";

export default function AddItemForm({ item, setItem }: ItemProps) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(item);
			}}
		>
			<h2>Add an item:</h2>
			<input
				type="item"
				value={item}
				onChange={(e) => {
					setItem(e.target.value);
				}}
			/>
			<Button>Add Item</Button>
		</form>
	);
}
