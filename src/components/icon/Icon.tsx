import { ReactNode } from "react";
import { IconContainer } from "./IconStyles";

interface IconProps {
	children: ReactNode;
}
const Icon = ({ children }: IconProps) => {
	return <IconContainer>{children}</IconContainer>;
};

export default Icon;
