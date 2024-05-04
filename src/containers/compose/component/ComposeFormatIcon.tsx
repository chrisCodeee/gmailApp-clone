import { LiaPencilAltSolid } from "react-icons/lia";
import { MdFormatColorText, MdAttachFile, MdOutlineInsertLink, MdOutlineInsertEmoticon, MdAddToDrive, MdOutlineInsertPhoto, MdOutlineLockClock, MdMoreVert } from "react-icons/md";
import { FormatIcon } from ".";
import { CgTrash } from "react-icons/cg";
import { FormatIconWrapper } from "../ComposeStyles";
import { useComposeMessageState } from "../../../state-management";

export const formatIconSize = 18;
const ComposeFormatIcon = () => {
	const { setFormattingOptioneStateOn } = useComposeMessageState();
	return (
		<div className="d-flex justify-content-between flex-grow-1">
			<FormatIconWrapper>
				<div onClick={setFormattingOptioneStateOn}>
					<FormatIcon title="Formatting options">
						<MdFormatColorText size={formatIconSize} />
					</FormatIcon>
				</div>

				<FormatIcon title="Attach files">
					<MdAttachFile size={formatIconSize} />
				</FormatIcon>

				<FormatIcon title="Insert link (Ctrl-K)">
					<MdOutlineInsertLink size={formatIconSize} />
				</FormatIcon>

				<FormatIcon title="Insert emoji (Ctrl-Shift-2)">
					<MdOutlineInsertEmoticon size={formatIconSize} />
				</FormatIcon>

				<FormatIcon title="Insert files using Drive">
					<MdAddToDrive size={formatIconSize} />
				</FormatIcon>

				<FormatIcon title="Insert photo">
					<MdOutlineInsertPhoto size={formatIconSize} />
				</FormatIcon>

				<FormatIcon title="Toggle conidential mode">
					<MdOutlineLockClock size={formatIconSize} />
				</FormatIcon>

				<FormatIcon title="Insert signature">
					<LiaPencilAltSolid size={formatIconSize} />
				</FormatIcon>
				<FormatIcon title="More options">
					<MdMoreVert size={formatIconSize} />
				</FormatIcon>
			</FormatIconWrapper>

			<FormatIcon title="Discard draft (Ctrl-Shift-D)" margin="0 0 0 auto">
				<CgTrash size={formatIconSize} />
			</FormatIcon>
		</div>
	);
};

export default ComposeFormatIcon;
