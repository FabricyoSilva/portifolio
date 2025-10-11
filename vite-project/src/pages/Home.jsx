import { ThemeToggle } from "../components/ThemeToggle";
import { StartBackground } from '@/components/StartBackground';




export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Tema*/}
        <ThemeToggle/>
        {/*Efeito do Background*/}
        <StartBackground/>
        {/* Navbar*/}

        {/* Conteudo da Main*/}

        {/* Footer*/}
    </div>
    );
};