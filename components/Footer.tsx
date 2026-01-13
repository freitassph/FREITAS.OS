import React, { useState } from 'react';
import { AppMode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle, ExternalLink, ArrowRight, Dna, ShieldCheck } from 'lucide-react';

interface FooterProps {
  mode: AppMode;
}

const Footer: React.FC<FooterProps> = ({ mode }) => {
  const [activeModal, setActiveModal] = useState<'neural' | null>(null);
  const closeModal = () => setActiveModal(null);

  const getWhatsAppLink = () => {
      const phoneNumber = "5563984840431";
      const message = "Olá Pedro, gostaria de saber mais sobre a arquitetura digital e IA para minha clínica.";
      return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const scrollToProtocols = () => {
    const section = document.getElementById('modules-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modalVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 25, stiffness: 300 } }
  };

  return (
    <>
      <footer className="relative pt-20 pb-10 z-30">
         {/* Background Integration - Subtle Gradient to Ground the page */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />

         <div className="container mx-auto px-6 max-w-6xl relative z-10">
             
             {/* Divider - Subtle Gradient Line */}
             <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 opacity-50"></div>

             <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
                 
                 {/* Brand Column */}
                 <div className="space-y-6 max-w-md">
                     <div className="flex items-center gap-2 text-white/90">
                         <Dna size={20} className="text-medical-teal" />
                         <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase">FREITAS LAB</span>
                     </div>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">
                         Laboratório de Inteligência Digital para Medicina.
                         Construímos a arquitetura invisível que posiciona sua clínica no topo do mercado.
                     </p>
                     
                     <div className="flex gap-4">
                         <a href="https://instagram.com/freitas.lab" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
                             <Instagram size={18} />
                         </a>
                         <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
                             <MessageCircle size={18} />
                         </a>
                     </div>
                 </div>

                 {/* CTA Column - Compact */}
                 <div className="flex flex-col items-start md:items-end space-y-4">
                     <span className="text-[10px] font-mono text-medical-teal uppercase tracking-widest opacity-80">Próximo Passo</span>
                     <h3 className="text-2xl md:text-3xl font-serif text-white/90 leading-tight md:text-right">
                         Sua transformação <br/> digital começa aqui.
                     </h3>
                     <button 
                        onClick={() => setActiveModal('neural')}
                        className="group flex items-center gap-3 text-white/80 border-b border-white/10 pb-1 hover:text-white hover:border-medical-teal transition-all"
                     >
                        <span className="text-xs font-mono font-bold tracking-widest uppercase">Solicitar Diagnóstico</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-medical-teal" />
                     </button>
                 </div>
             </div>

             {/* Bottom Bar */}
             <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-mono text-gray-700 tracking-wider uppercase">
                        © {new Date().getFullYear()} FREITAS LAB. All rights reserved.
                    </div>
                 </div>

                 <div className="flex items-center gap-6">
                     <button 
                        onClick={scrollToProtocols}
                        className="text-[10px] font-mono text-gray-700 hover:text-gray-400 cursor-pointer uppercase transition-colors"
                     >
                        Protocolos
                     </button>
                     <span className="text-[10px] font-mono text-gray-700 hover:text-gray-400 cursor-pointer uppercase transition-colors">Privacidade</span>
                 </div>
             </div>

         </div>
      </footer>

      {/* MODAL - Updated Branding */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
          >
             <motion.div 
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-md bg-zinc-950 border border-white/10 shadow-2xl relative overflow-hidden`}
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-medical-teal"></div>
                
                <div className="p-8 space-y-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-white font-serif text-xl italic">Freitas Lab</h3>
                            <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mt-1">Direct Connection</p>
                        </div>
                        <button onClick={closeModal} className="text-gray-500 hover:text-white"><X size={18}/></button>
                    </div>

                    <div className="space-y-3">
                        <a href={getWhatsAppLink()} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-medical-teal/50 hover:bg-medical-teal/5 transition-all group">
                            <div className="flex items-center gap-3">
                                <MessageCircle size={18} className="text-white"/>
                                <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">WhatsApp Oficial</span>
                            </div>
                            <ExternalLink size={14} className="text-gray-500"/>
                        </a>
                        <a href="https://instagram.com/freitas.lab" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all group">
                            <div className="flex items-center gap-3">
                                <Instagram size={18} className="text-white"/>
                                <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">Instagram</span>
                            </div>
                            <ExternalLink size={14} className="text-gray-500"/>
                        </a>
                    </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;