import { ReactNode } from "react";
import { FormatIconContainer } from "../ComposeStyles";

interface Props {
	title: string;
	children: ReactNode;
	margin?: string;
	padding?: string;
}
const FormatIcon = ({ title, children, margin = "0 0.2rem 0 0", padding = "0.4rem 0.5rem" }: Props) => {
	return (
		<>
			<FormatIconContainer title={title} margin={margin} padding={padding}>
				{/* <LiaPencilAltSolid size={18} color="rgba(32, 33, 36,.7)" /> */}
				{children}
			</FormatIconContainer>
		</>
	);
};

export default FormatIcon;
