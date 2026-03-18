import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <>
            <footer className="py-12 px-4 bg-card border-t border-border mt-12 relative">
             
                <div>
                    <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} FabricyoSilva. Todos os direitos reservados.</p>
                </div>

                <a href="#hero" className="absolute flex items-center bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50 hover:scale-105 transition-transform gap-1 px-4 py-2">
                    <span className="text-sm font-medium">Voltar para o topo</span>
                    <ArrowUp size={20} />
                </a>
            </footer>
        </>
    )
}