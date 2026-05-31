import { create } from 'zustand';
import type { Character } from '@/types';

interface TeamState {
  team: (Character | null)[];
  search: string;
  pickerOpen: boolean;
  setSearch: (search: string) => void;
  setPickerOpen: (open: boolean) => void;
  setMember: (index: number, character: Character | null) => void;
  clearTeam: () => void;
  loadPreset: (characters: Character[]) => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  team: [null, null, null, null],
  search: '',
  pickerOpen: false,
  setSearch: (search) => set({ search }),
  setPickerOpen: (pickerOpen) => set({ pickerOpen }),
  setMember: (index, character) =>
    set((state) => {
      const newTeam = [...state.team];
      newTeam[index] = character;
      return { team: newTeam };
    }),
  clearTeam: () => set({ team: [null, null, null, null] }),
  loadPreset: (characters) =>
    set({ team: [...characters, ...Array(Math.max(0, 4 - characters.length)).fill(null)] }),
}));
