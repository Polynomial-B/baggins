import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { SidebarProps } from "../lib/types";

export default function Sidebar({
	handleAddItem,
	handleRemoveAllItems,
	handleResetToInitial,
	handleMarkAllComplete,
	handleMarkAllIncomplete,
}: SidebarProps): React.JSX.Element {
	return (
		<div className="sidebar">
			<AddItemForm handleAddItem={handleAddItem} />
			<ButtonGroup
				handleRemoveAllItems={handleRemoveAllItems}
				handleResetToInitial={handleResetToInitial}
				handleMarkAllComplete={handleMarkAllComplete}
				handleMarkAllIncomplete={handleMarkAllIncomplete}
			/>
		</div>
	);
}
