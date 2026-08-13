import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create note - NoteHub",
  description:
    "Create note at NoteHub (a simple and efficient personal notes manager)",
  openGraph: {
    title: "Create note - NoteHub",
    description:
      "Create note at NoteHub (a simple and efficient personal notes manager)",
    url: "https://08-zustand-seven-pink.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1471,
        height: 980,
        alt: "NoteHub Logo",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
