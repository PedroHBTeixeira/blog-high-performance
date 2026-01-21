import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Artigos sobre desenvolvimento, performance e arquitetura.
          </p>
        </div>
      </div>
      <hr className="my-8 border-border" />
      
      {posts.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col space-y-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition-colors hover:bg-muted/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                   {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-3 mt-2">
                  {post.description}
                </p>
                <div className="pt-4">
                  <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                    <span className="sr-only">Ler artigo</span>
                  </Link>
                  <Button variant="ghost" className="px-0 underline">Ler mais</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  )
}