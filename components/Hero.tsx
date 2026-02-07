import React from 'react';
import { Button } from './Button';
import { ChevronRight, CheckCircle, Trophy, Wrench } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-navy overflow-hidden min-h-[100vh] lg:min-h-[850px] flex items-center pt-20">
      
      {/* Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-honeycomb opacity-20 pointer-events-none"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80"></div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop"
          alt="Oficina Automotiva"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-orange/10 border border-brand-orange/30 backdrop-blur-md mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="text-brand-orange font-bold text-xs tracking-wider uppercase font-tech">Projeto ABRACAE - Goiânia</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Acelere Seu <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">
                Futuro Profissional
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed font-light border-l-4 border-brand-orange pl-6">
              Torne-se um especialista em <strong className="text-white">Ar Condicionado</strong>, <strong className="text-white">Elétrica</strong> e <strong className="text-white">Suspensão</strong>. Cursos 100% gratuitos com a qualidade que o mercado automotivo exige.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#cursos">
                <Button variant="primary" className="group">
                  Ver Cursos Disponíveis
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#metodologia">
                <Button variant="outline">
                  Conhecer Metodologia
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-brand-orange/20">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-brand-navyLight flex items-center justify-center text-xs text-white overflow-hidden">
                      <img src={`https://randomuser.me/api/portraits/men/${i*22}.jpg`} alt="Aluno" className="w-full h-full object-cover" />
                   </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-brand-navy bg-brand-gold text-brand-navy flex items-center justify-center text-xs font-bold font-tech">
                   +100
                 </div>
              </div>
              <div className="text-sm text-gray-400">
                <p className="font-tech uppercase tracking-wide text-brand-orange font-bold">Vencedores Qualificados</p>
                <p>pela ABRACAE em Goiás</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card - Matching the T-shirt Theme */}
          <div className="lg:w-1/2 relative hidden md:block">
            {/* Orange Accent Shape */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-brand-orange skew-x-12 rounded-3xl transform translate-x-10 translate-y-4 opacity-20"></div>

            <div className="relative z-10 bg-brand-navyLight rounded-3xl p-3 shadow-2xl border border-brand-orange/30">
                {/* Badge */}
                <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-navy p-6 rounded-xl shadow-xl z-20 border-4 border-brand-navy transform rotate-3">
                    <div className="text-4xl font-tech font-bold text-center">120</div>
                    <div className="text-xs font-bold uppercase tracking-wide text-center">Vagas<br/>Gratuitas</div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Mecânico profissional" 
                        className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
                    
                    {/* Floating Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex gap-2 mb-2">
                             <div className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded uppercase font-tech">Prática Real</div>
                             <div className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded uppercase font-tech border border-brand-orange">Certificado</div>
                        </div>
                        <h3 className="text-white font-display font-bold text-xl">Prepare-se para vencer.</h3>
                    </div>
                </div>
            </div>
            
            {/* Decorative Elements */}
            <Wrench className="absolute -bottom-8 -left-8 text-brand-orange opacity-20 transform -rotate-45" size={120} />
          </div>
        </div>
      </div>
    </div>
  );
};