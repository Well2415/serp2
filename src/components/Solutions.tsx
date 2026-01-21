import React, { useState } from 'react';
import { LineChart, Clock, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DeviceFrame from './DeviceFrame';

const solutions = [
    {
        id: 'erp',
        label: 'Gestão Comercial',
        icon: <LineChart size={20} />,
        title: "Gestão Comercial Completa (ERP)",
        desc: "Controle financeiro, emissão de notas fiscais ilimitadas, gestão de estoque e frente de caixa (PDV). Tudo integrado em uma única plataforma.",
        features: ["Emissor de NFe, NFCe, NFSe", "Controle Financeiro e DRE", "Gestão de Estoque Multilocal"],
        img: "/img/features/sistema/sistema4.png",
        type: 'browser'
    },
    {
        id: 'ponto',
        label: 'Ponto Digital',
        icon: <Clock size={20} />,
        title: "Gestão de Ponto Digital",
        desc: "Adeus ao relógio de ponto físico. Controle a jornada dos seus colaboradores via aplicativo com geolocalização e reconhecimento facial.",
        features: ["Aplicativo Android/iOS", "Reconhecimento Facial", "Fechamento de Folha Automático"],
        img: "/img/features/ponto/ponto1_clean.png", // Switched to main Ponto screen
        type: 'browser' // Changed to browser to match others
    },
    {
        id: 'sites',
        label: 'Sites Personalizados',
        icon: <Globe size={20} />,
        title: "Sites de Alta Performance",
        desc: "Desenvolvemos sites institucionais, landing pages e e-commerces otimizados para converter visitantes em clientes.",
        features: ["Design Exclusivo e Responsivo", "Otimização SEO (Google)", "Integração com WhatsApp"],
        img: "/img/features/sites/site1_clean.png",
        type: 'browser'
    }
];

const Solutions = () => {
    const [activeTab, setActiveTab] = useState('erp');
    const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

    // Auto-rotate tabs
    React.useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = solutions.findIndex(s => s.id === activeTab);
            const nextIndex = (currentIndex + 1) % solutions.length;
            setActiveTab(solutions[nextIndex].id);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">Nossas Soluções</span>
                    <h2 className="text-4xl font-bold text-primary mb-4">O que sua empresa precisa hoje?</h2>
                    <p className="text-light-text text-lg">Navegue pelas nossas áreas de atuação e descubra a ferramenta ideal.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {solutions.map((sol) => (
                        <button
                            key={sol.id}
                            onClick={() => setActiveTab(sol.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-sm ${activeTab === sol.id
                                ? 'bg-secondary text-white shadow-lg shadow-blue-500/25 scale-105'
                                : 'bg-white text-text hover:bg-white/80'
                                }`}
                        >
                            {sol.icon}
                            {sol.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-primary">{activeSolution.title}</h3>
                                <p className="text-light-text text-lg leading-relaxed">{activeSolution.desc}</p>

                                <ul className="space-y-4">
                                    {activeSolution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text font-medium">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all pt-4">
                                    Ver Planos e Detalhes <ArrowRight size={20} />
                                </a>
                            </div>

                            <div className="relative flex items-center justify-center p-4">
                                {/* Using DeviceFrame for better aesthetics */}
                                <DeviceFrame
                                    src={activeSolution.img}
                                    alt={activeSolution.title}
                                    type={activeSolution.type as 'laptop' | 'browser'}
                                    className="w-full max-w-lg shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
