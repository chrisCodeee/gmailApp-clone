import { useCompose } from "../../hooks";
import * as ConfidentialModeExpireStyle from "./ConfidentialModeExpireStyle";
import { nextDay, nextFiveYears, nextOneMonth, nextThreeMonths, nextWeek } from "./confidentialModeParams";

const ConfidentialModeExpire = () => {
	const modeExpireList = [
		{ name: "1 day", time: nextDay },
		{ name: "1 week", time: nextWeek },
		{ name: "1 month", time: nextOneMonth },
		{ name: "3 months", time: nextThreeMonths },
		{ name: "5 years", time: nextFiveYears },
	];

	const { useComposeMessage } = useCompose();
	return (
		<>
			<ConfidentialModeExpireStyle.ConfidentialModeExpireWrapper onClick={useComposeMessage.setConfidentialModeExpireOff}>
				<ConfidentialModeExpireStyle.ConfidentialModeExpireList>
					{modeExpireList.map((item) => (
						<ConfidentialModeExpireStyle.ConfidentialModeExpireItems key={item.name} onClick={() => useComposeMessage.setConfidentialModeExpireTime(`Expires in ${item.name}`, item.time.toDateString())}>
							{`Expires in ${item.name}`}
						</ConfidentialModeExpireStyle.ConfidentialModeExpireItems>
					))}
				</ConfidentialModeExpireStyle.ConfidentialModeExpireList>
			</ConfidentialModeExpireStyle.ConfidentialModeExpireWrapper>
		</>
	);
};

export default ConfidentialModeExpire;
