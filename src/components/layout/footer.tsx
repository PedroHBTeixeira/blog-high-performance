import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/20 mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Blog High Performance</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Análises técnicas e diretas para quem busca o setup perfeito e produtividade máxima.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              Sobre Nós
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Blog High Performance. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}