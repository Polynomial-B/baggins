export default function Button({
	children,
	type,
}: {
	children: React.ReactNode;
	type?: string;
}): React.JSX.Element {
	return (
		<button
			className={`button ${
				type === "secondary" ? "button--secondary" : ""
			}`}
		>
			{children}
		</button>
	);
}
