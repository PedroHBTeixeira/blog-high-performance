import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Button } from "@/components/ui/button"
import { ReviewScore } from "@/components/mdx/review-score"
import { AffiliateButton } from "@/components/mdx/affiliate-button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        Voltar para o blog
      </Link>
      
      <div className="space-y-4">
        <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl mb-2">
          {post.title}
        </h1>
        {post.date && (
          <div className="text-muted-foreground">
            Publicado em {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
          </div>
        )}
      </div>
      
      <hr className="my-8 border-border" />
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote 
            source={post.content} 
            components={{
                // Componentes Customizados
                Button: (props) => <div className="my-4"><Button {...props} /></div>,
                ReviewScore: (props) => <ReviewScore {...props} />,
                AffiliateButton: (props) => <AffiliateButton {...props} />,
                
                // AQUI ESTÁ A MÁGICA: Estilizando todas as imagens automaticamente
                img: (props) => (
                  <span className="block my-8 overflow-hidden rounded-xl border bg-white p-4 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      {...props} 
                      className="mx-auto max-h-[500px] w-auto object-contain m-0" 
                      style={{ margin: 0 }} // Força margem zero dentro do container
                    />
                  </span>
                )
            }}
        />
      </div>
    </article>
  )
}