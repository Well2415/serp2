import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate loading for now
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen relative overflow-hidden px-4 flex items-center justify-center">
            {/* Unified Page Background (Matching App.tsx) */}
            <div className="fixed inset-0 z-[-1] pointer-events-none" style={{
                background: `
                    radial-gradient(circle at 10% 20%, rgba(0, 146, 209, 0.2) 0%, transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(0, 146, 209, 0.1) 0%, transparent 40%)
                `,
                backgroundColor: '#1a365d' // Fallback/Base color matching theme
            }} />



            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <div className="text-center mb-8">
                        <img src="/img/250x50.png" alt="Serp Soluções" className="h-10 mx-auto mb-6 brightness-0 invert" />
                        <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta!</h2>
                        <p className="text-slate-400 text-sm">Acesse sua conta para gerenciar seu negócio.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-slate-300">Senha</label>
                                <a href="#" className="text-xs text-secondary hover:text-secondary-hover transition-colors">Esqueceu a senha?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Entrar na Plataforma
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            Ainda não tem conta?{' '}
                            <Link to="/contato" className="text-secondary font-bold hover:text-white transition-colors">
                                Testar Grátis
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
