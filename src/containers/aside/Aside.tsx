import { BiPencil } from "react-icons/bi";
import { BtnCompose, ListItems } from "../../components";
import MenuList from "../../components/list/MenuList";
import { BtnComposeWrapper, ListWrapper } from "./AsideStyles";
import { useAsideState } from "../../state-management";

const Aside = () => {
	const { showMenu } = useAsideState();
	return (
		<>
			{showMenu && (
				<>
					<BtnComposeWrapper>
						<BtnCompose />
					</BtnComposeWrapper>

					<ListWrapper>
						<ListItems />
					</ListWrapper>
				</>
			)}

			{/* Menu List */}
			{!showMenu && (
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<button style={{ backgroundColor: "rgb(194, 231, 255)", borderRadius: "10px", width: "55px", height: "55px" }}>
						<BiPencil size={24} color="rgb(0, 29, 53)" />
					</button>

					<ListWrapper className="p-0 mt-4">
						<MenuList />
					</ListWrapper>
				</div>
			)}
		</>
	);
};

export default Aside;
