import os
from pathlib import Path

# Configurações
BASE_DIR = Path.cwd()

# Conteúdo CORRIGIDO de src/components/providers.tsx
# Mudança: Removemos a importação quebrada e usamos "React.ComponentProps"
PROVIDERS_FIXED = """
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
"""

def main():
    print("🚑 Corrigindo erro de Tipagem no ThemeProvider...")
    
    if not (BASE_DIR / "package.json").exists():
        print("❌ ERRO: Rode na pasta do projeto!")
        return

    # Reescrever o arquivo problemático
    file_path = BASE_DIR / "src/components/providers.tsx"
    
    print(f"🛠️ Atualizando {file_path}...")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(PROVIDERS_FIXED.strip())

    print("\n" + "="*50)
    print("✅ ARQUIVO CORRIGIDO!")
    print("="*50)
    print("Agora envie a correção para o GitHub para destravar o deploy:")
    print("1. git add .")
    print("2. git commit -m 'Fix: ThemeProvider type definition'")
    print("3. git push")
    print("="*50)

if __name__ == "__main__":
    main()