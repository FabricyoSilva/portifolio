import { cn } from "@/lib/utils"
import { Wind } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Sobre mim", href: "#Sobre mim" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Fabricyo </span>{" "} Portifolio
                    </span>
                </a>

                {/*desktop nav*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/*mobile nav*/}

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};