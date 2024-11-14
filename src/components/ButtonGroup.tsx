import Button from "./Button";
import { SidebarProps } from "../lib/types";

export default function ButtonGroup({
	handleRemoveAllItems,
	handleResetToInitial,
	handleMarkAllComplete,
	handleMarkAllIncomplete,
}: SidebarProps) {
	const secondaryButtons = [
		{
			text: "Mark all as complete",
			function: handleMarkAllComplete,
		},
		{
			text: "Mark all as incomplete",
			function: handleMarkAllIncomplete,
		},
		{
			text: "Reset to initial",
			function: handleResetToInitial,
		},
		{
			text: "Remove all items",
			function: handleRemoveAllItems,
		},
	];
	return (
		<section className="button-group">
			{secondaryButtons.map((item) => {
				return (
					<Button
						key={item.text + item.function?.toString()}
						onClick={item.function}
						buttonStyle="secondary"
					>
						{item.text}
					</Button>
				);
			})}
		</section>
	);
}
