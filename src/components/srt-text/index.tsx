import React from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { useSrtStore } from "../../contexts/srt-context";
// import { SrtParser } from "../../utils/srt";
import { AutosizeTextarea } from "../ui/autosize-textarea";
import SrtParser from "srt-parser-2";
import { SrtLine } from "../../types/srt";

type Props = {};

function SrtText({}: Props) {
	const [value, setValue] = React.useState("");
	const { setSrt, srt } = useSrtStore();
	React.useEffect(() => {
		try {
			const parser = new SrtParser();
			const srt = parser.fromSrt(value);
			setSrt(srt);
		} catch (error) {
			console.error(error);
		}
	}, [value]);

	React.useEffect(() => {
		const parser = new SrtParser();
		setValue(parser.toSrt(srt));
	}, [srt]);

	return (
		<div className="w-full">
			<CardHeader>
				<CardTitle>SRT Text</CardTitle>
			</CardHeader>
			<CardContent>
				<AutosizeTextarea className="w-full h-full" placeholder="Enter your text here" onChange={(e) => setValue(e.target.value)} value={value} />
			</CardContent>
		</div>
	);
}

export default SrtText;
