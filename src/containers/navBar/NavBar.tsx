import { Form, Icon, Logo } from "../../components";
import { ContainerLeft, ContainerRight, FormContainer, IconWrapper, Nav, Search } from "./NavBarStyles";
import { IoMdMenu, IoMdHelpCircleOutline } from "react-icons/io";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { RiListCheck3 } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { AccountPhoto } from "../../assets";
import { useFormState } from "../../state-management";

const NavBar = () => {
	const iconStyle = {
		iconSize: 23,
		iconColor: "rgb(95, 99, 104)",
	};

	const { formState, setFormStateOn } = useFormState();

	const formStyle = {
		backgroundColor: `${formState ? "#fff" : "rgba(229, 236, 247, 0.6)"}`,
		boxShadow: `${formState ? "0px 1px 2px rgba(0, 0, 0, 0.4)" : "none"}`,
	};

	return (
		<Nav>
			<ContainerLeft>
				<IconWrapper>
					<Icon>
						<IoMdMenu size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
					<Logo />
				</IconWrapper>
				<Search className="col-9" style={formStyle}>
					<Icon>
						<IoSearchSharp size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
					<FormContainer onClick={setFormStateOn}>
						<Form />
					</FormContainer>
					<Icon>
						<RiListCheck3 size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
				</Search>
			</ContainerLeft>

			<ContainerRight>
				<Icon>
					<IoMdHelpCircleOutline size={iconStyle.iconSize} color={iconStyle.iconColor} />
				</Icon>
				<Icon>
					<IoSettingsOutline size={iconStyle.iconSize} color={iconStyle.iconColor} />
				</Icon>
				<Icon>
					<CgMenuGridO size={iconStyle.iconSize} color={iconStyle.iconColor} />
				</Icon>
				<Icon>
					<img src={AccountPhoto} alt="Profile picture" style={{ height: "3rem", borderRadius: "100%" }} />
				</Icon>
			</ContainerRight>
		</Nav>
	);
};

export default NavBar;
