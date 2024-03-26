import styled from "styled-components";

const AsideList = styled.li`
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	padding: 0.5rem 1rem 0.5rem 3rem;
	cursor: pointer;

	& *:focus {
		font-weight: 700;
	}

	&:hover {
		background-color: #e9eef6;
	}
`;

const AsideIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const AsideIcon = styled.span`
	transform: translateY(-0.2rem);
	display: inline-block;
`;

const AsideListText = styled.span`
	margin-left: 1rem;
`;

const AsideCount = styled.span`
	font-size: 1.2rem;
`;

const AsideCategoryArrowIcon = styled.span`
	position: absolute;
	left: 15px;
	top: 2.9px;
`;

const AsideCategoryDropdown = styled.div`
	padding: 0 0 0 1.5rem;
`;

const AsideLabelWrapper = styled.div`
	margin: 2rem 0 0 0;
	padding: 0 0 0 3rem;
	display: flex;
	justify-content: space-between;
`;

const AsideLabelText = styled.h3``;

const ListItemsWrapper = styled.ul``;

const flex = "d-flex justify-content-between align-items-center";

export { AsideList, AsideIconWrapper, AsideIcon, AsideListText, AsideCount, flex, ListItemsWrapper, AsideCategoryArrowIcon, AsideCategoryDropdown, AsideLabelWrapper, AsideLabelText };
