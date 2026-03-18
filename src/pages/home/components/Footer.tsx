import { useState } from 'react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (modal: 'privacy' | 'cookies' | 'terms') => {
    setActiveModal(modal);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative pt-20 pb-8 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #F5EFE3 0%, #FAF8F4 50%, #F0F7F7 100%)' }}
      >
        {/* Ink accent top */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{
          background: 'linear-gradient(90deg, #F2C8B4, #F3DDA0, #BDD3BF, #B3D8D7, #F2C8B4)'
        }} />

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(201,107,69,0.05)' }} />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(74,158,155,0.05)' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <button
                onClick={scrollToTop}
                className="inline-block mb-6 group cursor-pointer"
                aria-label="Scroll to top"
              >
                <div className="flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FF8A65] to-[#FF7043] rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <i className="ri-heart-3-fill text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Centrul Educațional</div>
                    <div className="text-lg font-semibold text-[#FF8A65]">„Fecioara Maria"</div>
                  </div>
                </div>
              </button>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Un mediu cald, sigur și bine organizat pentru dezvoltarea copilului tău. Oferim servicii de creșă și grădiniță cu predare bilingvă și activități educative variate.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/cedfecioaramaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2] to-[#0C63D4] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
                  <i className="ri-facebook-fill text-xl text-[#1877F2] group-hover:text-white relative z-10 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/@cedfecioaramaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] to-[#CC0000] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
                  <i className="ri-youtube-fill text-xl text-[#FF0000] group-hover:text-white relative z-10 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF8A65] to-[#FF7043] rounded-full" />
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:0799741474"
                    className="flex items-start gap-3 text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer group"
                  >
                    <i className="ri-phone-line text-xl text-[#FF8A65] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>0799 741 474</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cedfecioaramaria@gmail.com"
                    className="flex items-start gap-3 text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer group"
                  >
                    <i className="ri-mail-line text-xl text-[#FF8A65] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="break-all">cedfecioaramaria@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-600">
                    <i className="ri-map-pin-line text-xl text-[#FF8A65] mt-0.5" />
                    <div className="space-y-2">
                      <p>Bd. Basarabia nr. 20, București</p>
                      <p>Str. Popescu Vasile nr. 30, București</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FFB74D] to-[#FFA726] rounded-full" />
                Informații legale
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <i className="ri-shield-check-line text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span>Politică de Confidențialitate</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('cookies')}
                    className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <i className="ri-cookie-line text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span>Politică Cookies</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('terms')}
                    className="text-gray-600 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <i className="ri-file-text-line text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span>Termeni și Condiții</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <p className="text-center md:text-left">
                © {currentYear} Centrul Educațional „Fecioara Maria". Toate drepturile rezervate.
              </p>
              <a
                href="https://websiteon.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer group"
              >
                <span>Website creat de</span>
                <span className="font-semibold group-hover:scale-105 transition-transform duration-300">
                  WebsiteON
                </span>
                <i className="ri-arrow-right-up-line text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#FF8A65] to-[#FF7043] px-8 py-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {activeModal === 'privacy' && 'Politică de Confidențialitate'}
                {activeModal === 'cookies' && 'Politică Cookies'}
                {activeModal === 'terms' && 'Termeni și Condiții'}
              </h2>
              <button
                onClick={closeModal}
                className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 cursor-pointer group"
                aria-label="Close modal"
              >
                <i className="ri-close-line text-2xl text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(85vh-88px)]">
              {activeModal === 'privacy' && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Centrul Educațional „Fecioara Maria" respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu legislația în vigoare.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Colectarea datelor</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Datele personale pe care le colectăm prin formularele de contact sunt utilizate exclusiv pentru a vă contacta în legătură cu solicitarea dumneavoastră.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Utilizarea datelor</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Informațiile furnizate sunt folosite doar pentru a răspunde întrebărilor dumneavoastră și pentru a vă oferi informații despre serviciile noastre educaționale.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Protecția datelor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ne angajăm să protejăm datele dumneavoastră și să nu le transmitem către terțe părți fără consimțământul dumneavoastră explicit.
                  </p>
                </div>
              )}

              {activeModal === 'cookies' && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Acest site utilizează doar cookies strict necesare pentru funcționarea corectă a platformei.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ce sunt cookies?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies sunt fișiere text mici stocate pe dispozitivul dumneavoastră atunci când vizitați un site web.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Tipuri de cookies utilizate</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilizăm exclusiv cookies tehnice necesare pentru funcționarea site-ului. Nu folosim cookies de marketing sau de urmărire.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Gestionarea cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Puteți gestiona preferințele pentru cookies din setările browser-ului dumneavoastră.
                  </p>
                </div>
              )}

              {activeModal === 'terms' && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Prin utilizarea acestui site, sunteți de acord cu termenii și condițiile prezentate mai jos.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Informații generale</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Informațiile prezentate pe acest site au caracter orientativ. Pentru detalii exacte despre program, înscriere și servicii, vă rugăm să ne contactați direct.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Programarea vizitelor</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Programarea vizitelor se face telefonic sau prin completarea formularului de contact. Vă vom confirma disponibilitatea în cel mai scurt timp.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Modificări</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ne rezervăm dreptul de a modifica acești termeni și condiții. Modificările vor fi publicate pe această pagină.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
