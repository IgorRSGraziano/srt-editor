import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { useSrtStore } from "../../contexts/srt-context";
import { SrtParser } from "../../utils/srt";

type Props = {};

function SrtText({}: Props) {
	const [value, setValue] = React.useState("");
	const { setSrt } = useSrtStore();
	React.useEffect(() => {
		try {
			setSrt(SrtParser.parse(value));
		} catch (error) {
			setSrt([]);
		}
	}, [value]);
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>SRT Text</CardTitle>
			</CardHeader>
			<CardContent>
				<Textarea className="w-full" placeholder="Enter your text here" onChange={(e) => setValue(e.target.value)} value={value} />
			</CardContent>
		</Card>
	);
}

export default SrtText;
