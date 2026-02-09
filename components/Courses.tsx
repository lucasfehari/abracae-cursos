import React from 'react';
import { Course } from '../types';
import { ThermometerSun, Zap, Activity, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 'ar-cond',
      title: 'Ar Condicionado Automotivo',
      description: 'Especialização em climatização. Mercado em expansão devido ao clima da região.',
      duration: '180 Horas',
      icon: ThermometerSun,
      image: './arcondicionado.png',
      topics: ['Ciclos de refrigeração', 'Diagnóstico de falhas', 'Recarga de gás', 'Manutenção preventiva']
    },
    {
      id: 'eletrica',
      title: 'Elétrica Básica',
      description: 'A base de tudo. Veículos modernos dependem 100% de sistemas elétricos complexos.',
      duration: '180 Horas',
      icon: Zap,
      image: './eletrica.png',
      topics: ['Fundamentos de elétrica', 'Uso de multímetro', 'Alternadores e baterias', 'Fusíveis e relés']
    },
    {
      id: 'suspensao',
      title: 'Suspensão e Alinhamento',
      description: 'Segurança viária. O serviço mais recorrente nas oficinas mecânicas do Brasil.',
      duration: '180 Horas',
      icon: Activity,
      image: './suspensaoealinhamento.png',
      topics: ['Geometria veicular', 'Balanceamento', 'Troca de componentes', 'Diagnóstico de ruídos']
    }
  ];

  return (
    <section id="cursos" className="py-24 bg-brand-dark text-white relative">
      <div className="absolute inset-0 bg-honeycomb opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold font-tech uppercase tracking-widest">Capacitação Técnica</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 mt-2">
            Nossos Cursos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Formação técnica completa e gratuita. Escolha sua área e comece sua carreira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group bg-brand-navyLight/50 rounded-3xl border border-brand-navyLight hover:border-brand-orange overflow-hidden hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-300 flex flex-col">

              {/* Image Header */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyLight to-transparent z-10"></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <div className="bg-brand-orange p-2 rounded-lg text-white shadow-lg">
                    <course.icon size={20} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20 bg-brand-gold text-brand-navy font-bold px-3 py-1 rounded-sm text-xs shadow-lg uppercase font-tech">
                  100% Gratuito
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-display text-white mb-2">{course.title}</h3>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-brand-orange" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={16} className="text-brand-orange" />
                    <span>Certificado</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 flex-1 leading-relaxed text-sm">
                  {course.description}
                </p>

                <div className="mb-8 p-4 bg-brand-navy/50 rounded-xl border border-brand-navy">
                  <h4 className="text-[10px] font-bold text-brand-orange uppercase tracking-wider mb-3 font-tech">O que você aprende:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-300">
                        <span className="mr-2 text-brand-orange mt-0.5">▪</span> {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#/inscricao" className="mt-auto">
                  <Button fullWidth variant="secondary">
                    Inscrever-se Agora
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};