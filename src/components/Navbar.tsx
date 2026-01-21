import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '/' },
        { name: 'Funcionalidades', href: '/funcionalidades' },
        { name: 'Soluções', href: '/solucoes' },
        { name: 'Planos', href: '/planos' },
        { name: 'Sobre Nós', href: '/sobre' },
        { name: 'Contato', href: '/contato' },
    ];

    // Function to handle scroll to top active link click
    const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 
            ${scrolled ? 'pt-4' : 'pt-0'}`}
        >
            <div
                className={`container mx-auto transition-all duration-500 ease-in-out
                ${scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 rounded-2xl py-3 px-6 max-w-6xl border border-white/20'
                        : 'bg-transparent py-6 px-4'}`}
            >
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
                        <img
                            src="/img/250x50.png"
                            alt="Serp Soluções"
                            className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10 brightness-0 invert'}`}
                        />
                    </Link>

                    {/* Desktop Menu Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    onClick={handleLinkClick}
                                    className={`relative font-medium text-sm transition-colors group
                                    ${scrolled ? 'text-slate-600 hover:text-primary' : 'text-slate-200 hover:text-white'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full 
                                        ${scrolled ? 'bg-secondary' : 'bg-white'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/login"
                            className={`font-semibold text-sm transition-colors
                            ${scrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-blue-100'}`}
                        >
                            Entrar
                        </Link>
                        <Link
                            to="/contato"
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center gap-2 group/btn
                            ${scrolled
                                    ? 'bg-secondary text-white hover:bg-secondary-hover hover:shadow-secondary/30'
                                    : 'bg-white text-primary hover:bg-blue-50'}`}
                        >
                            Testar Grátis
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors 
                        ${scrolled ? 'text-primary hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:hidden overflow-hidden"
                    >
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="block p-4 rounded-xl text-slate-600 font-medium hover:bg-slate-50 hover:text-secondary transition-colors"
                                        onClick={handleLinkClick}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
                            <Link to="#" className="w-full text-center py-3 rounded-xl font-bold text-primary hover:bg-slate-50 transition-colors">
                                Já sou cliente
                            </Link>
                            <Link to="/contato" className="w-full text-center py-3 rounded-xl font-bold bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-hover transition-all">
                                Começar Agora
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
