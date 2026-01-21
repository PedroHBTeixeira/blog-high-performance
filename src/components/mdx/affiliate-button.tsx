import { ShoppingCart } from "lucide-react"

interface AffiliateButtonProps {
  href: string
  children: React.ReactNode
}

export function AffiliateButton({ href, children }: AffiliateButtonProps) {
  return (
    <div className="my-6 flex flex-col items-center">
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer" 
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-8 py-3 font-bold text-white transition-transform active:scale-95 hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/25 no-underline w-full md:w-auto"
      >
        <ShoppingCart className="w-5 h-5" />
        {children}
      </a>
      <p className="mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
        Compra Segura via Mercado Livre
      </p>
    </div>
  )
}