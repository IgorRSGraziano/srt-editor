import React from "react";
import { Srt } from "../../types/srt";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Grip, Timer } from "lucide-react";

type Props = {
	srt: Srt;
};

function SrtBlock({ srt }: Props) {
	return (
		<Card className="p-4 flex flex-col gap-2">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<Grip size={20} className="text-muted-foreground cursor-move" />
					<Badge>{srt.id}</Badge>
				</div>
				<div className="flex items-center gap-2">
					<Timer size={35} />
					<Input className="w-full text-xs h-[30px]" value={srt.start} /> : <Input className="w-full text-xs h-[30px]" value={srt.end} />
				</div>
			</div>
			<div>
				<Input className="w-full" value={srt.text} />
			</div>
		</Card>
	);
}

export default SrtBlock;
