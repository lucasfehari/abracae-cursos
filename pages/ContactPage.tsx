import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const ContactPage: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-navy py-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl font-display font-bold text-white mb-2">Fale Conosco</h1>
                    <p className="text-gray-300">Estamos prontos para tirar suas dúvidas.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-orange">
                            <h3 className="text-xl font-bold text-brand-navy mb-6 font-display">Canais de Atendimento</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase">Telefones</p>
                                        <p className="text-lg font-bold text-brand-navy">(62) 98133-5449</p>
                                        <p className="text-lg font-bold text-brand-navy">(62) 98282-5878</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase">Email</p>
                                        <p className="text-lg font-medium text-brand-navy">abracegoias@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase">Horário</p>
                                        <p className="text-lg font-medium text-brand-navy">Segunda a Sexta: 08h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-brand-navy mb-4 font-display flex items-center gap-2">
                                <MapPin className="text-brand-orange" /> Localização
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Av. Orlando Marques de Abreu, Qd 09 Lt 34<br />
                                Solar Santa Rita, Goiânia - GO, 74.395-038
                            </p>
                            <div className="h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4277721868456!2d-49.3789!3d-16.7052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzE4LjciUyA0OcKwMjInNDQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-fit">
                        <h3 className="text-2xl font-bold text-brand-navy mb-2 font-display">Envie uma Mensagem</h3>
                        <p className="text-slate-500 mb-8">Preencha o formulário abaixo e retornaremos em breve.</p>

                        <form className="space-y-5" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const data = Object.fromEntries(formData.entries());

                            const message = `*Nova Mensagem - ABRACAE*%0A%0A` +
                                `*Nome:* ${data.name}%0A` +
                                `*Contato:* ${data.contact}%0A` +
                                `*Assunto:* ${data.subject}%0A%0A` +
                                `*Mensagem:* ${data.message}`;

                            window.open(`https://wa.me/5562981335449?text=${message}`, '_blank');
                        }}>
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-1">Nome Completo</label>
                                <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-1">Email / WhatsApp</label>
                                <input name="contact" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="(62) 99999-9999" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-1">Assunto</label>
                                <select name="subject" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                                    <option>Dúvida sobre Cursos</option>
                                    <option>Parceria</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-navy mb-1">Mensagem</label>
                                <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <Button fullWidth variant="primary" className="mt-4">
                                Enviar Mensagem <Send size={18} className="ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};