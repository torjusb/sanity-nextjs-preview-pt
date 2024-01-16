// ./components/PostPreview.tsx

"use client";

import { POST_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";

import Post from "@/components/Post";

export default function PostPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
}) {
  const { data } = useQuery<SanityDocument | null>(POST_QUERY, params, {
    initial,
  });

  console.log("Data is", {
    // "initial.data.pt" will be a string
    initial,
    // "data.pt" will be a PortableText value
    real: data,
  });

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}
