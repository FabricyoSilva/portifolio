import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
    <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                   <span> Olá, eu sou </span> 
                   <span className="text-primary"> Fabricyo </span> 
                   <span className="text-gradient"> Silva </span> 
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">Gosto de resolver problemas com código e criar soluções simples, eficientes e funcionais. Estou sempre aprendendo e pronto para encarar novos desafios.</p>

                <div className="pt-4">
                    <a href="#projetos" className="cosmic-button">
                        Veja meu trabalho
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
            <span className="text-sm text-muted-foreground mb-2">Explorar</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
    );
};
