import React from 'react';
import { Laptop, PenTool, CheckCircle2, UserCheck } from 'lucide-react';

export const Methodology: React.FC = () => {
    const steps = [
        {
            icon: UserCheck,
            title: "1. Seleção",
            desc: "Inscrição, análise de perfil socioeconômico e matrícula. Foco em quem mais precisa."
        },
        {
            icon: Laptop,
            title: "2. Teoria Online (90h)",
            desc: "Plataforma AVA com vídeo-aulas e apostilas. Flexibilidade para estudar os fundamentos."
        },
        {
            icon: PenTool,
            title: "3. Prática Presencial (90h)",
            desc: "Mão na massa em oficinas equipadas. Diagnóstico e reparo real com supervisão técnica."
        },
        {
            icon: CheckCircle2,
            title: "4. Mercado de Trabalho",
            desc: "Encaminhamento para parceiros, apoio com currículo e preparação para entrevistas."
        }
    ];

  return (
    <section id="metodologia" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-brand-navy font-bold tracking-wider uppercase text-sm font-tech">Metodologia Híbrida</span>
            <h2 className="font-display text-4xl font-bold text-brand-navy mt-2">
              Seu Caminho até o Emprego
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Utilizamos o modelo <em>Blended Learning</em> para acelerar seu aprendizado. 
                Em apenas 6 meses, você sai do zero ao profissional.
            </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-navy/10 via-brand-orange/30 to-brand-navy/10 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-brand-orange/20 shadow-xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                            <step.icon size={32} />
                        </div>
                        <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{step.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed px-2">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Info Box */}
        <div className="mt-20 bg-brand-navy rounded-3xl p-8 md:p-12 shadow-2xl border-t-4 border-brand-orange flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-honeycomb opacity-10"></div>
            
            <div className="w-full md:w-1/3 relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                    alt="Aula prática" 
                    className="rounded-2xl w-full object-cover h-64 shadow-lg border-2 border-brand-orange/50"
                />
            </div>
            <div className="w-full md:w-2/3 relative z-10">
                <h4 className="font-display text-2xl font-bold text-white mb-4">Por que Híbrido?</h4>
                <p className="text-gray-300 mb-6">
                    A metodologia híbrida permite que você aprenda a teoria no seu ritmo, em casa, e aproveite cada minuto na sede da ABRACAE para praticar. Isso garante uma formação mais rápida e eficiente, focada no que as oficinas exigem: <strong>resolução de problemas.</strong>
                </p>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-brand-navyLight text-brand-orange rounded-lg font-medium text-sm border border-brand-orange/30 font-tech uppercase">Plataforma EaD 24h</span>
                    <span className="px-4 py-2 bg-brand-navyLight text-brand-orange rounded-lg font-medium text-sm border border-brand-orange/30 font-tech uppercase">Oficina Escola</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};