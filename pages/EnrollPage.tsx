import React from 'react';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';

export const EnrollPage: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-brand-navy relative">
            <div className="absolute inset-0 bg-honeycomb opacity-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="text-center mb-10">
                    <span className="text-brand-orange font-bold font-tech uppercase tracking-widest text-sm">Ficha de Inscrição</span>
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-white mt-2">Garanta Sua Vaga</h1>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Preencha seus dados abaixo para iniciar o processo de pré-matrícula. Nossa equipe entrará em contato para agendar a entrega da documentação.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-brand-orange">
                    {/* Header Form */}
                    <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex items-center justify-between">
                        <div>
                            <h3 className="text-brand-navy font-bold text-lg">Dados do Candidato</h3>
                            <p className="text-xs text-slate-500">Campos marcados com * são obrigatórios</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                            <CheckCircle size={14} /> Inscrições Abertas
                        </div>
                    </div>

                    <form className="p-8 space-y-8" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const data = Object.fromEntries(formData.entries());

                        const message = `*Nova Pré-Inscrição - ABRACAE*%0A%0A` +
                            `*Curso:* ${data.course || 'Não selecionado'}%0A` +
                            `*Nome:* ${data.name}%0A` +
                            `*Nascimento:* ${data.birthdate}%0A` +
                            `*CPF:* ${data.cpf}%0A` +
                            `*WhatsApp:* ${data.whatsapp}%0A` +
                            `*Email:* ${data.email || 'Não informado'}%0A` +
                            `*Endereço:* ${data.address}`;

                        window.open(`https://wa.me/5562981335449?text=${message}`, '_blank');
                    }}>

                        {/* Course Selection */}
                        <div>
                            <label className="block text-sm font-bold text-brand-navy uppercase tracking-wide mb-3">Curso de Interesse *</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <label className="cursor-pointer relative">
                                    <input type="radio" name="course" value="Ar Condicionado" className="peer sr-only" required />
                                    <div className="p-4 rounded-xl border-2 border-slate-200 hover:border-brand-orange peer-checked:border-brand-orange peer-checked:bg-brand-orange/5 transition-all text-center">
                                        <div className="font-bold text-brand-navy">Ar Condicionado</div>
                                        <div className="text-xs text-slate-500">180h</div>
                                    </div>
                                </label>
                                <label className="cursor-pointer relative">
                                    <input type="radio" name="course" value="Elétrica Básica" className="peer sr-only" />
                                    <div className="p-4 rounded-xl border-2 border-slate-200 hover:border-brand-orange peer-checked:border-brand-orange peer-checked:bg-brand-orange/5 transition-all text-center">
                                        <div className="font-bold text-brand-navy">Elétrica Básica</div>
                                        <div className="text-xs text-slate-500">180h</div>
                                    </div>
                                </label>
                                <label className="cursor-pointer relative">
                                    <input type="radio" name="course" value="Suspensão" className="peer sr-only" />
                                    <div className="p-4 rounded-xl border-2 border-slate-200 hover:border-brand-orange peer-checked:border-brand-orange peer-checked:bg-brand-orange/5 transition-all text-center">
                                        <div className="font-bold text-brand-navy">Suspensão</div>
                                        <div className="text-xs text-slate-500">180h</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Personal Data */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo *</label>
                                <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none bg-slate-50" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Data de Nascimento *</label>
                                <input name="birthdate" type="date" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none bg-slate-50" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">CPF *</label>
                                <input name="cpf" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none bg-slate-50" placeholder="000.000.000-00" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">WhatsApp *</label>
                                <input name="whatsapp" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none bg-slate-50" placeholder="(62) 99999-9999" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                                <input name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none bg-slate-50" />
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Endereço Completo (Bairro/Cidade) *</label>
                            <input name="address" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy outline-none bg-slate-50" placeholder="Rua, Quadra, Lote, Bairro..." />
                            <p className="text-xs text-orange-600 mt-1 font-medium">⚠️ Preferência para moradores de Goiânia e região metropolitana.</p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                            <input type="checkbox" required className="mt-1 w-4 h-4 text-brand-orange rounded border-slate-300 focus:ring-brand-orange" />
                            <span className="text-sm text-slate-600">Declaro que li os pré-requisitos e que as informações acima são verdadeiras. Estou ciente de que esta é uma pré-inscrição e a vaga depende da entrega de documentos presenciais.</span>
                        </div>

                        <Button fullWidth variant="primary" className="py-4 text-lg shadow-xl">
                            Confirmar Pré-Inscrição
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    );
};