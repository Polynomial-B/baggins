import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({
	counterTotal,
	completed,
}: {
	counterTotal: number;
}): React.JSX.Element {
	return (
		<header>
			<Logo />
			<Counter counterTotal={counterTotal} completed={completed} />
		</header>
	);
}
