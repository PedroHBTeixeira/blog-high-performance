import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Monitor } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function Home() {
  const posts = getAllPosts()
  // Pega os 3 posts mais recentes para destaque
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-muted/30 border-b">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            Focado em Alta Performance
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Aumente sua produtividade <br className="hidden sm:inline" />
            com o setup certo.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Reviews técnicos diretos ao ponto sobre monitores, periféricos e ferramentas 
            para desenvolvedores e profissionais de alta performance.
          </p>
          <div className="space-x-4">
            <Link href="/blog">
              <Button size="lg" className="gap-2">
                Explorar Artigos <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Sobre o Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="container py-12 md:py-24 lg:py-32 max-w-5xl">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-10">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
            Últimas Análises
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Confira nossos guias de compra e comparativos mais recentes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="flex flex-col space-y-2 p-6 rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50 h-full">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <TrendingUp className="h-3 w-3" />
                    {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <div className="pt-4 flex items-center text-sm font-medium text-primary">
                    Ler review completo <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <p className="col-span-3 text-center text-muted-foreground">
              Nenhum post encontrado. Rode os scripts de criação de conteúdo!
            </p>
          )}
        </div>
        
        <div className="mt-10 flex justify-center">
            <Link href="/blog">
                <Button variant="ghost" className="gap-2">Ver todos os posts <ArrowRight className="h-4 w-4"/></Button>
            </Link>
        </div>
      </section>
    </div>
  )
}