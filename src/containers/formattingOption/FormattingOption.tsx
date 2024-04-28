import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { FormatIcon } from "../compose/component";
import { formatIconSize } from "../compose/component/ComposeFormatIcon";
import { MdArrowDropDown, MdFormatColorText, MdFormatItalic, MdFormatListBulleted, MdFormatListNumbered, MdFormatSize, MdFormatUnderlined, MdOutlineFormatAlignLeft } from "react-icons/md";
import { AiOutlineBold } from "react-icons/ai";
import { FormatDivider, FormatFlexContainer, FormattingOptionContainer, FormattingOptionWrapper } from "./FormattingOptionStyle";
import { useComposeMessageState } from "../../state-management";
import FullFormatingOption from "./FullFormatingOption";
import { Formatting } from "./subFormattingOption";

const FormattingOption = () => {
	const { maximizeState, fontStyle, setFontStyleStateOn, setFontStyleStateOff, setMoreFormattingOptioneStateOn, setMoreFormattingOptioneStateOff } = useComposeMessageState();

	const closeFormattingOption = () => {
		setMoreFormattingOptioneStateOff();
		setFontStyleStateOff();
	};
	return (
		<>
			<FormattingOptionWrapper maximizeState={maximizeState}>
				<FormattingOptionContainer maximizeState={maximizeState}>
					<FormatFlexContainer style={{ marginLeft: "3.5px" }} onClick={closeFormattingOption}>
						<Formatting title="Undo (Ctrl-Z)" icon={<LuUndo2 size={formatIconSize} />} />

						<Formatting title="Redo (Ctrl-Y)" icon={<LuRedo2 size={formatIconSize} />} />
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer
						onClick={() => {
							setMoreFormattingOptioneStateOff();
							setFontStyleStateOn();
						}}>
						<FormatIcon title="Font (Ctrl-Shift-5, Ctrl-Shift-6)" padding="0.4rem 0 0.4rem 0.4rem" margin="0">
							<FormatFlexContainer style={{ width: "100px" }}>
								<span style={{ marginRight: "8px" }}>{fontStyle ? fontStyle : "Sans Serif"}</span>

								<MdArrowDropDown size={formatIconSize} />
							</FormatFlexContainer>
						</FormatIcon>
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer onClick={closeFormattingOption}>
						<FormatIcon title="Size (Ctrl-Shift--, Ctrl-Shift-+)" padding="0.4rem 0 0.4rem 0.4rem" margin="0">
							<FormatFlexContainer>
								<MdFormatSize size={20} />

								<MdArrowDropDown size={formatIconSize} />
							</FormatFlexContainer>
						</FormatIcon>
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer onClick={closeFormattingOption}>
						<Formatting title="Bold (Ctrl-B)" icon={<AiOutlineBold size={formatIconSize} />} />

						<Formatting title="Italic (Ctrl-I)" icon={<MdFormatItalic size={21} />} />

						<Formatting title="Underline (Ctrl-U)" icon={<MdFormatUnderlined size={21} />} />

						<FormatIcon title="Text color" padding="0.4rem 0 0.4rem 0.4rem">
							<FormatFlexContainer>
								<MdFormatColorText size={16} />

								<MdArrowDropDown size={formatIconSize} />
							</FormatFlexContainer>
						</FormatIcon>
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer onClick={closeFormattingOption}>
						<FormatIcon title="Align" padding="0.4rem 0 0.4rem 0.4rem">
							<FormatFlexContainer>
								<MdOutlineFormatAlignLeft size={formatIconSize} />

								<MdArrowDropDown size={formatIconSize} />
							</FormatFlexContainer>
						</FormatIcon>

						<Formatting title="Numbered list (Ctrl-Shift-7)" icon={<MdFormatListNumbered size={20} />} />

						<Formatting title="Bulleted list (Ctrl-Shift-8)" icon={<MdFormatListBulleted size={20} />} />

						{maximizeState && <FullFormatingOption />}
					</FormatFlexContainer>

					{!maximizeState && (
						<>
							<FormatDivider>&nbsp;</FormatDivider>
							<div
								onClick={() => {
									setMoreFormattingOptioneStateOn();
									setFontStyleStateOff();
								}}>
								<FormatIcon title="Numbered list (Ctrl-Shift-7)" padding="0.4rem 0.15rem">
									<MdArrowDropDown size={formatIconSize} />
								</FormatIcon>
							</div>
						</>
					)}
				</FormattingOptionContainer>
			</FormattingOptionWrapper>
		</>
	);
};

export default FormattingOption;
