import Link from "next/link"
import { ModeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Blog High Performance
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Artigos
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Sobre
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Espaço para barra de busca futura */}
          </div>
          <nav className="flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}