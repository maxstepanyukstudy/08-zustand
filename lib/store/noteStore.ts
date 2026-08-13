import { CreateNote } from "@/types/note";
import { create } from "zustand";

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

export const useNoteStore = create<NoteStore>()((set) => {
  return {
    draft: initialDraft,

    setDraft: (value) => {
      console.log("🚀 ~ value:", value)
      set({
        draft: value,
      });
    },
    clearDraft: () =>
      set({
        draft: initialDraft,
      }),
  };
});
