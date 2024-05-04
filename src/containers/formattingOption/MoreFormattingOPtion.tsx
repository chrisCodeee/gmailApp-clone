import { useComposeMessageState } from "../../state-management";
import { MoreFormattingOptionWrapper } from "./FormattingOptionStyle";
import { IndexDecrease, IndexIncrease, QuoteFormat, RemoveFormat, StrikeThrough } from "./subFormattingOption";

const MoreFormattingOPtion = () => {
	const { setMoreFormattingOptioneStateOff } = useComposeMessageState();
	return (
		<MoreFormattingOptionWrapper onClick={setMoreFormattingOptioneStateOff}>
			<RemoveFormat />
			<StrikeThrough />
			<QuoteFormat />
			<IndexIncrease />
			<IndexDecrease />
		</MoreFormattingOptionWrapper>
	);
};

export default MoreFormattingOPtion;
