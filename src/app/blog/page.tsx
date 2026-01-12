import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getAllPosts,
  formatDate,
  type BlogPostMetadata,
} from "@/lib/blog/utils";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and insights on web development and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <main className="container mx-auto max-w-7xl px-4 pt-24 pb-16">
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </section>

        <div className="text-muted-foreground py-12 text-center">
          <p className="text-lg">No blog posts yet. Stay tuned!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-7xl px-4 pt-24 pb-16">
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, tutorials, and insights on web development and technology.
        </p>
      </section>

      <section className="grid gap-6">
        {posts.map((post: BlogPostMetadata) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="border-border bg-card/50 hover:bg-card/80 gap-2 backdrop-blur-sm transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl hover:underline">
                    {post.title}
                  </CardTitle>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(post.date)}
                    </span>
                    {post.author && (
                      <span className="flex items-center gap-1">
                        By {post.author}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
