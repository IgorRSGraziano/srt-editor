import { Srt } from "../types/srt";
// SAMPLE SRT
// 1
// 00:00:06,930 --> 00:00:09,940
// Na maioria das vezes, eu coloco uma máscara

// 2
// 00:00:09,940 --> 00:00:13,100
// E atuo, mas estou bem deprimido na maior parte do tempo

// 3
// 00:00:13,100 --> 00:00:15,480
// Arma na cabeça como se fosse melhor eu morrer

export class SrtParser {
	private static timeToMs(time: string): number {
		const [hours, minutes, seconds] = time.split(":");
		const [secs, ms] = seconds.split(",");
		return parseInt(hours) * 3600000 + parseInt(minutes) * 60000 + parseInt(secs) * 1000 + parseInt(ms);
	}

	private static msToTime(duration: number): string {
        const milliseconds = duration % 1000;
        const seconds = Math.floor((duration / 1000) % 60);
        const minutes = Math.floor((duration / (1000 * 60)) % 60);
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        const hoursStr = hours.toString().padStart(2, '0');
        const minutesStr = minutes.toString().padStart(2, '0');
        const secondsStr = seconds.toString().padStart(2, '0');
        const millisecondsStr = milliseconds.toString().padStart(3, '0');

        return `${hoursStr}:${minutesStr}:${secondsStr},${millisecondsStr}`;
    }

	public static parse(srt: string): Srt[] {
		const srtBlocks = srt.trim().split("\n\n");
		const srtList: Srt[] = srtBlocks.map((block) => {
			const [id, timeRange, ...textLines] = block.split("\n");
			const [startTime, endTime] = timeRange.split(" --> ");
			return {
				id: id.trim(),
				start: this.timeToMs(startTime.trim()),
				end: this.timeToMs(endTime.trim()),
				text: textLines.join(" ").trim(),
			};
		});
		return srtList;
	}

	
    public static stringify(srtList: Srt[]): string {
        return srtList.map(srt => {
            const startTime = this.msToTime(srt.start);
            const endTime = this.msToTime(srt.end);
            return `${srt.id}\n${startTime} --> ${endTime}\n${srt.text}\n`;
        }).join('\n');
    }
}
