import { create } from "zustand";

interface ComposeMessageProps {
	composeMessageMinimizeState: boolean;
	setComposeMessageMinimizeStateOn: () => void;
	setComposeMessageMinimizeStateOff: () => void;

	maximizeState: boolean;
	setMaximizeStateOn: () => void;
	setMaximizeStateOff: () => void;

	recipientState: boolean;
	setRecipientStateOn: () => void;
	setRecipientStateOff: () => void;

	formattingOptionState: boolean;
	setFormattingOptioneStateOn: () => void;

	moreFormattingOptionState: boolean;
	setMoreFormattingOptioneStateOn: () => void;
	setMoreFormattingOptioneStateOff: () => void;

	fontStyleState: boolean;
	setFontStyleStateOn: () => void;
	setFontStyleStateOff: () => void;

	fontStyle: string;
	fontFamilyStyle: string;
	setFontStyle: (style: string, font: string, index: number) => void;

	tick: number;
}

const useComposeMessageState = create<ComposeMessageProps>((set) => ({
	composeMessageMinimizeState: false,
	setComposeMessageMinimizeStateOn: () => set((store) => ({ composeMessageMinimizeState: !store.composeMessageMinimizeState })),
	setComposeMessageMinimizeStateOff: () => set(() => ({ composeMessageMinimizeState: false })),

	maximizeState: false,
	setMaximizeStateOn: () => set((store) => ({ maximizeState: !store.maximizeState })),
	setMaximizeStateOff: () => set(() => ({ maximizeState: false })),

	recipientState: true,
	setRecipientStateOn: () => set(() => ({ recipientState: true })),
	setRecipientStateOff: () => set(() => ({ recipientState: false })),

	formattingOptionState: false,
	setFormattingOptioneStateOn: () => set((store) => ({ formattingOptionState: !store.formattingOptionState })),

	moreFormattingOptionState: false,
	setMoreFormattingOptioneStateOn: () => set((store) => ({ moreFormattingOptionState: !store.moreFormattingOptionState })),
	setMoreFormattingOptioneStateOff: () => set(() => ({ moreFormattingOptionState: false })),

	fontStyleState: false,
	setFontStyleStateOn: () => set((store) => ({ fontStyleState: !store.fontStyleState })),
	setFontStyleStateOff: () => set(() => ({ fontStyleState: false })),

	fontFamilyStyle: "",
	tick: 0,
	fontStyle: "",
	setFontStyle: (style, font, index) => set(() => ({ fontStyle: style, fontFamilyStyle: font, tick: index })),
}));

export default useComposeMessageState;
