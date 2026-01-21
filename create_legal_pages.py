import os
from pathlib import Path

# Configurações
BASE_DIR = Path.cwd()

# 1. Conteúdo: Política de Privacidade
PRIVACY_CONTENT = """
export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <div className="prose dark:prose-invert max-w-none text-muted-foreground">
        <p>Última atualização: 22 de Março de 2024</p>
        
        <h3>1. Introdução</h3>
        <p>
          A sua privacidade é importante para nós. É política do <strong>Blog High Performance</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
        </p>

        <h3>2. Links de Afiliados e Publicidade</h3>
        <p>
          Este site participa de programas de associados (como Amazon e Mercado Livre). Isso significa que, ao clicar em certos links e realizar uma compra, podemos receber uma pequena comissão, sem nenhum custo adicional para você.
        </p>
        <p>
          Isso não influencia nossas opiniões. Recomendamos apenas produtos que testamos ou analisamos tecnicamente.
        </p>

        <h3>3. Cookies</h3>
        <p>
          Usamos cookies para analisar o tráfego e melhorar sua experiência. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
        </p>
      </div>
    </div>
  )
}
"""

# 2. Conteúdo: Termos de Uso
TERMS_CONTENT = """
export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
      <div className="prose dark:prose-invert max-w-none text-muted-foreground">
        <h3>1. Aceitação</h3>
        <p>
          Ao acessar o <strong>Blog High Performance</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
        </p>

        <h3>2. Isenção de Responsabilidade</h3>
        <p>
          Os materiais no site são fornecidos "como estão". Não oferecemos garantias de que os produtos revisados funcionarão exatamente como esperado em todos os cenários, pois o hardware pode variar.
        </p>
        <p>
          <strong>Importante:</strong> Não vendemos produtos diretamente. Somos um portal de conteúdo e análise. Toda compra é realizada diretamente nas plataformas parceiras (Mercado Livre, Amazon, etc), sendo elas responsáveis pela entrega, garantia e suporte.
        </p>

        <h3>3. Propriedade Intelectual</h3>
        <p>
          O conteúdo (textos e análises) é propriedade exclusiva do Blog High Performance. É proibida a cópia integral sem autorização prévia.
        </p>
      </div>
    </div>
  )
}
"""

# 3. Componente: Footer (Rodapé)
FOOTER_COMPONENT = """
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
"""

# 4. Atualização do Layout (Incluindo o Footer)
LAYOUT_UPDATED = """
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog High Performance",
  description: "Reviews técnicos de monitores e periféricos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
"""

def main():
    print("⚖️ Criando Páginas Legais e Rodapé...")
    
    if not (BASE_DIR / "package.json").exists():
        print("❌ ERRO: Rode na pasta do projeto!")
        return

    # 1. Criar Página de Privacidade
    path_privacy = BASE_DIR / "src/app/(site)/privacy/page.tsx"
    path_privacy.parent.mkdir(parents=True, exist_ok=True)
    with open(path_privacy, "w", encoding="utf-8") as f:
        f.write(PRIVACY_CONTENT.strip())
    print("✅ Página de Privacidade criada.")

    # 2. Criar Página de Termos
    path_terms = BASE_DIR / "src/app/(site)/terms/page.tsx"
    path_terms.parent.mkdir(parents=True, exist_ok=True)
    with open(path_terms, "w", encoding="utf-8") as f:
        f.write(TERMS_CONTENT.strip())
    print("✅ Página de Termos criada.")

    # 3. Criar Componente Footer
    path_footer = BASE_DIR / "src/components/layout/footer.tsx"
    path_footer.parent.mkdir(parents=True, exist_ok=True)
    with open(path_footer, "w", encoding="utf-8") as f:
        f.write(FOOTER_COMPONENT.strip())
    print("✅ Componente Footer criado.")

    # 4. Atualizar Layout Global
    path_layout = BASE_DIR / "src/app/layout.tsx"
    with open(path_layout, "w", encoding="utf-8") as f:
        f.write(LAYOUT_UPDATED.strip())
    print("✅ Layout atualizado (Footer inserido).")

    print("\n" + "="*50)
    print("🛡️ BLINDAGEM JURÍDICA CONCLUÍDA!")
    print("="*50)
    print("1. git add .")
    print("2. git commit -m 'Feat: Add Legal Pages and Footer'")
    print("3. git push")
    print("="*50)

if __name__ == "__main__":
    main()