import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, ShoppingCart, Users, Server,
    BarChart3, FileText, Smartphone, Shield,
    Globe, MousePointer2, Search, Zap,
    Clock, MapPin, Smile, Headphones
} from 'lucide-react';
import Footer from '../components/Footer';
import DeviceFrame from '../components/DeviceFrame';

const featuresData = [
    // ERP / Sistema
    { id: 1, category: 'erp', title: "Dashboard Inicial", desc: "Visão geral e atalhos rápidos.", image: "/img/features/sistema/sistema1.png", size: "large", type: 'browser' },
    { id: 2, category: 'erp', title: "Frente de Caixa (PDV)", desc: "Vendas ágeis e emissão de cupom.", image: "/img/features/sistema/sistema2.png", size: "small", type: 'browser' },
    { id: 3, category: 'erp', title: "Gestão de Vendas", desc: "Histórico e emissão de notas.", image: "/img/features/sistema/sistema3.png", size: "small", type: 'browser' },
    { id: 4, category: 'erp', title: "Gestão Financeira", desc: "Controle de contas a pagar/receber.", image: "/img/features/sistema/sistema4.png", size: "large", type: 'browser' },
    { id: 5, category: 'erp', title: "Consulta de Estoque", desc: "Visualização rápida de produtos.", image: "/img/features/sistema/sistema5.png", size: "small", type: 'browser' },
    { id: 6, category: 'erp', title: "Relatório de Vendas", desc: "Análise de produtos vendidos.", image: "/img/features/sistema/sistema6.png", size: "small", type: 'browser' },


    // Sites (New Professional Images)
    { id: 101, category: 'sites', title: "E-commerce Premium", desc: "Design focado em conversão.", image: "/img/features/sites/site1_clean.png", size: "large", type: 'browser' },
    { id: 102, category: 'sites', title: "Landing Page Moderna", desc: "Estética minimalista.", image: "/img/features/sites/site2_clean.png", size: "small", type: 'browser' },
    { id: 103, category: 'sites', title: "Portfólio Criativo", desc: "Apresentação de alto impacto.", image: "/img/features/sites/site3_clean.png", size: "small", type: 'browser' },
    { id: 104, category: 'sites', title: "Blog Corporativo", desc: "Conteúdo com elegância.", image: "/img/features/sites/site4_clean.png", size: "large", type: 'browser' },
    { id: 105, category: 'sites', title: "Site Institucional", desc: "Credibilidade online.", image: "/img/features/sites/site5_clean.png", size: "small", type: 'browser' },
    { id: 106, category: 'sites', title: "Catálogo Digital", desc: "Exibição de produtos.", image: "/img/features/sites/site6_clean.png", size: "small", type: 'browser' },
    { id: 107, category: 'sites', title: "Portal de Notícias", desc: "Layout dinâmico.", image: "/img/features/sites/site7_clean.png", size: "large", type: 'browser' },
    { id: 108, category: 'sites', title: "Loja Virtual", desc: "Experiência de compra fluida.", image: "/img/features/sites/site8_clean.png", size: "small", type: 'browser' },
    { id: 109, category: 'sites', title: "Landing Page", desc: "Alta performance.", image: "/img/features/sites/site9_clean.png", size: "small", type: 'browser' },


    // RH (Ponto)
    { id: 201, category: 'rh', title: "Controle de Ponto", desc: "Gestão precisa de jornada.", image: "/img/features/ponto/ponto1_clean.png", size: "large", type: 'browser' },
    { id: 202, category: 'rh', title: "Login Seguro", desc: "Acesso simplificado.", image: "/img/features/ponto/ponto2_clean.png", size: "small", type: 'browser' },
    { id: 203, category: 'rh', title: "Dashboard RH", desc: "Métricas em tempo real.", image: "/img/features/ponto/ponto3_clean.png", size: "small", type: 'browser' },
    { id: 204, category: 'rh', title: "Gestão de Equipe", desc: "Visão geral dos colaboradores.", image: "/img/features/ponto/ponto4_clean.png", size: "large", type: 'browser' },
    { id: 205, category: 'rh', title: "Lista de Usuários", desc: "Administração fácil.", image: "/img/features/ponto/ponto5_clean.png", size: "small", type: 'browser' },
    { id: 206, category: 'rh', title: "Relatórios Detalhados", desc: "Exportação de dados.", image: "/img/features/ponto/ponto6_clean.png", size: "small", type: 'browser' },
    { id: 207, category: 'rh', title: "Visualização de PDF", desc: "Espelho de ponto.", image: "/img/features/ponto/ponto7_clean.png", size: "large", type: 'browser' },
    { id: 208, category: 'rh', title: "Ranking de Produtividade", desc: "Gamificação corporativa.", image: "/img/features/ponto/ponto8_clean.png", size: "small", type: 'browser' },

    // Infra
    { id: 8, category: 'infra', title: "Cloud Backup", desc: "Segurança AWS.", image: "/img/fundo.png", size: "small", type: 'laptop' },
];

const Funcionalidades = () => {
    const [filter, setFilter] = useState('todos');
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);

    const filteredFeatures = filter === 'todos'
        ? featuresData
        : featuresData.filter(f => f.category === filter);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedFeatureIndex !== null) {
            setSelectedFeatureIndex((prev) => (prev !== null && prev < filteredFeatures.length - 1 ? prev + 1 : 0));
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedFeatureIndex !== null) {
            setSelectedFeatureIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredFeatures.length - 1));
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <header className="pt-32 pb-20 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-white/10 text-emerald-300 font-semibold text-sm mb-6 border border-white/10"
                    >
                        Galeria de Soluções
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                    >
                        Explore nosso<br />
                        <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Universo Visual</span>
                    </motion.h1>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        { id: 'todos', label: 'Ver Tudo', icon: <LayoutDashboard size={18} /> },
                        { id: 'erp', label: 'ERP', icon: <BarChart3 size={18} /> },
                        { id: 'sites', label: 'Sites', icon: <Globe size={18} /> },
                        { id: 'rh', label: 'RH', icon: <Users size={18} /> },
                        { id: 'infra', label: 'Infra', icon: <Server size={18} /> },
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setFilter(cat.id); setSelectedFeatureIndex(null); }}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${filter === cat.id
                                ? 'bg-secondary text-white shadow-lg scale-105'
                                : 'bg-white text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredFeatures.map((feature, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={feature.id}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedFeatureIndex(index)}
                            >
                                {/* Card Wrapper */}
                                <div className="h-full p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
                                    <div className="flex-grow flex items-center justify-center mb-6 h-[200px] relative">
                                        <DeviceFrame
                                            src={feature.image}
                                            alt={feature.title}
                                            type={feature.type as 'laptop' | 'browser'}
                                            className="w-full max-w-[280px]"
                                        />

                                        {/* Hover hint overlay on top of image area */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                            <span className="text-xs text-white font-bold bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                Ampliar
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-center mt-auto pt-4 border-t border-slate-50 relative z-20 bg-white">
                                        <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold mb-2 border border-slate-200 uppercase tracking-wider">
                                            {feature.category}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedFeatureIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedFeatureIndex(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full flex items-center justify-center max-w-7xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedFeatureIndex(null)}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <span className="sr-only">Fechar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            {/* Prev Button */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 md:left-8 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm shadow-xl"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className="absolute right-2 md:right-8 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm shadow-xl"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                            </button>

                            {/* Image Container */}
                            <div className="relative max-h-[90vh] w-full flex items-center justify-center p-4 md:p-12">
                                <motion.img
                                    key={selectedFeatureIndex} // Re-animate on change
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    src={filteredFeatures[selectedFeatureIndex].image}
                                    alt="Visualização em tela cheia"
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl drop-shadow-2xl"
                                />
                                <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                                    <span className="inline-block px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white font-medium text-sm">
                                        {filteredFeatures[selectedFeatureIndex].title}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Funcionalidades;
