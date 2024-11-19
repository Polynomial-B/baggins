import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "./stores/itemsStore";

export default function Header(): React.JSX.Element {
	const items = useItemsStore((state) => state.items);
	return (
		<header>
			<Logo />
			<Counter
				completed={items.filter((item) => item.packed).length}
				counterTotal={items.length}
			/>
		</header>
	);
}
