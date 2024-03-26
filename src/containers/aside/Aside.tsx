import { BtnCompose, ListItems } from "../../components";
import { BtnComposeWrapper, ListWrapper } from "./AsideStyles";

const Aside = () => {
	return (
		<>
			<BtnComposeWrapper>
				<BtnCompose />
			</BtnComposeWrapper>

			<ListWrapper>
				<ListItems />
			</ListWrapper>
		</>
	);
};

export default Aside;
