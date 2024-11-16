import { CounterProps } from "../lib/types";

export default function Counter({ counterTotal, completed }: CounterProps) {
	return (
		<p>
			<b>{completed()}</b> / {counterTotal()} item
			{counterTotal() > 1 ? "s" : ""} packed
		</p>
	);
}
