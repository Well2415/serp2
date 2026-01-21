import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Contato = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <header className="pt-32 pb-20 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                    >
                        Vamos impulsionar<br />
                        <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">seu negócio?</span>
                    </motion.h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Estamos prontos para tirar suas dúvidas e mostrar como a Serp Soluções pode transformar sua empresa.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Contact Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-primary mb-6">Canais de Atendimento</h3>
                            <div className="space-y-6">
                                <a href="https://wa.me/5562994424641" target="_blank" rel="noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100 cursor-pointer">
                                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">WhatsApp (Comercial)</p>
                                        <p className="text-lg font-bold text-primary group-hover:text-emerald-600 transition-colors">(62) 99442-4641</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">E-mail</p>
                                        <p className="text-lg font-bold text-primary">contato@serpsolucoes.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4">
                                    <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">Sede</p>
                                        <p className="text-lg font-bold text-primary">Bonfinópolis-GO</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Mini Card - Support */}
                        <div className="bg-slate-900 rounded-3xl p-8 shadow-lg relative overflow-hidden border border-slate-800">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4">Já é cliente?</h3>
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    Para suporte técnico especializado, abertura de chamados ou dúvidas sobre utilização, acesse a Área do Cliente.
                                </p>
                                <button className="text-emerald-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all hover:text-emerald-300">
                                    Acessar Portal do Cliente <ArrowRight size={16} />
                                </button>
                            </div>
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-[1.5]"
                    >
                        <form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-primary mb-2">Envie uma mensagem</h3>
                            <p className="text-slate-500 mb-8">Preencha o formulário abaixo e nossos consultores entrarão em contato em até 24h.</p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Seu Nome</label>
                                    <input type="text" placeholder="Nome completo" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Seu E-mail</label>
                                    <input type="email" placeholder="nome@empresa.com.br" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                                    <input type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Assunto</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all">
                                        <option>Quero conhecer os Planos</option>
                                        <option>Dúvida sobre Funcionalidades</option>
                                        <option>Parcerias</option>
                                        <option>Financeiro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-sm font-semibold text-slate-700">Como podemos ajudar?</label>
                                <textarea rows={4} placeholder="Conte um pouco sobre sua necessidade..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                <Send size={20} />
                                Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contato;
