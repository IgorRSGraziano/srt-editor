import React from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { useSrtStore } from "../../contexts/srt-context";
import { SrtParser } from "../../utils/srt";
import { AutosizeTextarea } from "../ui/autosize-textarea";

type Props = {};

function SrtText({}: Props) {
	const [value, setValue] = React.useState("");
	const { setSrt, srt } = useSrtStore();
	React.useEffect(() => {
		try {
			setSrt(SrtParser.parse(value));
		} catch (error) {
			console.error(error);
			setSrt([]);
		}
	}, [value]);

	React.useEffect(() => {
		setValue(SrtParser.stringify(srt));
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
