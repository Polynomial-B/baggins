import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { SidebarProps } from "../lib/types";

export default function Sidebar({
	itemText,
	setItemText,
}: SidebarProps): React.JSX.Element {
	return (
		<div className="sidebar">
			<AddItemForm itemText={itemText} setItemText={setItemText} />
			<ButtonGroup />
		</div>
	);
}
