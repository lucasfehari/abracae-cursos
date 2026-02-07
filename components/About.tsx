import React from 'react';
import { Target, Users, TrendingUp, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
        
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-honeycomb-light opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Narrative */}
            <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-brand-navyLight text-brand-orange font-bold text-xs rounded uppercase tracking-wider mb-4 font-tech">
                    O Problema vs A Solução
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                    O Paradoxo do Mercado Automotivo
                </h2>
                
                <div className="space-y-6 text-lg text-slate-600">
                    <p>
                        Vivemos uma realidade contraditória em Goiânia. De um lado, milhares de jovens e adultos buscam uma oportunidade de emprego. Do outro, oficinas e concessionárias não encontram profissionais qualificados.
                    </p>
                    <div className="p-6 bg-slate-50 border-l-4 border-brand-orange rounded-r-xl shadow-sm">
                        <p className="italic font-medium text-brand-navy">
                            "A complexidade técnica dos veículos modernos exige conhecimento especializado que o mercado atual não consegue suprir."
                        </p>
                    </div>
                    <p>
                        O projeto <strong>ABRACAE QUALIFICANDO VENCEDORES</strong> é a ponte que conecta esses dois mundos. Utilizamos recursos de emenda parlamentar para oferecer qualificação de ponta, 100% gratuita, para quem mais precisa.
                    </p>
                </div>
            </div>

            {/* Right: Feature Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-navy/5 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/5 rounded-bl-full"></div>
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <AlertTriangle size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Vulnerabilidade</h3>
                    <p className="text-slate-500 text-sm">Focamos em quebrar o ciclo do desemprego para quem tem pouco acesso à educação formal.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-navy/5 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 mt-0 sm:mt-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-navy/5 rounded-bl-full"></div>
                    <div className="w-12 h-12 bg-brand-navy/10 text-brand-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Alta Demanda</h3>
                    <p className="text-slate-500 text-sm">Setor de serviços automotivos representa grande parte do PIB local e carece de técnicos.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-navy/5 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full"></div>
                    <div className="w-12 h-12 bg-brand-gold/20 text-brand-orangeDark rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                        <Users size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Inclusão Social</h3>
                    <p className="text-slate-500 text-sm">Não é só um curso. É desenvolvimento pessoal, cidadania e encaminhamento profissional.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-navy/5 border border-slate-100 group hover:-translate-y-1 transition-transform duration-300 mt-0 sm:mt-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full"></div>
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Target size={24} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Empregabilidade</h3>
                    <p className="text-slate-500 text-sm">Meta de encaminhar 100% dos formandos para entrevistas em parceiros.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};