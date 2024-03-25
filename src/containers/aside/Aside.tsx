import { BtnCompose, ListItems } from "../../components";
import { BtnComposeWrapper } from "./AsideStyles";

const Aside = () => {
	return (
		<>
			<BtnComposeWrapper>
				<BtnCompose />
			</BtnComposeWrapper>

			<div className="pe-4 asideWrapper" style={{ overflowY: "auto", height: "76vh" }}>
				<ListItems />
			</div>
		</>
	);
};

export default Aside;
