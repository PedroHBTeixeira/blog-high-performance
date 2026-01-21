import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Cpu, Rocket, Zap, Code2, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container max-w-5xl py-12 lg:py-24">
      {/* Header */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold">
            Sobre o Projeto
          </h1>
          <p className="text-xl text-muted-foreground">
            A busca incansável pelo setup perfeito e pelo código mais limpo.
          </p>
        </div>
      </div>

      <hr className="my-8 border-border" />

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text Column (A História) */}
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Bem-vindo ao <strong>Blog High Performance</strong>.
          </p>
          <p>
            Nossa missão é simples: <strong>filtrar o ruído</strong> do mercado de tecnologia.
            Não fazemos reviews superficiais baseados apenas em especificações de caixa. 
            Testamos monitores, teclados e ferramentas com a mentalidade de um engenheiro: 
            focando em métricas, durabilidade e, principalmente, no <strong>retorno sobre o investimento (ROI)</strong>.
          </p>
          <p>
            Se você quer saber se aquele monitor ultrawide vai realmente aumentar sua
            produtividade no VS Code ou se é apenas marketing, você está no lugar certo.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
            <Zap className="text-yellow-500 fill-yellow-500" /> Nossa Filosofia
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 items-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Menos Alt-Tab, mais foco.</span>
            </li>
            <li className="flex gap-3 items-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Performance acima de estética (mas amamos um bom design).</span>
            </li>
            <li className="flex gap-3 items-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Dados reais superam opiniões vazias.</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack / Visual Column (A Autoridade Técnica) */}
        <div className="space-y-8">
          <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Code2 className="text-blue-500" />
              Built with Modern Stack
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Este blog pratica o que prega. Ele foi construído do zero para ser 
              instantâneo, acessível e escalável.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50 text-sm font-medium">
                <Rocket className="w-4 h-4 text-foreground" /> Next.js 14
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50 text-sm font-medium">
                <Cpu className="w-4 h-4 text-foreground" /> Tailwind CSS
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50 text-sm font-medium">
                <Zap className="w-4 h-4 text-foreground" /> Turbopack
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50 text-sm font-medium">
                <Code2 className="w-4 h-4 text-foreground" /> MDX Engine
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-muted/30 p-6">
            <h3 className="font-bold mb-2">Contato & Parcerias</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tem uma sugestão de produto para review ou encontrou um bug no código?
            </p>
            <Button asChild className="w-full">
              <Link href="mailto:contato@seublog.com">
                Fale Conosco <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}