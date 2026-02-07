import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy border-t-4 border-brand-orange pt-16 pb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-honeycomb opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <span className="font-tech font-bold text-3xl text-white">ABRACAE</span>
                    <span className="px-2 py-0.5 rounded bg-brand-orange text-[10px] font-bold uppercase text-brand-navy">GO</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                    Associação Brasileira de Treinamentos e Inclusão Social. 
                    Transformando vidas através da qualificação profissional automotiva de alta performance.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-lg bg-brand-navyLight flex items-center justify-center hover:bg-brand-orange transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-brand-navyLight flex items-center justify-center hover:bg-brand-orange transition-colors">
                        <Facebook size={20} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-tech font-bold text-brand-orange uppercase tracking-wider mb-6">Navegação</h4>
                <ul className="space-y-3">
                    <li><Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
                    <li><Link to="/sobre" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">O Projeto</Link></li>
                    <li><Link to="/cursos" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Cursos Gratuitos</Link></li>
                    <li><Link to="/inscricao" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Pré-Inscrição</Link></li>
                    <li><Link to="/contato" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Fale Conosco</Link></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h4 className="font-tech font-bold text-brand-orange uppercase tracking-wider mb-6">Contato</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                        <Phone size={18} className="text-brand-orange mt-0.5" />
                        <span>(62) 98133-5449<br/>(62) 98282-5878</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={18} className="text-brand-orange" />
                        <span>abracegoias@gmail.com</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-brand-orange mt-0.5" />
                        <span>Solar Santa Rita<br/>Goiânia - GO</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-brand-navyLight pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} ABRACAE. CNPJ: 20.476.171/0001-07.</p>
            <p>Desenvolvido com foco no futuro.</p>
        </div>
      </div>
    </footer>
  );
};