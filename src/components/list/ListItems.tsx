import List from "./List";
import useListParams from "./useListParams";
import { useAsideState } from "../../state-management";
import { HiPlus } from "react-icons/hi";
import { AsideCategoryArrowIcon, AsideCategoryDropdown, AsideIcon, AsideIconWrapper, AsideLabelText, AsideLabelWrapper, AsideIconContainer, AsideListText, ListItemsWrapper } from "./ListStyles";
import { Icon } from "..";

const ListItems = () => {
	const { moreState, categoryState, setCategoryStateOn, setMoreStateOn } = useAsideState();
	const { list_1, list_2, list_3, list_4, more, category, iconSize, categoryArrowIcon } = useListParams();
	return (
		<>
			<ListItemsWrapper>
				{list_1.map((items) => (
					<List icon={items.icon} name={items.name} count={items.count} link={items.link} key={items.name} />
				))}

				<AsideIconContainer onClick={setMoreStateOn}>
					<AsideIconWrapper>
						<AsideIcon>{more.icon}</AsideIcon>
						<AsideListText>{more.name}</AsideListText>
					</AsideIconWrapper>
				</AsideIconContainer>

				{moreState && (
					<>
						{list_2.map((items) => (
							<List icon={items.icon} name={items.name} count={items.count} link={items.link} key={items.name} />
						))}

						<AsideIconContainer style={{ position: "relative" }} onClick={setCategoryStateOn}>
							<AsideCategoryArrowIcon>{categoryArrowIcon}</AsideCategoryArrowIcon>
							<AsideIconWrapper>
								<AsideIcon>{category.icon}</AsideIcon>
								<AsideListText>{category.name}</AsideListText>
							</AsideIconWrapper>
						</AsideIconContainer>

						{categoryState && (
							<>
								{list_4.map((items) => (
									<AsideCategoryDropdown onMouseEnter={items.onMouseHover} onMouseLeave={items.onMouseLeave}>
										<List icon={items.icon} name={items.name} count={items.count} link={items.link} key={items.name} text_bold="500" paddingRight="0" paddingLeft="1rem" />
									</AsideCategoryDropdown>
								))}
							</>
						)}

						{list_3.map((items) => (
							<List icon={items.icon} name={items.name} link={items.link} key={items.name} />
						))}
					</>
				)}
			</ListItemsWrapper>

			<AsideLabelWrapper>
				<AsideLabelText>Labels</AsideLabelText>
				<Icon>
					<HiPlus size={iconSize} />
				</Icon>
			</AsideLabelWrapper>
		</>
	);
};

export default ListItems;
