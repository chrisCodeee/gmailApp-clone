import { HiOutlineTrash } from "react-icons/hi2";
import { MdInbox, MdSend, MdLabelImportantOutline, MdOutlineChat, MdOutlineScheduleSend, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlinePeopleOutline, MdOutlineForum } from "react-icons/md";
import { AiOutlineFile, AiOutlineSetting } from "react-icons/ai";
import { BiInfoCircle, BiPurchaseTag } from "react-icons/bi";
import { PiTagSimple } from "react-icons/pi";
import { RiStarSLine, RiSpam2Line } from "react-icons/ri";
import { TbClockHour5, TbMail } from "react-icons/tb";
import { HiPlus } from "react-icons/hi";
import useAsideState from "../../state-management/useAsideState";

const useListParams = () => {
	const iconSize = 18;

	const list_1 = [
		{ icon: <MdInbox size={iconSize} />, name: "Inbox", count: "7,177", link: "/inbox", bg: "blue" },
		{ icon: <RiStarSLine size={iconSize} />, name: "Starred", count: "", link: "/starred" },
		{ icon: <TbClockHour5 size={iconSize} />, name: "Snoozed", count: "", link: "/snoozed" },
		{ icon: <MdSend size={iconSize} />, name: "Sent", count: "", link: "/sent" },
		{ icon: <AiOutlineFile size={iconSize} />, name: "Drafts", count: "", link: "/drafts" },
	];

	const list_2 = [
		{ icon: <MdLabelImportantOutline size={iconSize} />, name: "Important", count: "", link: "/important" },
		{ icon: <MdOutlineChat size={iconSize} />, name: "Chats", count: "", link: "/chats" },
		{ icon: <MdOutlineScheduleSend size={iconSize} />, name: "Scheduled", count: "", link: "/scheduled" },
		{ icon: <TbMail size={iconSize} />, name: "All mail", count: "", link: "/inbox" },
		{ icon: <RiSpam2Line size={iconSize} />, name: "Spam", count: "2", link: "/spam" },
		{ icon: <HiOutlineTrash size={iconSize} />, name: "Trash", count: "", link: "/trash" },
	];

	const list_3 = [
		{ icon: <AiOutlineSetting size={iconSize} />, name: "Manage labels", link: "/settings" },
		{ icon: <HiPlus size={iconSize} />, name: "Create new labels", link: "" },
	];

	const list_4 = [
		{ icon: <MdOutlinePeopleOutline size={iconSize} />, name: "Social", count: "3,463", link: "/social" },
		{ icon: <BiInfoCircle size={iconSize} />, name: "Updates", count: "6,987", link: "/updates" },
		{ icon: <MdOutlineForum size={iconSize} />, name: "Forums", count: "114", link: "/forums" },
		{ icon: <BiPurchaseTag size={iconSize} />, name: "Promotions", count: "3,435", link: "/promotion" },
	];

	const { moreState } = useAsideState();
	const moreIconState = moreState ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />;
	const more = { icon: moreIconState, name: `${moreState ? "Less" : "More"}`, link: "" };

	const category = { icon: <PiTagSimple size={20} />, name: "Categories" };

	return { list_1, list_2, list_3, list_4, more, category, iconSize };
};

export default useListParams;
