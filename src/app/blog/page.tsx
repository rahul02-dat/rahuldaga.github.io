import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Rahul Daga",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-[5%] min-h-screen">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center gap-3.5">
              <span className="inline-block w-7 h-px bg-[var(--accent)]" />
              Writing
            </p>
          </Reveal>
          <Reveal>
            <h1 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14">
              Blog
            </h1>
          </Reveal>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Reveal key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block border border-[var(--border)] rounded-md p-8 bg-[var(--s2)] hover:border-[var(--border-hi)] hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[var(--dim)] mb-3">
                    {isNaN(Date.parse(post.date))
                      ? post.date
                      : new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                  </p>
                  <h2 className="font-display text-[1.6rem] font-extrabold text-[var(--text)] mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[0.9rem] leading-[1.8] text-[var(--dim)] mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
