import { create } from "zustand";

interface AsideProps {
	moreState: boolean;
	setMoreStateOn: () => void;

	categoryState: boolean;
	setCategoryStateOn: () => void;

	socialCategoryState: boolean;
	setSocialCategoryStateOn: () => void;
	setSocialCategoryStateOff: () => void;

	promotionCategoryState: boolean;
	setPromotionCategoryStateOn: () => void;
	setPromotionCategoryStateOff: () => void;

	forumCategoryState: boolean;
	setForumCategoryStateOn: () => void;
	setForumCategoryStateOff: () => void;

	updateCategoryState: boolean;
	setUpdateCategoryStateOn: () => void;
	setUpdateCategoryStateOff: () => void;

	showRightSideState: boolean;
	setShowRightSideStateOn: () => void;
	setShowRIghtSideStateOff: () => void;
}

const useAsideState = create<AsideProps>((set) => ({
	moreState: false,
	setMoreStateOn: () => set((state) => ({ moreState: !state.moreState })),

	categoryState: false,
	setCategoryStateOn: () => set((state) => ({ categoryState: !state.categoryState })),

	socialCategoryState: false,
	setSocialCategoryStateOn: () => set(() => ({ socialCategoryState: true })),
	setSocialCategoryStateOff: () => set(() => ({ socialCategoryState: false })),

	promotionCategoryState: false,
	setPromotionCategoryStateOn: () => set(() => ({ promotionCategoryState: true })),
	setPromotionCategoryStateOff: () => set(() => ({ promotionCategoryState: false })),

	forumCategoryState: false,
	setForumCategoryStateOn: () => set(() => ({ forumCategoryState: true })),
	setForumCategoryStateOff: () => set(() => ({ forumCategoryState: false })),

	updateCategoryState: false,
	setUpdateCategoryStateOn: () => set(() => ({ updateCategoryState: true })),
	setUpdateCategoryStateOff: () => set(() => ({ updateCategoryState: false })),

	showRightSideState: true,
	setShowRightSideStateOn: () => set(() => ({ showRightSideState: true })),
	setShowRIghtSideStateOff: () => set(() => ({ showRightSideState: false })),
}));

export default useAsideState;
