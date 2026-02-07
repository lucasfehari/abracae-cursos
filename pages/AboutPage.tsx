import React from 'react';
import { About } from '../components/About';
import { TargetAudience } from '../components/TargetAudience';
import { Check, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
        <div className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-honeycomb opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-brand-orange font-bold font-tech uppercase tracking-widest">Institucional</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-6">Quem Somos</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    A ABRACAE é uma organização sem fins lucrativos dedicada a transformar o cenário social de Goiânia através da educação técnica automotiva.
                </p>
            </div>
        </div>

        <About />

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                            alt="Equipe ABRACAE" 
                            className="rounded-3xl shadow-2xl border-4 border-white"
                        />
                    </div>
                    <div>
                        <h3 className="font-display text-3xl font-bold text-brand-navy mb-6">Nossos Pilares</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-brand-navy">Excelência Técnica</h4>
                                    <p className="text-slate-600">Não formamos apenas ajudantes. Formamos técnicos capazes de diagnosticar e resolver problemas complexos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-brand-navy">Compromisso Social</h4>
                                    <p className="text-slate-600">Nossa prioridade são pessoas em situação de vulnerabilidade. Acreditamos que o emprego é a melhor forma de inclusão.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <TargetAudience />
    </div>
  );
};