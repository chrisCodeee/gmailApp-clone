import { FormatIcon } from "../../compose/component";
import { ReactNode } from "react";
interface Props {
	icon: ReactNode;
	title: string;
}

const Formatting = (item: Props) => {
	return (
		<>
			<FormatIcon title={item.title}>{item.icon}</FormatIcon>
		</>
	);
};

export default Formatting;
