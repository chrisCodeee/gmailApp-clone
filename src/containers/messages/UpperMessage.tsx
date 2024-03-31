import { IoMdMore } from "react-icons/io";
import { MdArrowDropDown, MdOutlineRefresh, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BiSolidKeyboard } from "react-icons/bi";
import { Icon } from "../../components";
import { FlexWrapper, FlexWrapperArrow, FlexWrapperCheckbox, MessageCount, UpperMessageWrapper } from "./MessageStyles";
import { inboxMessageDetails } from "../../pages/inbox/useInboxParams";

export const upperIconSize = 19;

const UpperMessage = () => {
	return (
		<>
			<UpperMessageWrapper>
				<FlexWrapper>
					<FlexWrapper>
						<FlexWrapperCheckbox>
							<input type="checkbox" />
						</FlexWrapperCheckbox>
						<FlexWrapperArrow>
							<span className="d-flex">
								<MdArrowDropDown size={upperIconSize} />
							</span>
						</FlexWrapperArrow>
					</FlexWrapper>

					<Icon>
						<MdOutlineRefresh size={upperIconSize} />
					</Icon>

					<Icon>
						<IoMdMore size={upperIconSize} />
					</Icon>
				</FlexWrapper>

				<FlexWrapper>
					<MessageCount>1-50 of {inboxMessageDetails.length}</MessageCount>
					<Icon>
						{/* <button> */}
						<MdKeyboardArrowLeft size={upperIconSize} />
						{/* </button> */}
					</Icon>
					<Icon>
						<MdKeyboardArrowRight size={upperIconSize} />
					</Icon>
					<FlexWrapper>
						<FlexWrapperCheckbox>
							<BiSolidKeyboard size={upperIconSize} />
						</FlexWrapperCheckbox>
						<FlexWrapperArrow>
							<span className="d-flex">
								<MdArrowDropDown size={upperIconSize} />
							</span>
						</FlexWrapperArrow>
					</FlexWrapper>
				</FlexWrapper>
			</UpperMessageWrapper>
		</>
	);
};

export default UpperMessage;
