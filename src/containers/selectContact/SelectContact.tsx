import { IoClose, IoSearch } from "react-icons/io5";
import { ContactIcon } from "../../assets";
import * as SelectContactStyle from "./SelectContactStyle";
import { Icon } from "../../components";

const SelectContact = () => {
	return (
		<>
			<SelectContactStyle.SelectContactWrapper>
				<SelectContactStyle.SelectContactContainer>
					<div className="d-flex align-items-center justify-content-between" style={{ padding: "1.2rem 2rem" }}>
						<div className="d-flex align-items-center">
							<div style={{ width: "20px", height: "20px" }}>
								<img src={ContactIcon} alt="Google Contact Icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
							</div>
							<div style={{ margin: "0 0 0 .9rem", fontWeight: "500", fontSize: "1.7rem" }}>Select contacts</div>
						</div>

						<button className="d-flex align-items-center flex-grow-1" style={{ borderRadius: "3px", padding: "1.2rem 1.5rem", position: "relative", margin: "0 .2rem 0 2rem", backgroundColor: "rgba(0,0,0,0.04)" }}>
							<div className="d-flex align-items-center" style={{ position: "absolute", left: "10px" }}>
								<IoSearch size={20} color="rgba(0,0,0,0.6)" />
							</div>
							<input type="text" style={{ margin: "0 0 0 3rem", width: "100%", fontSize: "1.7rem" }} placeholder="Search for contacts" />
						</button>

						<div className="">
							<Icon>
								<IoClose size={25} />
							</Icon>
						</div>
					</div>
				</SelectContactStyle.SelectContactContainer>
			</SelectContactStyle.SelectContactWrapper>
		</>
	);
};

export default SelectContact;
