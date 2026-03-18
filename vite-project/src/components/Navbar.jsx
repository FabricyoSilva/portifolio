import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Sobre mim", href: "#sobre" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
                <div className="container flex items-center justify-between">
                    <a href="#hero" className="text-xl font-bold flex items-center">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground"> Fabricyo</span>{" "}
                            <span className="text-primary">Portifolio</span>
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

                    {/*mobile toggle*/}
                    <button onClick={() => setIsMenuOpen(prev => !prev)} aria-label={isMenuOpen ? "Close menu" : "Open Menu"} className="md:hidden p-2 text-foreground z-50">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/*mobile nav overlay — fora do nav para evitar o bug de backdrop-filter*/}
            <div className={cn("fixed inset-0 bg-background z-40 flex flex-col items-center justify-center",
                "transition-opacity duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-4 right-4 p-2 text-foreground">
                    <X size={24} />
                </button>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};