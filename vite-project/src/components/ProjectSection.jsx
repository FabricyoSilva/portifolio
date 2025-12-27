import { ArrowRight, ExternalLink, Github } from "lucide-react"

const project = [
    {
        id:1,
        titulo:"em breve",
        descricao:"em breve",
        imagem:"/projects/em_breve.png",
        tages:["Linguagem e ferramentas ultilizadas para a construção do projeto"],
        demoURL: "#",
        githubUrl: "#",
    },
    {
        id:2,
        titulo:"em breve",
        descricao:"em breve",
        imagem:"/projects/em_breve.png",
        tages:["Linguagem e ferramentas ultilizadas para a construção do projeto"],
        demoURL: "#",
        githubUrl: "#",
    },
    {
        id:3,
        titulo:"em breve",
        descricao:"em breve",
        imagem:"/projects/em_breve.png",
        tages:["Linguagem e ferramentas ultilizadas para a construção do projeto"],
        demoURL: "#",
        githubUrl: "#",
    },
]

export const ProjectSection = () => {
    return (
        <section id="projetos" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Meus <span className="text-primary"> Projetos</span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((project , key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.imagem} alt={project.titulo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>


                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tages.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foregorund">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.titulo}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.descricao}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/FabricyoSilva"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    >
                        Meu GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}