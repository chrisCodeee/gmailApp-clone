import { create } from "zustand";

interface NavBarProps {
	showMoreState: boolean;
	setShowMoreStateOn: () => void;
	setShowMoreStateOff: () => void;

	supportState: boolean;
	setSupportStateOn: () => void;
	setSupportStateOff: () => void;

	settingState: boolean;
	setSettingStateOn: () => void;
	setSettingStateOff: () => void;
}

const useNavBarState = create<NavBarProps>((set) => ({
	showMoreState: false,
	setShowMoreStateOn: () => set(() => ({ showMoreState: true })),
	setShowMoreStateOff: () => set(() => ({ showMoreState: false })),

	supportState: false,
	setSupportStateOn: () => set((store) => ({ supportState: !store.supportState })),
	setSupportStateOff: () => set(() => ({ supportState: false })),

	settingState: false,
	setSettingStateOn: () => set((store) => ({ settingState: !store.settingState })),
	setSettingStateOff: () => set(() => ({ settingState: false })),
}));

export default useNavBarState;
