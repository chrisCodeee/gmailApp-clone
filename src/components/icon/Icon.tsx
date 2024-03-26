import { ReactNode } from "react";
import { IconContainer } from "./IconStyles";

interface IconProps {
	children: ReactNode;
}
const Icon = ({ children }: IconProps) => {
	return (
		<IconContainer>
			<span>{children}</span>
		</IconContainer>
	);
};

export default Icon;
