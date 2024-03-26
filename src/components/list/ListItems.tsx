import List from "./List";
import useListParams from "./useListParams";
import { useAsideState } from "../../state-management";
import { HiPlus } from "react-icons/hi";
import { AsideCategoryArrowIcon, AsideCategoryDropdown, AsideIcon, AsideIconWrapper, AsideLabelText, AsideLabelWrapper, AsideList, AsideListText, ListItemsWrapper } from "./ListStyles";

const ListItems = () => {
	const { moreState, categoryState, setCategoryStateOn, setMoreStateOn } = useAsideState();
	const { list_1, list_2, list_3, list_4, more, category, iconSize, categoryArrowIcon } = useListParams();
	return (
		<>
			<ListItemsWrapper>
				{list_1.map((items) => (
					<List items={items} key={items.name} />
				))}

				<AsideList onClick={setMoreStateOn}>
					<AsideIconWrapper>
						<AsideIcon>{more.icon}</AsideIcon>
						<AsideListText>{more.name}</AsideListText>
					</AsideIconWrapper>
				</AsideList>

				{moreState && (
					<>
						{list_2.map((items) => (
							<List items={items} key={items.name} />
						))}

						<AsideList style={{ position: "relative" }} onClick={setCategoryStateOn}>
							<AsideCategoryArrowIcon>{categoryArrowIcon}</AsideCategoryArrowIcon>
							<AsideIconWrapper>
								<AsideIcon>{category.icon}</AsideIcon>
								<AsideListText>{category.name}</AsideListText>
							</AsideIconWrapper>
						</AsideList>

						{categoryState && (
							<AsideCategoryDropdown>
								{list_4.map((items) => (
									<List items={items} key={items.name} text_bold="500" />
								))}
							</AsideCategoryDropdown>
						)}

						{list_3.map((items) => (
							<List items={items} key={items.name} />
						))}
					</>
				)}
			</ListItemsWrapper>

			<AsideLabelWrapper>
				<AsideLabelText>Labels</AsideLabelText>
				<HiPlus size={iconSize} />
			</AsideLabelWrapper>
		</>
	);
};

export default ListItems;
