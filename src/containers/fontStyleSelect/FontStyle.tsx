import { useComposeMessageState } from "../../state-management";
import { InputWrapper } from "../languageInputTool/LanguageInputToolStyle";
import { FontStyleWrapper } from "./FontStyleStyles";
import useFontStyles from "./useFontStyles";

const FontStyle = () => {
	const { setFontStyleStateOff } = useComposeMessageState();
	const { fontStyles } = useFontStyles();

	return (
		<>
			<FontStyleWrapper onClick={setFontStyleStateOff}>
				{fontStyles.map((item) => (
					<InputWrapper key={item.name} style={{ fontFamily: item.fontFamily }} onClick={item.onClick}>
						{item.name}
					</InputWrapper>
				))}
			</FontStyleWrapper>
		</>
	);
};

export default FontStyle;
