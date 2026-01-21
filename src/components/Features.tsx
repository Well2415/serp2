import React from 'react';
import { Rocket, BarChart2, ShieldCheck, Headset, Globe, Clock, Smartphone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <BarChart2 size={32} />,
        title: "Sistema ERP Completo",
        description: "Gestão financeira, estoque e vendas integrados. Tudo o que sua empresa precisa em um só lugar.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: <FileText size={32} />,
        title: "Emissão de Notas",
        description: "NFe, NFCe, NFSe e MDFe. Emissão ilimitada, rápida e descomplicada para todo o Brasil.",
        color: "text-teal-500",
        bg: "bg-teal-500/10"
    },
    {
        icon: <Clock size={32} />,
        title: "Ponto Digital",
        description: "Controle de jornada moderno com geolocalização e reconhecimento facial. Adeus ao ponto físico.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        icon: <Globe size={32} />,
        title: "Sites Personalizados",
        description: "Desenvolvimento web de alta performance. Destaque sua marca e converta visitantes em clientes.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Segurança de Dados",
        description: "Seus dados blindados na nuvem com backups automáticos. Tranquilidade total para você.",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        icon: <Headset size={32} />,
        title: "Suporte Especializado",
        description: "Time de experts pronto para te atender. Suporte humanizado e ágil de verdade.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: <Smartphone size={32} />,
        title: "Aplicativo Mobile",
        description: "Acompanhe seus resultados de onde estiver. Seu negócio na palma da sua mão.",
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white rounded-[3rem] mx-4 lg:mx-8 relative z-20 shadow-xl -mt-32 lg:-mt-56">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Resultados que impulsionam</h2>
                    <p className="text-light-text text-lg">Muito mais que ferramentas, entregamos performance para o seu negócio.</p>
                </div>

                <div className="relative overflow-hidden mask-linear-fade py-4 group">
                    <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] will-change-transform">
                        {[...features, ...features].map((feature, index) => (
                            <div
                                key={index}
                                className="w-[300px] md:w-[350px] bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all flex-shrink-0 mr-8 cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} transition-transform hover:scale-110`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-light-text leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
