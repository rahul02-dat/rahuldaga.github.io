import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllPostSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = await getPostBySlug(slug);

  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-[5%] min-h-screen">
        <article className="max-w-[720px] mx-auto">
          <Link
            href="/blog"
            className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors"
          >
            ← Back to blog
          </Link>
          <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[var(--dim)] mt-8 mb-3">
            {isNaN(Date.parse(post.date))
              ? post.date
              : new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="chip chip-accent">
                {tag}
              </span>
            ))}
          </div>
          <div
            className="prose-content text-[0.98rem] leading-[1.9] text-[var(--dim)] [&_h1]:font-display [&_h1]:text-[var(--text)] [&_h2]:font-display [&_h2]:text-[var(--text)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2 [&_strong]:text-[var(--text)] [&_a]:text-[var(--accent)]"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
