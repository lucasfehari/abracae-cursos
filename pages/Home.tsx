import React from 'react';
import { Hero } from '../components/Hero';
import { Methodology } from '../components/Methodology';
import { TargetAudience } from '../components/TargetAudience';
import { Courses } from '../components/Courses';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Methodology />
      
      {/* Short About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">Por que escolher a ABRACAE?</h2>
             <p className="text-slate-600 max-w-3xl mx-auto mb-10 text-lg">
                Somos mais que uma escola. Somos um projeto social que entende a realidade do aluno e oferece suporte completo: do uniforme ao encaminhamento para o mercado de trabalho.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-3xl font-tech font-bold text-brand-orange mb-2">100%</div>
                    <div className="text-sm font-bold text-brand-navy uppercase">Gratuito</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-3xl font-tech font-bold text-brand-orange mb-2">180h</div>
                    <div className="text-sm font-bold text-brand-navy uppercase">Carga Horária</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-3xl font-tech font-bold text-brand-orange mb-2">Prático</div>
                    <div className="text-sm font-bold text-brand-navy uppercase">Oficina Real</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-3xl font-tech font-bold text-brand-orange mb-2">Emprego</div>
                    <div className="text-sm font-bold text-brand-navy uppercase">Encaminhamento</div>
                </div>
             </div>
        </div>
      </section>

      <Courses />
      <TargetAudience />
    </>
  );
};