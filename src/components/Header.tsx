import { CounterProps } from "../lib/types";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({
	counterTotal,
	completed,
}: CounterProps): React.JSX.Element {
	return (
		<header>
			<Logo />
			<Counter counterTotal={counterTotal} completed={completed} />
		</header>
	);
}
