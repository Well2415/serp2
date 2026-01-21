import React from 'react';

const Partners = () => {
    const partners = [
        "AB GARFILM", "SOBROSA", "PROLAB", "FIO E ARTE", "SHOP MED",
        "MOVEIS ANDRADE", "RADIADORES BANDEIRANTES", "FERRAGISTA MARISTA", "ASFAX", "EFICAX",
        "AFENIX", "FIBRAUTO", "FORT LAVAJATO", "MUSA MODA", "DF TINTAS",
        "MECAMPEÇAS", "ADN UNIFORMES", "CASA MÉDICA", "LEÃO MOTOS", "CLAUDIA MAKES",
        "ALINE MODAS", "LU CALÇADOS", "EMPÓRIO FREITAS", "EMPÓRIO 36", "AMANDA CALÇADOS",
        "KRAVO E KANELA", "ECOMAIS", "EMPÓRIO TRÊS JOÃO", "MARMORARIA PIRINEUS", "Q-LIGA"
    ];

    // Split into two rows
    const mid = Math.ceil(partners.length / 2);
    const row1 = partners.slice(0, mid);
    const row2 = partners.slice(mid);

    const MarqueeRow = ({ items, direction = 'left', speed = 50 }: { items: string[], direction?: 'left' | 'right', speed?: number }) => (
        <div className="relative flex overflow-x-hidden group my-4">
            <div
                className="flex gap-12 items-center whitespace-nowrap will-change-transform"
                style={{
                    animation: `scroll ${speed}s linear infinite`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal'
                }}
            >
                {/* Reduced duplication for performance, relying on CSS for loop */}
                {[...items, ...items].map((partner, i) => (
                    <span key={i} className="text-xl md:text-2xl font-bold text-slate-300 mx-4">{partner}</span>
                ))}
            </div>

            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
    );

    return (
        <section className="py-12 bg-white overflow-hidden border-y border-slate-100">
            <div className="container mx-auto px-6 text-center mb-8">
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Confiado por Líderes</span>
            </div>

            <div className="flex flex-col gap-2">
                <MarqueeRow items={row1} speed={60} />
                <MarqueeRow items={row2} direction="right" speed={70} />
            </div>
        </section>
    );
};

export default Partners;
