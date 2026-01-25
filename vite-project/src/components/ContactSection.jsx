import { Mail, Phone, MapPin,Linkedin, Github, Send } from 'lucide-react';
import {cn} from '@/lib/utils'
import { useToast } from '../hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Mensagem enviada!",
                description: "Obrigado por sua mensagem, retornarei em breve"
            });
            
            setIsSubmitting(false);
            e.target.reset();
        }, 1500);
    };

    return <section id="contato" className="py-24 px-4 relative bg-secondary/30">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Entre em <span className="text-primary"> Contato</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou sempre em busca de novos desafios e projetos interessantes. Se você tem uma ideia incrível ou precisa de ajuda com uma solução técnica, envie uma mensagem abaixo e responderei o mais rápido possível!
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>

                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                            <Mail className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>Email</h4>
                            <a href="mailto:fabricyosilvaveras@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                fabricyosilvaveras@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                            <MapPin className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>Localização</h4>
                            <p className='text-muted-foreground'>
                                Parnaíba, PI
                            </p>
                        </div>
                    </div>
                </div>

                <div className='pt-8 border-t border-primary/20 mt-8'>
                    <h4 className='font-medium mb-4'>Conecte-se comigo</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href='https://www.linkedin.com/in/fabricyo-silva-566687327/' target='_blank' rel="noopener noreferrer" className='p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors'>
                            <Linkedin className='h-5 w-5 text-primary'/>
                        </a>
                        <a href='https://github.com/FabricyoSilva' target='_blank' rel="noopener noreferrer" className='p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors'>
                            <Github className='h-5 w-5 text-primary'/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'>Envie uma mensagem</h3>
                
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium mb-2'> Seu nome</label>
                        
                        <input type="text" id='name' required className='w-full py-3 px-4 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Seu nome...'/>
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium mb-2'> Seu email</label>

                        <input type="email" id='email' required className='w-full py-3 px-4 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='exemplo@gmail.com'/>
                    </div>
                    <div>
                        <label htmlFor='mensagem' className='block text-sm font-medium mb-2'> Sua mensagem</label>

                        <textarea id='mensagem' required className='w-full py-3 px-4 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Olá, gostaria de falar sobre...'/>
                    </div>

                    <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-50 cursor-not-allowed")}>
                        {isSubmitting ? "Enviando..." : "Envie a mensagem"}
                        <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
    </section>
}