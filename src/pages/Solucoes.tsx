import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LineChart, Globe, Users } from 'lucide-react';
import Footer from '../components/Footer';

const solutions = [
    {
        id: 'erp',
        title: "Gestão Comercial Completa",
        subtitle: "O Coração da sua Empresa",
        desc: "Transforme a bagunça em processos organizados. Do estoque ao financeiro, tenha o controle total em uma única tela.",
        features: ["Emissão de Notas em segundos", "Controle de Estoque Multilocal", "Integração Bancaria", "Relatórios de DRE e Lucratividade"],
        // Keeping generic ERP or swapping to a specific one if available. 
        // User asked for "images we inserted in prints". 
        // Since we don't have a specific "ERP" folder from the prints (only Ponto and Sites), 
        // I will use one of the high-quality site dashboards that looks like a system or keep the gallery_erp if it was already a print.
        // Let's assume gallery_erp was the placeholder. 
        // Actually, let's use 'site3.png' or similar if it looks like a dashboard, OR just update the ones we know (Sites and RH).
        // Safest bet: Update Sites and RH, leave ERP if no better match, OR use Ponto2 if it looks generic enough. 
        // Let's stick to the clear matches first.
        image: "/img/gallery_erp.png",
        icon: <LineChart className="text-blue-500" size={32} />,
        color: "bg-blue-50",
        btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
        id: 'sites',
        title: "Presença Digital & E-commerce",
        subtitle: "Sua Vitrine para o Mundo",
        desc: "Não basta ter um sistema, você precisa vender. Criamos sites de alta performance que convertem visitantes em clientes reais.",
        features: ["Sites Institucionais Otimizados (SEO)", "Lojas Virtuais Integradas ao ERP", "Landing Pages de Alta Conversão", "Design Responsivo para Celular"],
        image: "/img/features/sites/site1.png",
        icon: <Globe className="text-purple-500" size={32} />,
        color: "bg-purple-50",
        btnColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
        id: 'rh',
        title: "Gestão de RH & Ponto 4.0",
        subtitle: "Pessoas no Centro de Tudo",
        desc: "Uma gestão de equipe moderna, segura e transparente. Elimine o relógio de ponto físico e as planilhas manuais.",
        features: ["Ponto por Geolocalização (GPS)", "Reconhecimento Facial Antifraude", "Assinatura Eletrônica de Folha", "Portal do Colaborador (App)"],
        image: "/img/features/ponto/ponto1.png",
        icon: <Users className="text-emerald-500" size={32} />,
        color: "bg-emerald-50",
        btnColor: "bg-emerald-600 hover:bg-emerald-700"
    }
];

const Solucoes = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <header className="pt-32 pb-20 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 font-semibold text-sm mb-6 border border-white/10"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Soluções Integradas
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                    >
                        Para cada desafio,<br />
                        <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">uma solução inteligente.</span>
                    </motion.h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Conheça o nosso portfólio de tecnologias desenvolvidas para acelerar o crescimento da sua empresa.
                    </p>
                </div>
            </header>

            <main>
                {solutions.map((sol, index) => (
                    <section key={sol.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <div className="container mx-auto px-6">
                            <div className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 space-y-8"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${sol.color} flex items-center justify-center mb-6 shadow-sm`}>
                                        {sol.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2">{sol.subtitle}</h3>
                                        <h2 className="text-4xl font-bold text-primary mb-4">{sol.title}</h2>
                                        <p className="text-lg text-slate-600 leading-relaxed">{sol.desc}</p>
                                    </div>

                                    <ul className="space-y-4">
                                        {sol.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`${sol.btnColor} text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group`}>
                                        Saiba mais detalhes
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>

                                {/* Visual */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${sol.color} to-transparent rounded-[3rem] transform rotate-3 scale-95 -z-10`} />
                                    <img
                                        src={sol.image}
                                        alt={sol.title}
                                        className="w-full rounded-[2rem] shadow-2xl border border-slate-100/50 hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* CTA Bottom */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/img/fundo.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Não sabe qual é a ideal para você?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Nossos consultores são especialistas em entender o seu momento e indicar o melhor caminho.
                        </p>
                        <a href="/contato" className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-2xl">
                            Falar com um Consultor
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Solucoes;
