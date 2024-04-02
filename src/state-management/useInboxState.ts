import { create } from "zustand";

interface InboxProps {
	inboxState: boolean;
	setInboxStateOn: () => void;
	setInboxStateOff: () => void;

	checkedState: boolean;
	setCheckedStateOn: () => void;

	primaryActive: boolean;
	setPrimaryActiveOff: () => void;
}

const useInboxState = create<InboxProps>((set) => ({
	inboxState: false,
	setInboxStateOn: () => set(() => ({ inboxState: true })),
	setInboxStateOff: () => set(() => ({ inboxState: false })),

	checkedState: false,
	setCheckedStateOn: () => set((state) => ({ checkedState: !state.checkedState })),

	primaryActive: true,
	setPrimaryActiveOff: () => set(() => ({ primaryActive: false })),
}));

export default useInboxState;
