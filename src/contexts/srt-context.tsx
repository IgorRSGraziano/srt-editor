import { create } from "zustand";
import { SrtLine } from "../types/srt";
import { persist, createJSONStorage } from "zustand/middleware";

type SrtState = {
	srt: SrtLine[];
	setSrt: (srt: SrtLine[]) => void;
	addSrt: (srt: SrtLine) => void;
	updateSrt: (id: string, srt: SrtLine) => void;
};

export const useSrtStore = create<SrtState>()(
	persist(
		(set) => ({
			srt: [],
			setSrt: (srt: SrtLine[]) => set({ srt }),
			addSrt: (srt: SrtLine) => set((state) => ({ srt: [...state.srt, srt] })),
			updateSrt: (id: string, srt: SrtLine) =>
				set((state) => ({
					srt: state.srt.map((s) => (s.id === id ? srt : s)),
				})),
		}),
		{
			name: "srt-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
