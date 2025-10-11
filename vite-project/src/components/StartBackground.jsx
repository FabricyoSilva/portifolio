import { useEffect, useState } from "react";
// id, size , x, y, opacity,animationDuration
export const StartBackground = () => {
    const [stars, setStars] = useState([])

    useEffect(()=>{
        try {
            generateStars();
        } catch (error) {
            console.error('Erro ao gerar estrelas:', error);
        }
    },[])
    const generateStars = () => {
        const numberStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for(let i=0;i<numberStars;i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration:Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Estrela de teste fixa */}
            <div 
                className="absolute w-4 h-4 bg-white rounded-full animate-pulse"
                style={{
                    left: "50%",
                    top: "50%",
                    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)"
                }}
            />
            
            {/* Estrelas geradas */}
            {stars.map((star)=>(
                <div 
                    key={star.id} 
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)"
                    }}
                />
            ))}
        </div>
    );
};