import { ReactNode } from "react";
import { FormatIconContainer } from "../ComposeStyles";

interface Props {
	title: string;
	children: ReactNode;
	margin?: string;
}
const FormatIcon = ({ title, children, margin = "0 0.2rem 0 0" }: Props) => {
	return (
		<>
			<FormatIconContainer title={title} margin={margin}>
				{/* <LiaPencilAltSolid size={18} color="rgba(32, 33, 36,.7)" /> */}
				{children}
			</FormatIconContainer>
		</>
	);
};

export default FormatIcon;
