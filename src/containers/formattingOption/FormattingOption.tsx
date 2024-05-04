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
	const {
		maximizeState,
		fontStyle,
		alignTextSelectIcon,
		setFontStyleStateOn,
		setColorStateOn,
		setFontSizeStateOff,
		setFontStyleStateOff,
		setMoreFormattingOptioneStateOn,
		setMoreFormattingOptioneStateOff,
		setAlignFormattingOptioneStateOff,
		setAlignFormattingOptioneStateOn,
		setFontSizeStateOn,
		setBoldStateOn,
		setItalicStateOn,
		setUnderlineStateOn,
		setColorStateOff,
		setNumberList,
		setBulletList,
		setNumberListOff,
		setBulletListOff,
	} = useComposeMessageState();

	const closeFormattingOption = () => {
		setMoreFormattingOptioneStateOff();
		setFontStyleStateOff();
		setFontSizeStateOff();
	};
	return (
		<>
			<FormattingOptionWrapper maximizeState={maximizeState}>
				<FormattingOptionContainer maximizeState={maximizeState}>
					<FormatFlexContainer
						style={{ marginLeft: "3.5px" }}
						onClick={() => {
							closeFormattingOption();
							setAlignFormattingOptioneStateOff();
						}}>
						<Formatting title="Undo (Ctrl-Z)" icon={<LuUndo2 size={formatIconSize} />} />

						<Formatting title="Redo (Ctrl-Y)" icon={<LuRedo2 size={formatIconSize} />} />
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer
						onClick={() => {
							setMoreFormattingOptioneStateOff();
							setAlignFormattingOptioneStateOff();
							setFontStyleStateOn();
							setFontSizeStateOff();
							setColorStateOff();
						}}>
						<FormatIcon title="Font (Ctrl-Shift-5, Ctrl-Shift-6)" padding="0.4rem 0 0.4rem 0.4rem" margin="0">
							<FormatFlexContainer style={{ width: "100px" }}>
								<span style={{ marginRight: "8px" }}>{fontStyle ? fontStyle : "Sans Serif"}</span>

								<MdArrowDropDown size={formatIconSize} />
							</FormatFlexContainer>
						</FormatIcon>
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer
						onClick={() => {
							closeFormattingOption();
							setFontSizeStateOn();
							setColorStateOff();
							setAlignFormattingOptioneStateOff();
						}}>
						<FormatIcon title="Size (Ctrl-Shift--, Ctrl-Shift-+)" padding="0.4rem 0 0.4rem 0.4rem" margin="0">
							<FormatFlexContainer>
								<MdFormatSize size={20} />

								<MdArrowDropDown size={formatIconSize} />
							</FormatFlexContainer>
						</FormatIcon>
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer
						onClick={() => {
							closeFormattingOption();
							setAlignFormattingOptioneStateOff();
						}}>
						<div
							onClick={() => {
								setBoldStateOn();
								setColorStateOff();
							}}>
							<Formatting title="Bold (Ctrl-B)" icon={<AiOutlineBold size={formatIconSize} />} />
						</div>

						<div
							onClick={() => {
								setItalicStateOn();
								setColorStateOff();
							}}>
							<Formatting title="Italic (Ctrl-I)" icon={<MdFormatItalic size={21} />} />
						</div>

						<div
							onClick={() => {
								setUnderlineStateOn();
								setColorStateOff();
							}}>
							<Formatting title="Underline (Ctrl-U)" icon={<MdFormatUnderlined size={21} />} />
						</div>

						<div onClick={setColorStateOn}>
							<FormatIcon title="Text color" padding="0.4rem 0 0.4rem 0.4rem">
								<FormatFlexContainer>
									<MdFormatColorText size={16} />
									<MdArrowDropDown size={formatIconSize} />
								</FormatFlexContainer>
							</FormatIcon>
						</div>
					</FormatFlexContainer>

					<FormatDivider>&nbsp;</FormatDivider>

					<FormatFlexContainer
						onClick={() => {
							closeFormattingOption();
							setColorStateOff();
						}}>
						<div onClick={setAlignFormattingOptioneStateOn}>
							<FormatIcon title="Align" padding="0.4rem 0 0.4rem 0.4rem">
								<FormatFlexContainer>
									{/* <MdOutlineFormatAlignLeft size={formatIconSize} /> */}
									{alignTextSelectIcon ? alignTextSelectIcon : <MdOutlineFormatAlignLeft size={formatIconSize} />}
									<MdArrowDropDown size={formatIconSize} />
								</FormatFlexContainer>
							</FormatIcon>
						</div>

						<div className="d-flex" onClick={setAlignFormattingOptioneStateOff}>
							<div
								onClick={() => {
									setNumberList("decimal");
									setBulletListOff();
								}}>
								<Formatting title="Numbered list (Ctrl-Shift-7)" icon={<MdFormatListNumbered size={20} />} />
							</div>
							<div
								onClick={() => {
									setBulletList("disc");
									setNumberListOff();
								}}>
								<Formatting title="Bulleted list (Ctrl-Shift-8)" icon={<MdFormatListBulleted size={20} />} />
							</div>
						</div>

						{maximizeState && <FullFormatingOption />}
					</FormatFlexContainer>

					{!maximizeState && (
						<>
							<FormatDivider>&nbsp;</FormatDivider>
							<div
								onClick={() => {
									setMoreFormattingOptioneStateOn();
									setFontStyleStateOff();
									setColorStateOff();
									setAlignFormattingOptioneStateOff();
								}}>
								<FormatIcon title="More formatting options" padding="0.4rem 0.15rem">
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
