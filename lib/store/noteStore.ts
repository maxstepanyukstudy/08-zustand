import { CreateNote } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NoteStore {
  draft: CreateNote;
  setDraft: (noteDraft: CreateNote) => void;
  clearDraft: () => void;
}

const initialDraft: CreateNote = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => {
      return {
        draft: initialDraft,
        setDraft: (value) =>
          set({
            draft: value,
          }),
        clearDraft: () =>
          set({
            draft: initialDraft,
          }),
      };
    },
    {
      name: "noteDraft",
      partialize: (store) => {
        return { draft: store.draft };
      },
    },
  ),
);
