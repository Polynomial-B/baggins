import Counter from "./Counter";
import Logo from "./Logo";

export default function Header(): React.JSX.Element {
	return (
		<header>
			<Logo />
			<Counter />
		</header>
	);
}
