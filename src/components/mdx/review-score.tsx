import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReviewScoreProps {
  title: string
  score: number
  pros?: string[]
  cons?: string[]
}

export function ReviewScore({ title, score, pros = [], cons = [] }: ReviewScoreProps) {
  return (
    <div className="my-8 rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="bg-muted/50 p-6 flex items-center justify-between border-b">
        <div>
          <h3 className="text-xl font-bold m-0 border-none">{title}</h3>
          <p className="text-sm text-muted-foreground m-0">Veredito Final</p>
        </div>
        <div className={cn(
          "flex items-center justify-center w-16 h-16 rounded-full text-2xl font-black border-4",
          score >= 8 ? "border-green-500 text-green-500 bg-green-500/10" :
          score >= 5 ? "border-yellow-500 text-yellow-500 bg-yellow-500/10" :
          "border-red-500 text-red-500 bg-red-500/10"
        )}>
          {score}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {pros.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-green-600 font-bold mb-3 mt-0">
              <Check className="w-5 h-5" /> Pontos Positivos
            </h4>
            <ul className="m-0 p-0 list-none space-y-2">
              {pros.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-green-500 font-bold">+</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {cons.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-red-600 font-bold mb-3 mt-0">
              <X className="w-5 h-5" /> Pontos Negativos
            </h4>
            <ul className="m-0 p-0 list-none space-y-2">
              {cons.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-red-500 font-bold">-</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}