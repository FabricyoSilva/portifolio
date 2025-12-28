import { ArrowUp, Github, Linkedin } from "lucide-react"

export const Footer = () => {
    return (
        <>
            <footer className="py-12 px-4 bg-card border-t border-border mt-12 relative">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              
                    <div className="w-full sm:w-1/2 flex items-start sm:items-center gap-6">
                        <div>
                            <h4 className="font-semibold mb-2">Conecte-se comigo</h4>
                            <div className="flex items-center space-x-4">
                                <a href="https://www.linkedin.com/in/fabricyo-silva/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/FabricyoSilva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                
                    <div className="w-full sm:w-1/2"></div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                    <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} FabricyoSilva. Todos os direitos reservados.</p>
                </div>

                <a href="#hero" className="absolute bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50 hover:scale-105 transition-transform">
                    <ArrowUp size={20} />
                </a>
            </footer>
        </>
    )
}