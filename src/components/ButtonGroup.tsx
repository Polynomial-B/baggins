import Button from "./Button";
import { secondaryButtons } from "../lib/constants";

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
