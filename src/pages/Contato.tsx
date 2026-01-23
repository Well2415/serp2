import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Contato = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Quero conhecer os Planos',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Utilizando FormSubmit.co para envio sem backend
            const response = await fetch("https://formsubmit.co/ajax/Pablo.sistemas21@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `Novo Contato Site: ${formData.subject}`,
                    _template: 'table', // Formata o email como uma tabela bonita
                    _captcha: 'false', // Desativa captcha para facilitar
                    nome: formData.name,
                    email: formData.email,
                    telefone: formData.phone,
                    assunto: formData.subject,
                    mensagem: formData.message,
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'Quero conhecer os Planos',
                    message: ''
                });
                // Volta para idle após 5 segundos
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Erro ao enviar:", error);
            setStatus('error');
        }
    };

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
                                <Link to="/login" className="text-emerald-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all hover:text-emerald-300">
                                    Acessar Portal do Cliente <ArrowRight size={16} />
                                </Link>
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
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
                            <h3 className="text-2xl font-bold text-primary mb-2">Envie uma mensagem</h3>
                            <p className="text-slate-500 mb-8">Preencha o formulário abaixo e nossos consultores enviarão um retorno para seu e-mail.</p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Seu Nome</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nome completo"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Seu E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="nome@empresa.com.br"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(62) 99999-9999"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Assunto</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    >
                                        <option>Quero conhecer os Planos</option>
                                        <option>Dúvida sobre Funcionalidades</option>
                                        <option>Parcerias</option>
                                        <option>Financeiro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-sm font-semibold text-slate-700">Como podemos ajudar?</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Conte um pouco sobre sua necessidade..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="w-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                                    >
                                        <CheckCircle2 size={20} />
                                        Mensagem enviada com sucesso!
                                    </motion.div>
                                ) : status === 'error' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="w-full bg-red-50 border border-red-200 text-red-700 font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                                    >
                                        <AlertCircle size={20} />
                                        Erro ao enviar. Tente novamente ou use o WhatsApp.
                                    </motion.div>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Enviar Mensagem
                                            </>
                                        )}
                                    </button>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contato;
