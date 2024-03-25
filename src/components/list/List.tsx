import { ReactNode } from "react";
import { Link } from "react-router-dom";

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
			<li className="ps-5 pe-3 py-2" style={{ backgroundColor: items.bg, borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}>
				<Link to={items.link} className="d-flex justify-content-between align-items-center">
					<div>
						<span style={{ transform: "translateY(-.2rem)", display: "inline-block" }}>{items.icon}</span>
						<span className="ms-4" style={{ fontWeight: text_bold }}>
							{items.name}
						</span>
					</div>
					<span style={{ fontSize: "1.2rem" }}>{items.count}</span>
				</Link>
			</li>
		</>
	);
};

export default List;
