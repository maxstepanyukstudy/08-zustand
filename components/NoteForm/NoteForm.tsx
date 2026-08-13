"use client";

import css from "./NoteForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createNote } from "@/lib/api";
import { CreateNote, NoteTag } from "@/types/note";
import Link from "next/link";

export default function NoteForm() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
    onError: (e) => {
      const msg = "Error creating note";
      console.log(msg, e);
      toast.error(msg);
    },
  });

  function handleSubmit(formData: FormData) {
    const note: CreateNote = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      tag: formData.get("tag") as NoteTag,
    };

    mutate(note, {
      onSuccess: () => toast("Note created"),
    });
  }

  return (
    <form action={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" className={css.input} />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
        ></textarea>
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select id="tag" name="tag" className={css.select}>
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className={css.actions}>
        <Link className={css.cancelButton} href="/notes/filter/all">
          Cancel
        </Link>
        <button type="submit" className={css.submitButton} disabled={isPending}>
          {isPending ? "Creating..." : "Create note"}
        </button>
      </div>
    </form>
  );
}
