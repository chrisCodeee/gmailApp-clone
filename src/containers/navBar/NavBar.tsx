import { Form, Icon, Logo, User } from "../../components";
import { ContainerLeft, ContainerRight, FormContainer, IconWrapper, Nav, Search } from "./NavBarStyles";
import { IoMdMenu, IoMdHelpCircleOutline } from "react-icons/io";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { useAsideState, useFormState, useNavBarState } from "../../state-management";
import { AccountPhoto } from "../../assets";

const NavBar = () => {
	const { setShowMenuOn } = useAsideState();
	const { showMoreState, setShowMoreStateOn, setGoogleAppStateOff, setGoogleAppStateOn, setSupportStateOff, setSupportStateOn, setShowMoreStateOff, setSettingStateOn } = useNavBarState();

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
					<button onClick={setShowMenuOn}>
						<Icon>
							<IoMdMenu size={iconStyle.iconSize} color={iconStyle.iconColor} />
						</Icon>
					</button>

					<Logo />
				</IconWrapper>

				<Search className="col-9" style={formStyle}>
					<Icon>
						<IoSearchSharp size={iconStyle.iconSize} color={iconStyle.iconColor} title="Search" />
					</Icon>

					<FormContainer onClick={setFormStateOn}>
						<Form />
					</FormContainer>
					{!showMoreState && (
						<div
							title="Show search options"
							onClick={() => {
								setShowMoreStateOn();
								setSupportStateOff();
								setGoogleAppStateOff();
							}}>
							<Icon>
								<LuSlidersHorizontal size={iconStyle.iconSize} color={iconStyle.iconColor} />
							</Icon>
						</div>
					)}
				</Search>
			</ContainerLeft>

			<ContainerRight>
				<Icon>
					<IoMdHelpCircleOutline
						size={iconStyle.iconSize}
						color={iconStyle.iconColor}
						title="Support"
						onClick={() => {
							setSupportStateOn();
							setShowMoreStateOff();
							setGoogleAppStateOff();
						}}
					/>
				</Icon>

				<div
					title="Settings"
					onClick={() => {
						setSettingStateOn();
						setShowMoreStateOff();
						setSupportStateOff();
						setGoogleAppStateOff();
					}}>
					<Icon>
						<IoSettingsOutline size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
				</div>

				<div
					title="Google apps"
					onClick={() => {
						setGoogleAppStateOn();
						setShowMoreStateOff();
						setSupportStateOff();
					}}>
					<Icon>
						<CgMenuGridO size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
				</div>

				<Icon>
					<User img={AccountPhoto} />
				</Icon>
			</ContainerRight>
		</Nav>
	);
};

export default NavBar;
