import os
import subprocess
import sys
from pathlib import Path

# Configurações
BASE_DIR = Path.cwd()

# Conteúdo do .gitignore (O que NÃO deve subir para a nuvem)
GITIGNORE_CONTENT = """
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
ts-debug.log*

# local env files
.env*.local

# vercel
.vercel
"""

def main():
    print("📦 Preparando Repositório para Deploy...")
    
    if not (BASE_DIR / "package.json").exists():
        print("❌ ERRO: Rode na pasta do projeto!")
        return

    # 1. Criar .gitignore
    print("📝 Criando arquivo .gitignore...")
    with open(BASE_DIR / ".gitignore", "w", encoding="utf-8") as f:
        f.write(GITIGNORE_CONTENT.strip())

    # 2. Iniciar Git
    print("init Git...")
    try:
        # Tenta iniciar o git
        if not (BASE_DIR / ".git").exists():
            subprocess.run(["git", "init"], cwd=BASE_DIR, shell=True, check=True)
            print("✅ Git iniciado!")
        else:
            print("ℹ️ Git já estava iniciado.")
            
        # Adicionar arquivos
        print("staging arquivos...")
        subprocess.run(["git", "add", "."], cwd=BASE_DIR, shell=True, check=True)
        
        # Commit inicial
        print("committing...")
        subprocess.run(["git", "commit", "-m", "Deploy Inicial: Blog High Performance"], cwd=BASE_DIR, shell=True)
        
    except Exception as e:
        print(f"⚠️ Aviso: {e}")
        print("Se deu erro no commit, talvez você precise configurar seu email no git ainda.")
        print('Rode no terminal: git config --global user.email "seu@email.com"')

    print("\n" + "="*50)
    print("✅ PARTE LOCAL PRONTA!")
    print("="*50)
    print("Agora siga as instruções da Fase 2 na nossa conversa.")
    print("="*50)

if __name__ == "__main__":
    main()