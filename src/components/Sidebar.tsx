import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { SidebarProps } from "../lib/types";

export default function Sidebar({
	handleAddItem,
}: SidebarProps): React.JSX.Element {
	return (
		<div className="sidebar">
			<AddItemForm handleAddItem={handleAddItem} />
			<ButtonGroup />
		</div>
	);
}
