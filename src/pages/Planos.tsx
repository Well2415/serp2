import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, Star, Info, Minus } from 'lucide-react';
import Footer from '../components/Footer';

const plans = [
    {
        name: "Essencial",
        monthlyPrice: 161.25,
        yearlyPrice: 137.06,
        desc: "Ideal para pequenos negócios organizarem a casa.",
        features: [
            "Emissor Fiscal Ilimitado (NFe/NFCe)",
            "Gestão Financeira Completa",
            "Controle de Estoque Básico",
            "1 Acesso",
            "Suporte via Chat/Email"
        ],
        highlight: false,
        button: "Começar Agora",
        color: "blue"
    },
    {
        name: "Profissional",
        monthlyPrice: 210,
        yearlyPrice: 178.50,
        desc: "Performance máxima para empresas em expansão.",
        features: [
            "Tudo do Essencial +",
            "Até 3 Acessos",
            "Frente de Caixa (PDV) Offline",
            "App de Força de Vendas",
            "Suporte Prioritário (WhatsApp)"
        ],
        highlight: true,
        button: "Escolher Profissional",
        color: "secondary"
    },
    {
        name: "Enterprise",
        monthlyPrice: "Consulte",
        yearlyPrice: "Consulte",
        desc: "Ecossistema personalizado para grandes operações.",
        features: [
            "Tudo do Profissional +",
            "E-commerce Integrado",
            "Site Institucional",
            "Gestão de RH e Ponto",
            "Gerente de Conta Dedicado"
        ],
        highlight: false,
        button: "Falar com Especialista",
        color: "emerald"
    }
];

const featuresComparison = [
    {
        category: "Fiscal", items: [
            { name: "NFe, NFCe, NFSe", ess: true, pro: true, ent: true },
            { name: "Envio Automático para Contador", ess: true, pro: true, ent: true },
            { name: "Manifestação do Destinatário", ess: false, pro: true, ent: true },
        ]
    },
    {
        category: "Gestão", items: [
            { name: "Controle de Estoque", ess: "Básico", pro: "Avançado", ent: "Multi-loja" },
            { name: "Financeiro (DRE/Fluxo)", ess: true, pro: true, ent: true },
            { name: "Curva ABC e Relatórios BI", ess: false, pro: true, ent: true },
            { name: "Acessos", ess: "1", pro: "Até 3", ent: "Ilimitados" },
        ]
    },
    {
        category: "Vendas", items: [
            { name: "Frente de Caixa (PDV)", ess: true, pro: true, ent: true },
            { name: "App de Vendas Externas", ess: false, pro: true, ent: true },
            { name: "Loja Virtual Integrada", ess: false, pro: false, ent: true },
        ]
    }
];

const Planos = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Header */}
            <header className="pt-32 pb-24 bg-primary relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                    >
                        Investimento que se paga<br />
                        <span className="bg-gradient-to-r from-emerald-200 to-emerald-500 bg-clip-text text-transparent">no primeiro mês</span>
                    </motion.h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                        Transparência total. Sem taxas de implantação escondidas.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 text-white mb-8">
                        <span className={`text-sm font-medium transition-opacity ${!isYearly ? 'opacity-100' : 'opacity-60'}`}>Mensal</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-16 h-8 bg-white/20 backdrop-blur-sm rounded-full p-1 relative transition-all hover:bg-white/30 ring-2 ring-transparent focus:ring-secondary/50"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 32 : 0 }}
                                className="w-6 h-6 bg-white rounded-full shadow-md"
                            />
                        </button>
                        <span className={`text-sm font-medium flex items-center gap-2 transition-opacity ${isYearly ? 'opacity-100' : 'opacity-60'}`}>
                            Anual
                            <span className="px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wide rounded-full shadow-emerald-500/50 shadow-sm">
                                -15% OFF
                            </span>
                        </span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-24">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 border hover:border-blue-400/50 transition-all duration-300 flex flex-col ${plan.highlight
                                ? 'shadow-2xl shadow-blue-900/10 border-blue-200 z-10 scale-105 md:scale-110'
                                : 'shadow-xl border-slate-100'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-blue-600 text-white px-6 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
                                    <Star size={12} fill="currentColor" /> Recomendado
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm">{plan.desc}</p>
                            </div>

                            <div className="mb-8 text-center h-20 flex flex-col justify-center items-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isYearly ? 'year' : 'month'}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-baseline justify-center gap-1"
                                    >
                                        {typeof plan.yearlyPrice === 'number' ? (
                                            <>
                                                <span className="text-sm font-semibold text-slate-400">R$</span>
                                                <span className="text-5xl font-extrabold text-primary tracking-tight">
                                                    {(isYearly ? Number(plan.yearlyPrice) : Number(plan.monthlyPrice)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                                </span>
                                                <span className="text-slate-400 font-medium text-sm">/mês</span>
                                            </>
                                        ) : (
                                            <span className="text-4xl font-extrabold text-primary">Sob Consulta</span>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                                {isYearly && typeof plan.yearlyPrice === 'number' && typeof plan.monthlyPrice === 'number' && (
                                    <span className="text-xs text-emerald-500 font-bold bg-emerald-50 px-2 py-1 rounded-full mt-2">
                                        Economize R$ {((Number(plan.monthlyPrice) - Number(plan.yearlyPrice)) * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} /ano
                                    </span>
                                )}
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                <div className="w-full h-px bg-slate-100 mb-6" />
                                {plan.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/5562994424641?text=${encodeURIComponent(
                                    plan.name === 'Enterprise'
                                        ? `Olá! Gostaria de falar com um especialista sobre o plano *Enterprise* e conhecer as soluções personalizadas para grandes operações.`
                                        : `Olá! Gostaria de contratar o plano *${plan.name}*.\n\n` +
                                        `Modalidade: *${isYearly ? 'Anual' : 'Mensal'}*\n` +
                                        `Valor: *R$ ${(isYearly ? Number(plan.yearlyPrice) : Number(plan.monthlyPrice)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}*\n\n` +
                                        `Aguardo contato para prosseguir.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 block text-center ${plan.highlight
                                    ? 'bg-secondary hover:bg-secondary-hover text-white shadow-blue-500/25'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                    }`}
                            >
                                {plan.button}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="p-8 bg-slate-50 border-b border-slate-100">
                        <h3 className="text-2xl font-bold text-center text-primary">Comparativo detalhado</h3>
                    </div>
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="sticky left-0 z-20 bg-white p-6 text-slate-500 font-medium shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] min-w-[160px]">Recurso</th>
                                    <th className="p-6 text-center text-primary font-bold w-1/5 min-w-[140px]">Essencial</th>
                                    <th className="p-6 text-center text-secondary font-bold text-lg w-1/5 min-w-[140px]">Profissional</th>
                                    <th className="p-6 text-center text-emerald-600 font-bold w-1/5 min-w-[140px]">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {featuresComparison.map((section, i) => (
                                    <React.Fragment key={i}>
                                        <tr className="bg-slate-50/50">
                                            <td colSpan={4} className="sticky left-0 z-10 bg-slate-50 p-4 pl-6 text-xs font-bold uppercase tracking-wider text-slate-400 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                                {section.category}
                                            </td>
                                        </tr>
                                        {section.items.map((item, j) => (
                                            <tr key={j} className="group hover:bg-slate-50 transition-colors">
                                                <td className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 p-6 text-sm font-medium text-slate-700 flex items-center gap-2 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] transition-colors">
                                                    {item.name}
                                                    <Info size={14} className="text-slate-300 cursor-help shrink-0" />
                                                </td>
                                                <td className="p-6 text-center">
                                                    {item.ess === true ? <Check size={20} className="mx-auto text-emerald-500" /> :
                                                        item.ess === false ? <Minus size={20} className="mx-auto text-slate-300" /> :
                                                            <span className="text-sm font-bold text-slate-600">{item.ess}</span>}
                                                </td>
                                                <td className="p-6 text-center transition-colors">
                                                    {item.pro === true ? <Check size={20} className="mx-auto text-emerald-500" /> :
                                                        item.pro === false ? <Minus size={20} className="mx-auto text-slate-300" /> :
                                                            <span className="text-sm font-bold text-primary">{item.pro}</span>}
                                                </td>
                                                <td className="p-6 text-center">
                                                    {item.ent === true ? <Check size={20} className="mx-auto text-emerald-500" /> :
                                                        item.ent === false ? <Minus size={20} className="mx-auto text-slate-300" /> :
                                                            <span className="text-sm font-bold text-emerald-600">{item.ent}</span>}
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Ainda com dúvida?</h2>
                    <div className="grid gap-4 text-left">
                        {[
                            { q: "Posso cancelar quando quiser?", a: "Sim! Não temos fidelidade nos planos mensais. Porém, existe contrato ou valores diferenciados na implantação caso opte pela isenção de fidelidade." },
                            { q: "O backup é seguro?", a: "Seus dados são salvos diariamente na AWS com criptografia de ponta." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                    <HelpCircle size={18} className="text-secondary" /> {item.q}
                                </h4>
                                <p className="text-slate-600 text-sm ml-7">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Planos;
