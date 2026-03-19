import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <BrowserRouter basename={__BASE_PATH__}>
      {/* Premium Navbar with Frosted Glass Effect */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-soft py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between">

            {/* Logo - centrat pe mobil cand nu e scrollat, stanga cand e scrollat */}
            <button
              onClick={scrollToTop}
              className={`cursor-pointer transition-all duration-500 flex-shrink-0 ${
                !scrolled
                  ? 'absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0'
                  : 'relative'
              }`}
            >
              {/* Desktop logo */}
              <img
                src="/images/413204403554.webp"
                alt="Centrul Educational Fecioara Maria"
                className={`hidden lg:block w-auto object-contain transition-all duration-500 ${
                  scrolled ? 'h-24' : 'h-48'
                }`}
              />
              {/* Mobile logo */}
              <img
                src="/images/413204403554.webp"
                alt="Centrul Educational Fecioara Maria"
                className={`lg:hidden w-auto object-contain transition-all duration-500 ${
                  scrolled ? 'h-[4.5rem]' : 'h-36'
                }`}
              />
            </button>

            {/* Desktop Navigation - RIGHT */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Acasă', id: 'acasa' },
                { label: 'Despre noi', id: 'despre' },
                { label: 'Servicii', id: 'servicii' },
                { label: 'Program', id: 'program' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body font-medium text-base whitespace-nowrap cursor-pointer transition-all duration-300 relative group ${
                    scrolled 
                      ? 'text-gray-700 hover:text-coral-500' 
                      : 'text-white hover:text-coral-200'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-coral-400 to-coral-500 text-white font-body font-semibold text-base rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(251,113,133,0.4)]"
              >
                Programează vizită
              </button>
            </div>

            {/* Mobile Menu Button - RIGHT */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer ${
                scrolled 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'bg-white/20 backdrop-blur-md text-white'
              }`}
            >
              <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 py-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-soft animate-fadeInUp">
              <div className="flex flex-col gap-4 px-6">
                {[
                  { label: 'Acasă', id: 'acasa' },
                  { label: 'Despre noi', id: 'despre' },
                  { label: 'Servicii', id: 'servicii' },
                  { label: 'Program', id: 'program' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="font-body font-medium text-base text-gray-700 hover:text-coral-500 transition-colors duration-300 text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 px-6 py-3 bg-gradient-to-r from-coral-400 to-coral-500 text-white font-body font-semibold text-base rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 hover:shadow-[0_6px_20px_rgba(251,113,133,0.4)]"
                >
                  Programează vizită
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
