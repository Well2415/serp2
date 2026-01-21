import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DeviceFrame from './DeviceFrame';

const WhyChoose = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Parallax/Fade effects
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const benefits = [
        {
            id: "01",
            title: "Gestão Integrada (ERP)",
            desc: "Centralize financeiro, estoque e vendas. Tenha o controle total da sua operação em um único painel inteligente."
        },
        {
            id: "02",
            title: "Presença Digital Forte",
            desc: "Sites e lojas virtuais de alta performance. Posicione sua marca no Google e venda para o mundo todo 24h por dia."
        },
        {
            id: "03",
            title: "Gestão de Pessoas",
            desc: "Controle de ponto digital com reconhecimento facial. Modernize seu RH e garanta segurança jurídica para sua equipe."
        }
    ];

    return (
        <section ref={targetRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-secondary font-semibold text-sm mb-4">Diferenciais</span>
                    <h2 className="text-4xl font-bold text-primary mb-4">Por que o Serp Soluções?</h2>
                    <p className="text-light-text text-lg">Muito mais que um sistema, somos parceiros do seu crescimento.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 lg:p-8 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-12 items-start">
                    {/* Sticky Image */}
                    <div className="lg:sticky lg:top-64 h-fit flex justify-center">
                        <motion.div
                            style={{ opacity, scale }}
                            className="relative w-full scale-105"
                        >
                            {/* Removed max-w-lg to keep it full size like the card style */}
                            <DeviceFrame
                                src="/img/features/sistema/sistema1.png"
                                alt="Dashboard do Sistema"
                                type="browser"
                                className="w-full shadow-2xl"
                            />
                            {/* Floating badge over device frame */}
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block">
                                <h3 className="text-lg font-bold text-primary mb-1">Dashboard</h3>
                                <p className="text-xs text-light-text">Visão completa em tempo real</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="flex flex-col gap-16 py-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ margin: "-100px" }}
                                className="group"
                            >
                                <span className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300 -mb-6 block relative z-0">
                                    {benefit.id}
                                </span>
                                <div className="relative z-10 pl-6 border-l-4 border-slate-200 group-hover:border-secondary transition-colors duration-300">
                                    <h3 className="text-2xl font-bold text-primary mb-3">{benefit.title}</h3>
                                    <p className="text-light-text text-lg leading-relaxed">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
