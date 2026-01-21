import React, { useState } from 'react';
import { FileText, Briefcase, Plug, ShoppingCart, DollarSign, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Ecosystem = () => {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    const nodes = [
        { id: 1, title: "Vendas", desc: "PDV, Pedidos e Orçamentos.", icon: <ShoppingCart size={24} />, color: "bg-blue-500", x: 50, y: 10 },
        { id: 2, title: "Financeiro", desc: "Fluxo de caixa e DRE.", icon: <DollarSign size={24} />, color: "bg-emerald-500", x: 80, y: 25 },
        { id: 3, title: "Estoque", desc: "Controle multilocais.", icon: <Package size={24} />, color: "bg-orange-500", x: 80, y: 75 },
        { id: 4, title: "Notas Fiscais", desc: "Emissão de NFe, NFCe e NFSe.", icon: <FileText size={24} />, color: "bg-purple-500", x: 50, y: 90 },
        { id: 5, title: "Serviços", desc: "Gestão de OS e contratos.", icon: <Briefcase size={24} />, color: "bg-pink-500", x: 20, y: 75 },
        { id: 6, title: "Integrações", desc: "Conecte com bancos e APIs.", icon: <Plug size={24} />, color: "bg-indigo-500", x: 20, y: 25 },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        O <span className="text-emerald-400">ecossistema</span> feito para o seu agora.
                    </h2>
                    <p className="text-slate-300 text-lg">Conecte todas as pontas do seu negócio em uma única plataforma.</p>
                </div>

                <div className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] mx-auto hidden md:block">
                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full visible pointer-events-none z-10">
                        {nodes.map((node, i) => (
                            <React.Fragment key={i}>
                                {/* Base Line */}
                                <motion.line
                                    x1="50%" y1="50%"
                                    x2={`${node.x}%`}
                                    y2={`${node.y}%`}
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                                {/* Traveling Light Pulse - Restored */}
                                <motion.line
                                    x1="50%" y1="50%"
                                    x2={`${node.x}%`}
                                    y2={`${node.y}%`}
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    strokeDasharray="8 200"
                                    strokeLinecap="round"
                                    initial={{ strokeDashoffset: 208, opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2 // Stagger the pulses slightly
                                    }}
                                />
                            </React.Fragment>
                        ))}
                    </svg>

                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(74,222,128,0.3)] border-4 border-white/80">
                        <div className="absolute inset-0 rounded-full border-2 border-secondary animate-ping opacity-20"></div>
                        <img src="/img/logosistema3.png" alt="Serp Soluções" className="w-20 h-auto object-contain" />
                    </div>

                    {/* Nodes */}
                    {nodes.map((node, index) => {
                        return (
                            <motion.div
                                key={node.id}
                                className="absolute z-30 cursor-pointer"
                                style={{
                                    top: `${node.y}%`,
                                    left: `${node.x}%`,
                                }}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                                // Reverting to x/y centering to avoid CSS conflict and NaN errors
                                // Using explicit initial x/y to prevent NaN% error
                                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                                whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className={`relative flex flex-col items-center gap-2 group`}>
                                    <div className={`w-16 h-16 rounded-2xl ${node.color} flex items-center justify-center text-white shadow-lg shadow-black/20`}>
                                        {node.icon}
                                    </div>
                                    <div className="bg-white/90 backdrop-blur text-primary px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                                        {node.title}
                                    </div>

                                    {/* Tooltip */}
                                    <AnimatePresence>
                                        {hoveredNode === node.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-24 w-48 bg-slate-800 text-white text-sm p-3 rounded-lg shadow-xl z-50 text-center border border-white/10"
                                            >
                                                {node.desc}
                                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-white/10"></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile List View */}
                <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
                    {nodes.map((node) => (
                        <div key={node.id} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-3">
                            <div className={`w-12 h-12 rounded-lg ${node.color} flex items-center justify-center text-white`}>
                                {node.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{node.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
