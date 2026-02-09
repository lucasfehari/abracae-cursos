import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'O Projeto', href: '/sobre' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled || location.pathname !== '/'
        ? 'bg-brand-navy/95 backdrop-blur-md border-brand-orange/20 py-3 shadow-lg'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`p-2.5 rounded-xl shadow-lg border border-brand-orange/20 transition-colors ${isScrolled || location.pathname !== '/'
              ? 'bg-brand-orange text-white'
              : 'bg-brand-navy/80 backdrop-blur text-brand-orange'
              }`}>
              <img className='w-48 h-12' src="./public/logo.svg" alt="Logo" />
            </div>
            <div className="flex flex-col">
              <span className={`font-tech font-bold text-xl tracking-tight leading-none ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white'
                }`}>
                ABRACAE
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange group-hover:text-white transition-colors">
                Qualificando Vencedores
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-orange font-tech uppercase tracking-wide relative group ${(isScrolled || location.pathname !== '/') ? 'text-gray-200' : 'text-white'
                    } ${location.pathname === link.href ? 'text-brand-orange' : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full ${location.pathname === link.href ? 'w-full' : ''}`}></span>
                </Link>
              ))}
            </nav>
            <Link to="/inscricao" className={`
              px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5 font-tech uppercase
              ${(isScrolled || location.pathname !== '/')
                ? 'bg-brand-orange text-white hover:bg-brand-orangeDark'
                : 'bg-brand-orange text-white hover:bg-white hover:text-brand-orange'}
            `}>
              Pré-Inscrição
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden absolute w-full bg-brand-navy border-b border-brand-orange/20 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors font-tech uppercase ${location.pathname === link.href ? 'bg-brand-orange text-white' : 'text-white hover:text-brand-orange hover:bg-brand-navyLight'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/inscricao"
            className="flex items-center justify-between w-full px-4 py-3 mt-4 rounded-lg bg-white text-brand-orange font-bold font-tech uppercase"
          >
            Fazer Pré-Inscrição
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};