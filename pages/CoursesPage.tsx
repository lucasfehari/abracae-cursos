import React from 'react';
import { Courses } from '../components/Courses';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-brand-navy py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h1 className="text-4xl font-display font-bold text-white mb-2">Nossos Cursos</h1>
                    <p className="text-gray-300">Todas as formações são 100% gratuitas e presenciais.</p>
                </div>
                <Link to="/inscricao">
                    <Button variant="primary">Inscreva-se Agora</Button>
                </Link>
              </div>
          </div>
      </div>
      
      <Courses />

      {/* Certification Info */}
      <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-8">Certificação Reconhecida</h2>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <div className="text-left">
                          <p className="text-lg font-medium text-slate-800 mb-2">Ao concluir o curso, você recebe:</p>
                          <ul className="space-y-2 text-slate-600">
                              <li className="flex items-center gap-2">✅ Certificado de 180 Horas</li>
                              <li className="flex items-center gap-2">✅ Histórico de Notas e Frequência</li>
                              <li className="flex items-center gap-2">✅ Carta de Recomendação (Alunos destaque)</li>
                          </ul>
                      </div>
                      <div className="w-full md:w-1/3 h-40 bg-white border-2 border-brand-orange/20 rounded-xl flex items-center justify-center relative shadow-sm">
                          <div className="absolute inset-0 flex items-center justify-center opacity-10">
                              <span className="font-tech text-4xl font-bold uppercase rotate-[-20deg]">ABRACAE</span>
                          </div>
                          <span className="font-bold text-brand-navy">Certificado</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};