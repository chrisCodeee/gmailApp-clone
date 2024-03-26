import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AsideCount, AsideIcon, AsideIconWrapper, AsideList, AsideListText, flex } from "./ListStyles";

type ListProps = {
	icon: ReactNode;
	name: string;
	count?: string; //Change Later to number
	link?: any; //Change to string
	bg?: string;
};

interface List {
	items: ListProps;
	text_bold?: string;
}

const List = ({ items, text_bold }: List) => {
	return (
		<>
			<AsideList style={{ backgroundColor: items.bg }}>
				<Link to={items.link} className={flex}>
					<AsideIconWrapper>
						<AsideIcon>{items.icon}</AsideIcon>
						<AsideListText style={{ fontWeight: text_bold }}>{items.name}</AsideListText>
					</AsideIconWrapper>
					<AsideCount>{items.count}</AsideCount>
				</Link>
			</AsideList>
		</>
	);
};

export default List;
