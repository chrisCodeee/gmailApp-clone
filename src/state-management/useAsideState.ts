import { create } from "zustand";

interface AsideProps {
	moreState: boolean;
	setMoreStateOn: () => void;

	categoryState: boolean;
	setCategoryStateOn: () => void;
}

const useAsideState = create<AsideProps>((set) => ({
	moreState: false,
	setMoreStateOn: () => set((state) => ({ moreState: !state.moreState })),

	categoryState: false,
	setCategoryStateOn: () => set((state) => ({ categoryState: !state.categoryState })),
}));

export default useAsideState;
