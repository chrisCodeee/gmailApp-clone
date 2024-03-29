import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AsideCount, AsideIcon, AsideIconWrapper, AsideList, AsideListText, flex } from "./ListStyles";

// type ListProps = {
// 	icon: ReactNode;
// 	name: string;
// 	count?: string | ReactNode; //Change Later to number
// 	link?: any; //Change to string
// 	bg?: string;
// };

interface List {
	icon: ReactNode;
	name: string;
	count?: string | ReactNode; //Change Later to number
	link?: any; //Change to string
	bg?: string;
	text_bold?: string;
	paddingRight?: string;
	paddingLeft?: string;
}

const List = ({ icon, name, count, link, bg, text_bold, paddingRight, paddingLeft }: List) => {
	return (
		<>
			<AsideList style={{ backgroundColor: bg, paddingRight: paddingRight }}>
				<Link to={link} className={flex}>
					<AsideIconWrapper style={{ paddingLeft: paddingLeft }}>
						<AsideIcon>{icon}</AsideIcon>
						<AsideListText style={{ fontWeight: text_bold }}>{name}</AsideListText>
					</AsideIconWrapper>
					<AsideCount>{count}</AsideCount>
				</Link>
			</AsideList>
		</>
	);
};

export default List;
