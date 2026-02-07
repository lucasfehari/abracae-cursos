import React from 'react';
import { MapPin, User, Wallet } from 'lucide-react';
import { Button } from './Button';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden border-t border-brand-navyLight">
        {/* Background Image/Pattern */}
        <div className="absolute inset-0 bg-honeycomb opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-[150px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-r from-brand-orange to-brand-orangeDark rounded-3xl p-10 md:p-16 shadow-2xl shadow-brand-orange/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                
                <div className="md:w-1/2">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                        Para quem é este projeto?
                    </h2>
                    <p className="text-orange-50 text-lg mb-8 font-medium">
                        O <span className="font-bold text-white">Qualificando Vencedores</span> é destinado exclusivamente para quem quer crescer profissionalmente mas precisa de apoio para começar.
                    </p>
                    <a href="#contato">
                        <Button variant="navy" className="font-bold">
                            Verificar Minha Vaga
                        </Button>
                    </a>
                </div>

                <div className="md:w-1/2 w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-lg text-brand-orange mt-1 shadow">
                                <User size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Jovens e Adultos</h4>
                                <p className="text-orange-50 text-sm">Idade preferencial entre 18 e 29 anos, buscando primeiro emprego ou recolocação.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-lg text-brand-orange mt-1 shadow">
                                <Wallet size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Vulnerabilidade Social</h4>
                                <p className="text-orange-50 text-sm">Pessoas com baixa renda, desempregados ou em situação de risco social.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-white p-2 rounded-lg text-brand-orange mt-1 shadow">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Região Metropolitana</h4>
                                <p className="text-orange-50 text-sm">Residentes de Goiânia e região metropolitana (Solar Santa Rita e adjacências).</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
  );
};