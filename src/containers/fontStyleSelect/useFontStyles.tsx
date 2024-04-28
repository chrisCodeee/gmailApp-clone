import { useComposeMessageState } from "../../state-management";

const useFontStyles = () => {
	const { setFontStyle, setFontFamilyStyle } = useComposeMessageState();

	const fontStyles = [
		{
			name: "Sans Serif",
			fontFamily: "arial, sans-serif",
			onClick: () => {
				setFontStyle("Sans Serif");
				setFontFamilyStyle("arial, sans-serif");
			},
		},
		{
			name: "Serif",
			fontFamily: "times new roman, serif",
			onClick: () => {
				setFontStyle("Serif");
				setFontFamilyStyle("times new roman, serif");
			},
		},
		{
			name: "Fixed Width",
			fontFamily: "monospace",
			onClick: () => {
				setFontStyle("Fixed Wid...");
				setFontFamilyStyle("monospace");
			},
		},
		{
			name: "Wide",
			fontFamily: "arial black, sans-serif",
			onClick: () => {
				setFontStyle("Wide");
				setFontFamilyStyle("arial black, sans-serif");
			},
		},
		{
			name: "Narrow",
			fontFamily: "arial narrow, sans-serif",
			onClick: () => {
				setFontStyle("Narrow");
				setFontFamilyStyle("arial narrow, sans-serif");
			},
		},
		{
			name: "Comic Sans MS",
			fontFamily: "comic sans ms, sans-serif",
			onClick: () => {
				setFontStyle("Comic Sa...");
				setFontFamilyStyle("comic sans ms, sans-serif");
			},
		},
		{
			name: "Garamond",
			fontFamily: "garamond, times new roman, serif",
			onClick: () => {
				setFontStyle("Garamond");
				setFontFamilyStyle("garamond, times new roman, serif");
			},
		},
		{
			name: "Georgia",
			fontFamily: "georgia",
			onClick: () => {
				setFontStyle("Georgia");
				setFontFamilyStyle("georgia");
			},
		},
		{
			name: "Tahoma",
			fontFamily: "tahoma",
			onClick: () => {
				setFontStyle("Tahoma");
				setFontFamilyStyle("tahoma");
			},
		},
		{
			name: "Trebuchet MS",
			fontFamily: "trebuchet ms",
			onClick: () => {
				setFontStyle("Trebuche...");
				setFontFamilyStyle("trebuchet ms");
			},
		},
		{
			name: "Verdana",
			fontFamily: "verdana",
			onClick: () => {
				setFontStyle("Verdana");
				setFontFamilyStyle("verdana");
			},
		},
	];

	return { fontStyles };
};

export default useFontStyles;
