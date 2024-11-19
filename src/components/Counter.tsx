import { CounterProps } from "../lib/types";

export default function Counter({ counterTotal, completed }: CounterProps) {
	return (
		<p>
			<b>{Number(completed)}</b> / {Number(counterTotal)} item
			{Number(counterTotal) > 1 ? "s" : ""} packed
		</p>
	);
}
