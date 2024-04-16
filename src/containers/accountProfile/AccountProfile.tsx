import { IoClose } from "react-icons/io5";
import { BtnTertiary, Icon, User } from "../../components";
import { AccountPhoto } from "../../assets";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

const AccountProfile = () => {
	return (
		<>
			<div className="py-2 px-4" style={{ backgroundColor: "rgb(233, 238, 246)", position: "absolute", right: "1%", width: "396px", borderRadius: "30px" }}>
				<div className="">
					<div className="d-flex justify-content-between align-items-center" style={{ fontWeight: "500" }}>
						<div className="me-5">&nbsp;</div>
						<div>nzeanoruec@gmail.com</div>
						<Icon>
							<IoClose size={24} />
						</Icon>
					</div>

					<div className="mt-3 d-flex flex-column align-items-center">
						<button style={{ position: "relative" }}>
							<User img={AccountPhoto} height="8rem" />
							<div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#fff", borderRadius: "100%", height: "23px", width: "23px", position: "absolute", right: "8%", bottom: "0" }}>
								<BiPencil size={17} color="rgb(0, 29, 53)" />
							</div>
						</button>

						<div className="mt-1" style={{ fontSize: "2.2rem" }}>
							Hi, Christian!
						</div>
					</div>

					<div className="text-center mt-2">
						<Link to="https://myaccount.google.com/" target="_blank">
							<BtnTertiary name="Manage your Google Account" borderColor="grey" padding=".8rem 2.5rem" />
						</Link>
					</div>

					<div className="mt-4 d-flex align-items-center">
						<button className="col d-flex" style={{ backgroundColor: "#fff", padding: "1.5rem 5rem 1.5rem 1.5rem", borderTopLeftRadius: "100px", borderBottomLeftRadius: "100px", borderTopRightRadius: "6px", borderBottomRightRadius: "6px" }}>
							<div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(26, 115, 232,.1)", borderRadius: "100%", padding: ".3rem" }}>
								<BsPlusLg size={20} color="rgb(26, 115, 232)" />
							</div>
							<span className="align-self-stretch d-flex align-items-center ms-3">Add account</span>
						</button>

						<button className="ms-1 col d-flex align-items-center align-self-stretch" style={{ backgroundColor: "#fff", padding: "1.5rem 5rem 1.5rem 1.5rem", borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px", borderTopRightRadius: "100px", borderBottomRightRadius: "100px" }}>
							<PiSignOutBold size={23} />
							<span className="align-self-stretch d-flex align-items-center ms-2">Sign out</span>
						</button>
					</div>

					<div className="text-center my-3" style={{ fontSize: "1.3rem" }}>
						<Link to="">Privacy Policy</Link>
						<span className="d-inline-block px-3" style={{ transform: "translateY(-.2rem)", fontWeight: "500", fontSize: "2rem" }}>
							.
						</span>
						<Link to="">Terms of Service</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountProfile;
