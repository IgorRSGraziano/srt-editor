import { create } from "zustand";
import { Srt } from "../types/srt";

type SrtState = {
	srt: Srt[];
	setSrt: (srt: Srt[]) => void;
	addSrt: (srt: Srt) => void;
	updateSrt: (id: string, srt: Srt) => void;
};

export const useSrtStore = create<SrtState>((set) => ({
	srt: [
		{
			id: "1",
			start: 0,
			end: 1,
			text: "Hello, World!",
		},
	],
	setSrt: (srt: Srt[]) => set({ srt }),
	addSrt: (srt: Srt) => set((state) => ({ srt: [...state.srt, srt] })),
	updateSrt: (id: string, srt: Srt) =>
		set((state) => ({
			srt: state.srt.map((s) => (s.id === id ? srt : s)),
		})),
}));
