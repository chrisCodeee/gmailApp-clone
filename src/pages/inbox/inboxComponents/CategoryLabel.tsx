import { Badge } from "../../../components";
import { ReactNode } from "react";

type CategoryItems = {
	icon: ReactNode;
	heading: string;
	count: string; //Change to number later
	bgColor: string;
	subHeading: string;
	padding: string;
};

interface CategoryProps {
	items: CategoryItems;
}

const CategoryLabel = ({ items }: CategoryProps) => {
	return (
		<>
			<div className={`d-flex align-self-stretch align-items-center col pt-3 ${items.padding} x`}>
				{items.icon}
				<div className="ms-4">
					<div className="primary_heading d-flex align-items-center">
						<h4 className="me-3 mb-0">{items.heading}</h4>
						<Badge count={items.count} bgColor={items.bgColor} />
					</div>
					<span style={{ fontSize: "1.2rem", color: "grey" }}>{items.subHeading}</span>
				</div>
			</div>
		</>
	);
};

export default CategoryLabel;
