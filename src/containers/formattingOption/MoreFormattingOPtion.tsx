import { MoreFormattingOptionWrapper } from "./FormattingOptionStyle";
import { IndexDecrease, IndexIncrease, QuoteFormat, RemoveFormat, StrikeThrough } from "./subFormattingOption";

const MoreFormattingOPtion = () => {
	return (
		<MoreFormattingOptionWrapper>
			<RemoveFormat />
			<StrikeThrough />
			<QuoteFormat />
			<IndexIncrease />
			<IndexDecrease />
		</MoreFormattingOptionWrapper>
	);
};

export default MoreFormattingOPtion;
