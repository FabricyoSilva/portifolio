import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <>
            <footer className="py-12 px-4 bg-card border-t border-border mt-12 relative">
                <div className="mt-8 border-t border-border pt-6">
                    <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} FabricyoSilva. Todos os direitos reservados.</p>
                </div>
                <a href="#hero" className="absolute bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50 hover:scale-105 transition-transform">
                    <ArrowUp size={20}/>
                </a>
            </footer>
        </>
    )
}