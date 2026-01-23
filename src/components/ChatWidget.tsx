import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ChatWidget = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <motion.a
                href={`https://wa.me/5562994424641?text=${encodeURIComponent("Olá! Estou navegando no site da Serp Soluções e gostaria de tirar algumas dúvidas ou solicitar suporte.")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center text-white transition-colors relative z-50 bg-emerald-500 hover:bg-emerald-600"
            >
                <MessageCircle size={28} className="fill-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-50 animate-pulse" />
            </motion.a>
        </div>
    );
};

export default ChatWidget;
