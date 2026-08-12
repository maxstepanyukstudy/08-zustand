import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesPageClient from "./Notes.client";
// import { Metadata } from "next";

// todo? move to util
export const PARAMS_INDEX = {
  TAG_NAME: 0,
};

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

// // todo?
// // Next does not allow `export async function generateMetadata()` or `export const metadata`
// // is this a bug?
// // but `app/notes/[id]/page.tsx` works OK

// export async function generateMetadata({
//   params,
// }: NotesPageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const tagName = slug[0] ?? "";

//   const metadata: Metadata = {
//     title: `${tagName} notes -  NoteHub`,
//     description: `${tagName} notes at NoteHub (a simple and efficient personal notes manager)`,
//     openGraph: {
//       title: `${tagName} notes -  NoteHub`,
//       description: `${tagName} notes at NoteHub (a simple and efficient personal notes manager)`,
//       url: "", // todo: after deploy
//       images: [
//         {
//           url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
//           width: "1471",
//           height: "980",
//           alt: "NoteHub Logo",
//         },
//       ],
//     },
//   };
//   return metadata;
// }

export default async function NotesPage({ params }: NotesPageProps) {
  const queryClient = new QueryClient();

  const { slug } = await params;

  const tagName = slug[PARAMS_INDEX.TAG_NAME];

  // note: use the same values as in default states values in AppClient
  // todo? get from a config file for the page
  const currentPageInit = 1;
  const searchQueryInit = "";

  await queryClient.prefetchQuery({
    queryKey: ["notes", tagName, searchQueryInit, currentPageInit],
    queryFn: () => {
      return fetchNotes(currentPageInit, searchQueryInit, tagName);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesPageClient />
    </HydrationBoundary>
  );
}
