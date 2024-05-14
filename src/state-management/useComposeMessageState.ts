import { ReactNode } from "react";
import { create } from "zustand";

interface ComposeMessageProps {
	boldState: boolean;
	setBoldStateOn: () => void;
	setBoldStateOff: () => void;

	italicState: boolean;
	setItalicStateOn: () => void;
	setItalicStateOff: () => void;

	underlineState: boolean;
	setUnderlineStateOn: () => void;
	setUnderlineStateOff: () => void;

	composeMessageMinimizeState: boolean;
	setComposeMessageMinimizeStateOn: () => void;
	setComposeMessageMinimizeStateOff: () => void;

	maximizeState: boolean;
	setMaximizeStateOn: () => void;
	setMaximizeStateOff: () => void;

	recipientState: boolean;
	setRecipientStateOn: () => void;
	setRecipientStateOff: () => void;

	strikethroughState: boolean;
	setStrikethroughStateOn: () => void;
	setStrikethroughStateOff: () => void;

	formattingOptionState: boolean;
	setFormattingOptioneStateOn: () => void;
	setFormattingOptioneStateOff: () => void;

	moreFormattingOptionState: boolean;
	setMoreFormattingOptioneStateOn: () => void;
	setMoreFormattingOptioneStateOff: () => void;

	alignFormattingOptionState: boolean;
	setAlignFormattingOptioneStateOn: () => void;
	setAlignFormattingOptioneStateOff: () => void;

	fontStyleState: boolean;
	setFontStyleStateOn: () => void;
	setFontStyleStateOff: () => void;

	fontSizeState: boolean;
	setFontSizeStateOn: () => void;
	setFontSizeStateOff: () => void;

	colorState: boolean;
	setColorStateOn: () => void;
	setColorStateOff: () => void;

	alignTextSelectIcon: ReactNode;
	alignText: string;
	setAlignSelectState: (icon: ReactNode, alignValue: string) => void;
	setAlignSelectStateOff: () => void;

	listType: string;
	numberList: boolean;
	setNumberList: (listType: string) => void;
	setNumberListOff: () => void;

	bulletList: boolean;
	setBulletList: (listType: string) => void;
	setBulletListOff: () => void;

	fontStyle: string;
	fontFamilyStyle: string;
	setFontStyle: (style: string, font: string, index: number) => void;

	tick: number;
	formatColorSelectState: string;
	formatBgColorSelectState: string;

	fontSizeIndex: number;
	fontSize: string;
	setFontSize: (fontSize: string, index: number) => void;
	setFontSizeOff: () => void;

	bgColor: string;
	setBgColor: (bgColor: string) => void;
	setBgColorOff: () => void;

	color: string;
	setColor: (color: string) => void;
	setColorOff: () => void;

	indentText: number;
	setIndexTextIncrease: () => void;
	setIndexTextDecrease: () => void;
	setIndexTextOff: () => void;

	urlLinkState: boolean;
	mainLinkText: string;
	displayText: string;
	composeUrlText: any[];
	urlText: string;
	setDisplayText: (displayTextValue: string) => void;
	setUrlText: (urlTextValue: string) => void;
	setUrlLinkState: (state: boolean) => void;
	setDisplayComposeTextState: () => void;
	setMainUrlLink: () => void;

	insertLinkState: boolean;
	setInsertLinkOn: () => void;
	setInsertLinkOff: () => void;

	insertLinkEmailState: boolean;
	setInsertLinkEmailOn: () => void;
	setInsertLinkEmailOff: () => void;

	alertState: boolean;
	setAlertOn: () => void;
	setAlertOff: () => void;

	notActiveState: boolean;
	setNotActiveOn: () => void;
	setNotActiveOff: () => void;

	confidentialModeState: boolean;
	setConfidentialModeOn: () => void;
	setConfidentialModeOff: () => void;

	confidentialModeExpireState: boolean;
	setConfidentialModeExpireOn: () => void;
	setConfidentialModeExpireOff: () => void;

	confidentialModeExpireTime: string;
	confidentialModeExpireNextTime: string;
	confidentialModeExpireNextTimeShow: string;
	setConfidentialModeExpireTime: (timeFrame: string, nextTime: string, nextTimeShow: string) => void;

	confidentialModeExpireNextTimeValueOnClick: string;

	confidentialModeTimeShow: boolean;
	setConfidentialModeTimeShowOn: () => void;
	setConfidentialModeTimeShowOff: () => void;
}

const useComposeMessageState = create<ComposeMessageProps>((set) => ({
	boldState: false,
	setBoldStateOn: () => set((store) => ({ boldState: !store.boldState })),
	setBoldStateOff: () => set(() => ({ boldState: false })),

	italicState: false,
	setItalicStateOn: () => set((store) => ({ italicState: !store.italicState })),
	setItalicStateOff: () => set(() => ({ italicState: false })),

	underlineState: false,
	setUnderlineStateOn: () => set((store) => ({ underlineState: !store.underlineState })),
	setUnderlineStateOff: () => set(() => ({ underlineState: false })),

	composeMessageMinimizeState: false,
	setComposeMessageMinimizeStateOn: () => set((store) => ({ composeMessageMinimizeState: !store.composeMessageMinimizeState })),
	setComposeMessageMinimizeStateOff: () => set(() => ({ composeMessageMinimizeState: false })),

	maximizeState: false,
	setMaximizeStateOn: () => set((store) => ({ maximizeState: !store.maximizeState })),
	setMaximizeStateOff: () => set(() => ({ maximizeState: false })),

	recipientState: true,
	setRecipientStateOn: () => set(() => ({ recipientState: true })),
	setRecipientStateOff: () => set(() => ({ recipientState: false })),

	strikethroughState: false,
	setStrikethroughStateOn: () => set((store) => ({ strikethroughState: !store.strikethroughState })),
	setStrikethroughStateOff: () => set(() => ({ strikethroughState: false })),

	formattingOptionState: false,
	setFormattingOptioneStateOn: () => set((store) => ({ formattingOptionState: !store.formattingOptionState })),
	setFormattingOptioneStateOff: () => set(() => ({ formattingOptionState: false })),

	moreFormattingOptionState: false,
	setMoreFormattingOptioneStateOn: () => set((store) => ({ moreFormattingOptionState: !store.moreFormattingOptionState })),
	setMoreFormattingOptioneStateOff: () => set(() => ({ moreFormattingOptionState: false })),

	alignFormattingOptionState: false,
	setAlignFormattingOptioneStateOn: () => set((store) => ({ alignFormattingOptionState: !store.alignFormattingOptionState })),
	setAlignFormattingOptioneStateOff: () => set(() => ({ alignFormattingOptionState: false })),

	fontStyleState: false,
	setFontStyleStateOn: () => set((store) => ({ fontStyleState: !store.fontStyleState })),
	setFontStyleStateOff: () => set(() => ({ fontStyleState: false })),

	fontSizeState: false,
	setFontSizeStateOn: () => set((store) => ({ fontSizeState: !store.fontSizeState })),
	setFontSizeStateOff: () => set(() => ({ fontSizeState: false })),

	colorState: false,
	setColorStateOn: () => set((store) => ({ colorState: !store.colorState })),
	setColorStateOff: () => set(() => ({ colorState: false })),

	alignTextSelectIcon: null,
	alignText: "",
	setAlignSelectState: (icon, alignValue) => set(() => ({ alignTextSelectIcon: icon, alignText: alignValue })),
	setAlignSelectStateOff: () => set(() => ({ alignTextSelectIcon: "", alignText: "" })),

	numberList: false,
	bulletList: false,
	listType: "",
	setNumberList: (listType) => set((store) => ({ numberList: !store.numberList, listType: listType, indentText: !store.numberList ? 40 : 0 })),
	setNumberListOff: () => set(() => ({ numberList: false })),

	setBulletList: (listType) => set((store) => ({ bulletList: !store.bulletList, listType: listType, indentText: !store.bulletList ? 40 : 0 })),
	setBulletListOff: () => set(() => ({ bulletList: false })),

	formatColorSelectState: "",
	formatBgColorSelectState: "",

	bgColor: "",
	setBgColor: (bgColor) => set(() => ({ bgColor: bgColor, formatBgColorSelectState: bgColor })),
	setBgColorOff: () => set(() => ({ bgColor: "", formatBgColorSelectState: "" })),

	color: "",
	setColor: (color) => set(() => ({ color: color, formatColorSelectState: color })),
	setColorOff: () => set(() => ({ color: "", formatColorSelectState: "" })),

	fontFamilyStyle: "",

	tick: 0,

	fontStyle: "",
	setFontStyle: (style, font, index) => set(() => ({ fontStyle: style, fontFamilyStyle: font, tick: index })),

	fontSizeIndex: 1,
	fontSize: "",
	setFontSize: (fontSize, index) => set(() => ({ fontSize: fontSize, fontSizeIndex: index })),
	setFontSizeOff: () => set(() => ({ fontSize: "", fontSizeIndex: 1 })),

	indentText: 0,
	setIndexTextIncrease: () => set((store) => ({ indentText: store.indentText + 40 })),
	setIndexTextDecrease: () => set((store) => ({ indentText: store.indentText > 0 ? store.indentText - 40 : store.indentText })),
	setIndexTextOff: () => set(() => ({ indentText: 0 })),

	urlLinkState: false,
	composeUrlText: [""],
	mainLinkText: "",
	displayText: "",
	urlText: "",
	setDisplayText: (displayTextValue) => set(() => ({ displayText: displayTextValue })),
	setUrlText: (urlTextValue) => set(() => ({ urlText: urlTextValue })),
	setUrlLinkState: (state) => set(() => ({ urlLinkState: state })),
	setDisplayComposeTextState: () => set((store) => ({ insertLinkState: false, composeUrlText: [...store.composeUrlText, store.mainLinkText] })),
	setMainUrlLink: () => set((store) => ({ mainLinkText: store.urlLinkState ? store.displayText : store.urlText })),

	insertLinkState: false,
	setInsertLinkOn: () => set((store) => ({ insertLinkState: !store.insertLinkState })),
	setInsertLinkOff: () => set(() => ({ insertLinkState: false })),

	insertLinkEmailState: true,
	setInsertLinkEmailOn: () => set(() => ({ insertLinkEmailState: false })),
	setInsertLinkEmailOff: () => set(() => ({ insertLinkEmailState: true })),

	alertState: false,
	setAlertOn: () => set(() => ({ alertState: true })),
	setAlertOff: () => set(() => ({ alertState: false })),

	notActiveState: false,
	setNotActiveOn: () => set(() => ({ notActiveState: true })),
	setNotActiveOff: () => set(() => ({ notActiveState: false })),

	confidentialModeState: false,
	setConfidentialModeOn: () => set((store) => ({ confidentialModeState: !store.confidentialModeState })),
	setConfidentialModeOff: () => set(() => ({ confidentialModeState: false })),

	confidentialModeExpireState: false,
	setConfidentialModeExpireOn: () => set(() => ({ confidentialModeExpireState: true })),
	setConfidentialModeExpireOff: () => set(() => ({ confidentialModeExpireState: false })),

	confidentialModeExpireTime: "",
	confidentialModeExpireNextTime: "",
	confidentialModeExpireNextTimeShow: "",
	setConfidentialModeExpireTime: (timeFrame, nextTime, nextTimeShow) => set(() => ({ confidentialModeExpireTime: timeFrame, confidentialModeExpireNextTime: nextTime, confidentialModeExpireNextTimeShow: nextTimeShow })),

	confidentialModeExpireNextTimeValueOnClick: "",
	confidentialModeTimeShow: false,
	setConfidentialModeTimeShowOn: () => set((store) => ({ confidentialModeExpireNextTimeValueOnClick: store.confidentialModeExpireNextTimeShow, confidentialModeTimeShow: true, confidentialModeState: false })),
	setConfidentialModeTimeShowOff: () => set(() => ({ confidentialModeTimeShow: false })),
}));

export default useComposeMessageState;
