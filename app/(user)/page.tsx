import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense"
import BlogList from "components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 30;


export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview data
            </p>
          </div>
        }
      >

      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  
  return (
    <BlogList posts={posts} />
    )
}
