import { StartBackground } from '@/components/StartBackground';
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Efeito do Background*/}
        <StartBackground/>
        {/* Navbar*/}
        <Navbar/>
        {/* Conteudo da Main*/}

        {/* Footer*/}
    </div>
    );
};