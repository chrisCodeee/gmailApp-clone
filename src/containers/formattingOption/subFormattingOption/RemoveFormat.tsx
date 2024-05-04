import { LiaRemoveFormatSolid } from "react-icons/lia";
import Formatting from "./Formatting";
import { useComposeMessageState } from "../../../state-management";

const RemoveFormat = () => {
	const { setBoldStateOff, setItalicStateOff, setUnderlineStateOff, setFontSizeOff, setBgColorOff, setColorOff, setAlignSelectStateOff, setBulletListOff, setNumberListOff, setStrikethroughStateOff, setIndexTextOff } = useComposeMessageState();
	const removeFormat = () => {
		setBoldStateOff();
		setItalicStateOff();
		setUnderlineStateOff();
		setFontSizeOff();
		setBgColorOff();
		setColorOff();
		setAlignSelectStateOff();
		setBulletListOff();
		setNumberListOff();
		setStrikethroughStateOff();
		setIndexTextOff();
	};
	return (
		<>
			<div onClick={removeFormat}>
				<Formatting title="Remove formatting (Ctrl-\)" icon={<LiaRemoveFormatSolid size={20} />} />
			</div>
		</>
	);
};

export default RemoveFormat;
