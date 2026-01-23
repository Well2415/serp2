import React from 'react';
import { Play, Check, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="relative pt-20 pb-20 lg:pt-20 lg:pb-48 bg-primary overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
                            <span className="bg-gradient-to-r from-white via-secondary to-white bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,146,209,0.5)]">Soluções Digitais</span>
                            <br />
                            para sua Empresa decolar
                        </h1>
                        <p className="text-base lg:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                            Tecnologia completa para o seu negócio. De sistemas de gestão a sites modernos,
                            entregamos as soluções digitais que você precisa para crescer.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link to="/contato" className="relative overflow-hidden px-8 py-4 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-blue-500/40 group">
                                <span className="relative z-10">Começar Agora</span>
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/75 to-transparent skew-x-12 animate-shine" />
                            </Link>
                            <Link to="/funcionalidades" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                                <Play size={20} fill="currentColor" /> Ver Demo
                            </Link>
                        </div>

                        <div className="flex gap-6 text-sm text-slate-300 font-medium">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                <Check size={16} className="text-emerald-400" /> Sem cartão de crédito
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                <CalendarCheck size={16} className="text-emerald-400" /> 30 dias grátis
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Abstract Background Blob */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-emerald-500/30 blur-3xl rounded-full opacity-40 animate-pulse"></div>

                        <img
                            src="/img/fundo.png"
                            alt="Dashboard Serp Soluções"
                            className="relative z-10 w-[110%] max-w-none transform -translate-x-12 mask-image-gradient"
                        />
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
