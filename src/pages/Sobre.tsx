import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Trophy, ShieldCheck, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Sobre = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
            {/* Header - Standard (Matches Solucoes.tsx) */}
            <header className="pt-32 pb-20 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    {/* Badge / Pill */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 font-semibold text-sm mb-6 border border-white/10"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Quem Somos
                    </motion.div>

                    {/* Gradient Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Muito mais que software,<br />
                        <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">somos o seu crescimento.</span>
                    </motion.h1>

                    {/* Improved Copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Há uma década transformando complexidade em resultados. Conheça a tecnologia e as pessoas por trás da gestão de milhares de empresas.
                    </motion.p>
                </div>
            </header>

            {/* History Section - Soft Animations */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-12 h-1 bg-secondary rounded-full"></span>
                                <span className="uppercase tracking-wider font-bold text-sm text-secondary">Nossa História</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                Uma década construindo o futuro da gestão empresarial.
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                                <p>
                                    A Serp Soluções começou com um objetivo claro: eliminar a burocracia que impede o crescimento das empresas brasileiras.
                                </p>
                                <p>
                                    Ao longo dos anos, evoluímos de uma pequena startup para uma referência nacional em software de gestão. Nosso crescimento foi impulsionado por ouvir nossos clientes e entregar exatamente o que eles precisam: simplicidade e robustez.
                                </p>
                                <p>
                                    Hoje, nossa sede é um hub de inovação onde desenvolvemos tecnologias que facilitam a vida de milhares de empresários todos os dias.
                                </p>
                            </div>
                        </motion.div>

                        {/* Placeholder Sede with Soft Shadow */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl h-[500px] flex items-center justify-center shadow-2xl shadow-slate-200 border border-slate-100 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-slate-50 transition-colors group-hover:bg-slate-100"></div>
                            <div className="text-center text-slate-400 relative z-10 transition-transform group-hover:scale-105">
                                <Building2 size={64} className="mx-auto mb-4 text-slate-300" />
                                <span className="block font-semibold text-lg">Foto da Sede</span>
                                <span className="text-sm opacity-70">(Inserir imagem aqui)</span>
                            </div>
                            {/* <img src="/placeholder-hq.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section - Card Style */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Placeholder Fundador */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-50 rounded-3xl h-[600px] flex items-center justify-center border border-slate-100 shadow-xl relative overflow-hidden order-2 md:order-1 group"
                        >
                            <div className="text-center text-slate-400 z-10 transition-transform group-hover:scale-105">
                                <Users size={64} className="mx-auto mb-4 text-slate-300" />
                                <span className="block font-semibold text-lg">Foto do Fundador</span>
                                <span className="text-sm opacity-70">(Inserir fotografia profissional)</span>
                            </div>
                            {/* <img src="/placeholder-founder.jpg" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" /> */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-2"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-12 h-1 bg-secondary rounded-full"></span>
                                <span className="uppercase tracking-wider font-bold text-sm text-secondary">Liderança</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-8">
                                A Visão de Quem Faz
                            </h2>
                            <blockquote className="text-2xl font-light leading-relaxed text-slate-600 mb-8">
                                "Nosso compromisso não é apenas com o código, mas com a tranquilidade do empresário. Queremos que você durma sabendo que sua empresa está sob controle."
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">F</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Nome do Fundador</h3>
                                    <p className="text-secondary font-medium">CEO & Fundador</p>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed text-slate-500 mt-8 font-light">
                                Com vasta experiência no setor de tecnologia, nosso fundador lidera a Serp Soluções com foco total na experiência do usuário e na estabilidade do sistema.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Support / Credibility Section - Cards */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-slate-900 mb-4"
                        >
                            Por que confiar na Serp?
                        </motion.h2>
                        <p className="text-lg text-slate-600">Mais do que tecnologia, oferecemos parceria.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <HeadphonesIcon size={32} />, title: "Suporte Especializado", desc: "Atendimento rápido e humano. Nossa equipe entende do seu negócio e resolve problemas de verdade.", color: "text-secondary", bg: "bg-blue-50" },
                            { icon: <ShieldCheck size={32} />, title: "Segurança Total", desc: "Seus dados protegidos com os mais altos padrões de segurança do mercado. Backups automáticos e criptografia.", color: "text-emerald-600", bg: "bg-emerald-50" },
                            { icon: <Trophy size={32} />, title: "Reconhecimento", desc: "Uma década de excelência e milhares de clientes satisfeitos que crescem conosco todos os anos.", color: "text-purple-600", bg: "bg-purple-50" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{item.title}</h3>
                                <p className="text-slate-600 text-center leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Standard Style (Matches Solucoes.tsx) */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/fundo.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-8"
                    >
                        Pronto para transformar sua empresa?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                    >
                        Junte-se a milhares de empresários que escolheram a Serp Soluções para crescer.
                    </motion.p>
                    <Link
                        to="/contato"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-2xl flex items-center gap-2 w-fit mx-auto"
                    >
                        Falar com um Consultor
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Sobre;
