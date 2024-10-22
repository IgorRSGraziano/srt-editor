import { useSrtStore } from "../../contexts/srt-context";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import SrtBlock from "./block";

type Props = {};

function SrtEditor({}: Props) {
	const { srt } = useSrtStore();
	return (
		<div className="w-full">
			<CardHeader>
				<CardTitle>SRT Blocks</CardTitle>
			</CardHeader>
			<CardContent>
				{!srt.length && <div className="text-center text-gray-500">No SRT blocks</div>}
				{srt.map((s) => (
					<SrtBlock srt={s} key={s.id} />
				))}
			</CardContent>
		</div>
	);
}

export default SrtEditor;
