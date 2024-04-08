import { BtnSecondaryContainer } from "./BtnStyle";
interface BtnProps {
	name: string;
}
const BtnSecondary = ({ name }: BtnProps) => {
	return (
		<>
			<BtnSecondaryContainer>{name}</BtnSecondaryContainer>
		</>
	);
};

export default BtnSecondary;
