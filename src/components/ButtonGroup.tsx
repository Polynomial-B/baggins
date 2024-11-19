import Button from "./Button";
import { useItemsStore } from "./stores/itemsStore";

export default function ButtonGroup() {
	const markAllComplete = useItemsStore((state) => state.markAllComplete);
	const markAllIncomplete = useItemsStore((state) => state.markAllIncomplete);
	const resetToInitial = useItemsStore((state) => state.resetToInitial);
	const removeAllItems = useItemsStore((state) => state.removeAllItems);

	const secondaryButtons = [
		{
			text: "Mark all as complete",
			function: markAllComplete,
		},
		{
			text: "Mark all as incomplete",
			function: markAllIncomplete,
		},
		{
			text: "Reset to initial",
			function: resetToInitial,
		},
		{
			text: "Remove all items",
			function: removeAllItems,
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
