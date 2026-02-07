import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form Area */}
            <div>
                <span className="text-brand-orange font-bold tracking-wider uppercase text-sm font-tech">Fale Conosco</span>
                <h2 className="font-display text-4xl font-bold text-brand-navy mt-2 mb-6">
                    Garanta sua vaga hoje.
                </h2>
                <p className="text-slate-600 mb-8 text-lg">
                    Entre em contato para saber sobre as datas das próximas turmas e documentos necessários para matrícula.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-brand-orange transition-colors">
                        <div className="bg-brand-navy p-3 rounded-lg text-brand-orange mr-4">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Ligue ou chame no WhatsApp</p>
                            <p className="text-brand-navy font-bold text-lg">(62) 98133-5449 / 98282-5878</p>
                        </div>
                    </div>

                    <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-brand-orange transition-colors">
                        <div className="bg-brand-navy p-3 rounded-lg text-brand-orange mr-4">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Envie um e-mail</p>
                            <p className="text-brand-navy font-bold text-lg">abracegoias@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-brand-orange transition-colors">
                        <div className="bg-brand-navy p-3 rounded-lg text-brand-orange mr-4">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Visite a Sede</p>
                            <p className="text-brand-navy font-medium">
                                Avenida Orlando Marques de Abreu, Qd 09 Lt 34<br/>
                                Solar Santa Rita, Goiânia - GO
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-inner h-[500px] relative border-4 border-slate-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4277721868456!2d-49.3789!3d-16.7052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzE4LjciUyA0OcKwMjInNDQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="absolute inset-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
                <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-orange">
                    <p className="font-bold text-brand-navy text-sm flex items-center gap-2">
                        <Clock size={16} className="text-brand-orange" />
                        Atendimento: Seg a Sex, 08h às 18h
                    </p>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col">
                <span className="font-tech font-bold text-xl text-brand-navy">ABRACAE</span>
                <span className="text-slate-500 text-sm">CNPJ: 20.476.171/0001-07</span>
            </div>
            
            <p className="text-slate-500 text-sm text-center md:text-right">
                &copy; {new Date().getFullYear()} ABRACAE. Todos os direitos reservados.
            </p>

            <div className="flex gap-4">
                <a href="#" className="p-2 bg-brand-navy text-white rounded-lg hover:bg-brand-orange transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-brand-navy text-white rounded-lg hover:bg-brand-orange transition-colors">
                    <Facebook size={20} />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};