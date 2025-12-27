import { Briefcase, Code, User } from "lucide-react";

export const SobreMim = () => {
    return (
        <section id="sobre" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Focado em Desenvolvimento Web</h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime exercitationem aliquid maiores voluptatem eos sequi! Sapiente harum quae enim et tempore minima, facilis id fuga nemo temporibus explicabo veniam.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime exercitationem aliquid maiores voluptatem eos sequi! Sapiente harum quae enim et tempore minima, facilis id fuga nemo temporibus explicabo veniam.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                                    <p className="text-muted-foregroud">Crio websites reponsivos e aplicações web com frameworks modernos</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foregroud">Crio websites reponsivos e aplicações web com frameworks modernos</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Planejamento de projeto</h4>
                                    <p className="text-muted-foregroud">Crio websites reponsivos e aplicações web com frameworks modernos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};