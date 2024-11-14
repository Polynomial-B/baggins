import { ButtonProps } from "../lib/types";

export default function Button({
	children,
	buttonStyle,
	onClick,
}: ButtonProps): React.JSX.Element {
	return (
		<button
			onClick={onClick}
			className={`button ${
				buttonStyle === "secondary" ? "button--secondary" : ""
			}`}
		>
			{children}
		</button>
	);
}
