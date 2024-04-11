import { BtnPrimaryContainer } from "./BtnStyle";
interface BtnPrimaryProps {
	name: string;
	borderRadius?: string;
	title?: string;
	margin?: string;
}

const BtnPrimary = ({ name, borderRadius = "5px", margin = "ms-3", title }: BtnPrimaryProps) => {
	return (
		<>
			<BtnPrimaryContainer className={margin} style={{ borderRadius: borderRadius }} title={title}>
				{name}
			</BtnPrimaryContainer>
		</>
	);
};

export default BtnPrimary;
