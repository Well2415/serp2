import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "Preciso instalar algo no computador?",
            answer: "Você escolhe! Temos o sistema 100% em nuvem (acesso de qualquer lugar) e também o sistema Local (Desktop) para quem prefere ou precisa de robustez offline."
        },
        {
            question: "O sistema emite Nota Fiscal (NFe/NFCe)?",
            answer: "Sim! Emitimos NFe, NFCe e NFSe para mais de 1.500 cidades homologadas. Tudo simples e com cálculo automático."
        },
        {
            question: "Posso testar antes de pagar?",
            answer: "Com certeza. Oferecemos 30 dias grátis com acesso a todas as funcionalidades pra você ver na prática."
        },
        {
            question: "Como funciona o suporte?",
            answer: "Nosso suporte é humanizado e funciona via Chat e WhatsApp em horário comercial. Nada de robôs te enrolando."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">Dúvidas?</span>
                    <h2 className="text-4xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
                    <p className="text-light-text text-lg">Tire suas dúvidas e veja porque somos a escolha certa.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden transition-all bg-white hover:shadow-lg">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-primary">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-slate-400" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-light-text leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
