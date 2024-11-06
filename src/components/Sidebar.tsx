import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { ItemProps } from "../lib/types";

export default function Sidebar({ item, setItem }: ItemProps) {
	return (
		<div className="sidebar">
			<AddItemForm item={item} setItem={setItem} />
			<ButtonGroup />
		</div>
	);
}
