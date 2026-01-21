import React from 'react';
import { UserPlus, Sliders, Rocket } from 'lucide-react';

const Steps = () => {
    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: "Solicite um Representante",
            desc: "Entre em contato para ativar seu cadastro com apoio especializado."
        },
        {
            icon: <Sliders size={32} />,
            title: "Personalize",
            desc: "Configure o sistema com a cara da sua empresa. É tudo visual."
        },
        {
            icon: <Rocket size={32} />,
            title: "Decole 🚀",
            desc: "Pronto! Seja com site novo ou gestão otimizada, seus resultados começam agora."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-secondary font-semibold text-sm mb-4">Simples Assim</span>
                    <h2 className="text-4xl font-bold text-primary mb-4">Comece em 3 Passos</h2>
                    <p className="text-light-text text-lg">Sem complicação. Você foca no negócio, nós cuidamos do sistema.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) - Removed per user request */}
                    {/* <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-slate-200 -z-10"></div> */}

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 relative z-10 transition-transform group-hover:scale-110">
                                <div className="text-secondary">{step.icon}</div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                            <p className="text-light-text max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
