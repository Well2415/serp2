import React from 'react';

import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <img src="/img/250x50.png" alt="Serp Soluções" className="h-10 mb-6 brightness-0 invert opacity-90" />
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Soluções inteligentes para gestão empresarial. Simplifique, controle e cresça com a melhor tecnologia do mercado.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/serp_solucoes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group" title="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="tel:+5562994424641" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group" title="Ligar">
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Funcionalidades</h4>
                        <ul className="space-y-4">
                            <li><a href="/funcionalidades" className="hover:text-secondary transition-colors">Vendas e PDV</a></li>
                            <li><a href="/funcionalidades" className="hover:text-secondary transition-colors">Controle Financeiro</a></li>
                            <li><a href="/funcionalidades" className="hover:text-secondary transition-colors">Gestão de Estoque</a></li>
                            <li><a href="/funcionalidades" className="hover:text-secondary transition-colors">Emissão de Notas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Empresa</h4>
                        <ul className="space-y-4">
                            <li><a href="/planos" className="hover:text-secondary transition-colors">Planos e Preços</a></li>
                            <li><a href="/sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
                            <li><a href="/contato" className="hover:text-secondary transition-colors">Falar com Consultor</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Localização</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3 group cursor-default">
                                <MapPin className="text-secondary mt-1 flex-shrink-0 group-hover:animate-bounce" size={20} />
                                <p className="leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                    Rua 103, Qd. 14 LT.17A,<br />
                                    Jd. Ana Amélia<br />
                                    <span className="block mt-2 font-semibold text-white">Bonfinópolis - GO</span>
                                    <span className="text-xs opacity-60">CEP 75195-000</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Serp Soluções. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
