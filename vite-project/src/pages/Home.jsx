import { StartBackground } from '@/components/StartBackground';
import { Navbar } from "../components/Navbar";
import { HeroSection } from '../components/HeroSection';
import { SobreMim } from '../components/SobreMim';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectSection } from '../components/ProjectSection';
import {Footer} from '../components/Footer';
export const Home = () => {
    return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
        {/*Efeito do Background*/}
        <StartBackground/>
        {/* Navbar*/}
        <Navbar/>
        {/* Conteudo da Main*/}
        <main>
            <HeroSection/>
            <SobreMim/>
            <SkillsSection/>
            <ProjectSection/>
        </main>
        {/* Footer*/}
        <Footer />
    </div>
    );
};