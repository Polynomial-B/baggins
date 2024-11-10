import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { SidebarProps } from "../lib/types";

export default function Sidebar({
	items,
	setItems,
}: SidebarProps): React.JSX.Element {
	return (
		<div className="sidebar">
			<AddItemForm items={items} setItems={setItems} />
			<ButtonGroup />
		</div>
	);
}
