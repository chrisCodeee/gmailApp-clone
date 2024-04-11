interface BtnTertiaryProps {
	name: string;
	padding?: string;
}
const BtnTertiary = ({ name, padding = ".7rem 3rem" }: BtnTertiaryProps) => {
	return (
		<>
			<button className="w-100" style={{ color: "rgb(26, 115, 232)", fontWeight: "500", border: "1px solid rgba(128, 128, 128, 0.2)", padding: padding, borderRadius: "100px" }}>
				{name}
			</button>
		</>
	);
};

export default BtnTertiary;
