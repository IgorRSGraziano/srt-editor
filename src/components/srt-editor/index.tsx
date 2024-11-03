import { Plus } from "lucide-react";
import { useSrtStore } from "../../contexts/srt-context";
import { Button } from "../ui/button";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import SrtBlock from "./block";

type Props = {};

function SrtEditor({}: Props) {
	const { srt, addSrt } = useSrtStore();
	return (
		<div className="w-full">
			<CardHeader>
				<CardTitle>SRT Blocks</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{!srt.length && <div className="text-center text-gray-500">No SRT blocks</div>}
				{srt.map((s) => (
					<SrtBlock srt={s} key={s.id} />
				))}
				<Button
					variant={"ghost"}
					className="w-fit m-auto"
					onClick={() => {
						const lastSrt = srt.at(-1);
						addSrt({
							id: +(lastSrt?.id ?? 0) + 1 + "",
							endSeconds: 0,
							endTime: "00:00:00,000",
							startSeconds: 0,
							startTime: "00:00:00,000",
							text: "",
						});
					}}
				>
					<Plus className="w-4 h-4" />
				</Button>
			</CardContent>
		</div>
	);
}

export default SrtEditor;
