import { IoClose, IoSearch } from "react-icons/io5";
import { ContactIcon } from "../../assets";
import * as SelectContactStyle from "./SelectContactStyle";
import { Icon } from "../../components";

const SelectContact = () => {
	return (
		<>
			<SelectContactStyle.SelectContactWrapper>
				<SelectContactStyle.SelectContactContainer>
					<SelectContactStyle.SelectContactHeader>
						<SelectContactStyle.ContactIconContainer>
							<SelectContactStyle.IconContainer>
								<img src={ContactIcon} alt="Google Contact Icon" />
							</SelectContactStyle.IconContainer>

							<SelectContactStyle.IconText>Select contacts</SelectContactStyle.IconText>
						</SelectContactStyle.ContactIconContainer>

						<SelectContactStyle.SearchButton>
							<SelectContactStyle.SearchIcon>
								<IoSearch size={20} color="rgba(0,0,0,0.6)" />
							</SelectContactStyle.SearchIcon>

							<input type="text" placeholder="Search for contacts" />
						</SelectContactStyle.SearchButton>

						<div className="">
							<Icon>
								<IoClose size={25} />
							</Icon>
						</div>
					</SelectContactStyle.SelectContactHeader>
				</SelectContactStyle.SelectContactContainer>
			</SelectContactStyle.SelectContactWrapper>
		</>
	);
};

export default SelectContact;
