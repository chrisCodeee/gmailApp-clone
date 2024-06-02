import { IoPersonCircleSharp } from "react-icons/io5";
import { AllContactListWrapper } from "../SelectContactStyle";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useCompose } from "../../../hooks";

export const contactListItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

const AllContactList = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<AllContactListWrapper>
				{contactListItems.map((item) => (
					<div className="container" key={item} onMouseEnter={() => useComposeMessage.setContactHoverOn(item)}>
						<div className="user col-7">
							{useComposeMessage.contactHoverState !== item && (
								<div className="iconUser">
									<IoPersonCircleSharp size={50} color="rgba(0,0,0,0.1)" />
								</div>
							)}

							{/* <input type="checkbox" style={{ height: "19px", width: "19px" }} /> */}
							{useComposeMessage.contactHoverState === item && (
								<div>
									<MdCheckBoxOutlineBlank size={25} />
									{/* <MdCheckBox size={25} /> */}
								</div>
							)}

							<div className="emailFirst">example{item}@gmail.com</div>
						</div>

						<div className="emailSecond col">example{item}@gmail.com</div>
					</div>
				))}
			</AllContactListWrapper>
		</>
	);
};

export default AllContactList;
