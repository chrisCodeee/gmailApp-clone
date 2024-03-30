import { create } from "zustand";

interface InboxProps {
	inboxState: boolean;
	setInboxStateOn: () => void;
	setInboxStateOff: () => void;

	checkedState: boolean;
	setCheckedStateOn: () => void;
	// setCheckedStateOff: () => void;
}

const useInboxState = create<InboxProps>((set) => ({
	inboxState: false,
	setInboxStateOn: () => set(() => ({ inboxState: true })),
	setInboxStateOff: () => set(() => ({ inboxState: false })),

	checkedState: false,
	setCheckedStateOn: () => set((state) => ({ checkedState: !state.checkedState })),
	// setCheckedStateOff: () => set(() => ({ checkedState: false })),
}));

export default useInboxState;
