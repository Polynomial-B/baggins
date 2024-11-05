import Button from "./Button";

const secondaryButtons = [
	"Mark All As Completed",
	"Mark All As Incompleted",
	"Undo Changes",
	"Remove All Items",
];
export default function ButtonGroup() {
	return (
		<section className="button-group">
			{secondaryButtons.map((item) => {
				return (
					<Button key={item} type="secondary">
						{item}
					</Button>
				);
			})}
		</section>
	);
}
