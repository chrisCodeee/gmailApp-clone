import { BtnPrimary } from "../../components";
import { useCompose } from "../../hooks";

const Alert = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<div className="" style={{ position: "absolute", top: "0", left: "0", right: "0", width: "100%", height: "100%", zIndex: "100000000", cursor: "pointer" }}>
				<div style={{ position: "absolute", top: "15%", left: "50%", right: "50%", transform: "translate(-50%, -50%)", boxShadow: "0 0 2px rgba(0,0,0,.5)", borderRadius: "5px", padding: "2rem", width: "400px", height: "150px", backgroundColor: "#fff", cursor: "default" }}>
					<div className="d-flex flex-column justify-content-between h-100">
						<div>The URL is not valid and cannot be loaded.</div>
						<div className="d-flex justify-content-end mt-3">
							<div onClick={useComposeMessage.setAlertOff}>
								<BtnPrimary name="Cancel" borderRadius="30px" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Alert;
