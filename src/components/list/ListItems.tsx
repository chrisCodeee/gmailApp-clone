import List from "./List";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import useListParams from "./useListParams";
import { useAsideState } from "../../state-management";
import { HiPlus } from "react-icons/hi";

const ListItems = () => {
	const { moreState, categoryState, setCategoryStateOn, setMoreStateOn } = useAsideState();
	const { list_1, list_2, list_3, list_4, more, category, iconSize } = useListParams();
	return (
		<>
			<ul>
				{list_1.map((items) => (
					<List items={items} key={items.name} />
				))}

				<div onClick={setMoreStateOn}>
					<List items={more} />
				</div>

				{moreState && (
					<>
						{list_2.map((items) => (
							<List items={items} key={items.name} />
						))}

						<div style={{ position: "relative" }} onClick={setCategoryStateOn}>
							{categoryState ? <IoMdArrowDropdown size={15} style={{ position: "absolute", left: "15px", top: "7px" }} /> : <IoMdArrowDropright size={15} style={{ position: "absolute", left: "15px", top: "7px" }} />}
							<List items={category} />
						</div>

						{categoryState && (
							<div style={{ paddingLeft: "15px" }}>
								{list_4.map((items) => (
									<List items={items} key={items.name} text_bold="500" />
								))}
							</div>
						)}

						{list_3.map((items) => (
							<List items={items} key={items.name} />
						))}
					</>
				)}
			</ul>

			<div className="d-flex justify-content-between ps-5 mt-5">
				<h3>Labels</h3>
				<HiPlus size={iconSize} />
			</div>
		</>
	);
};

export default ListItems;
