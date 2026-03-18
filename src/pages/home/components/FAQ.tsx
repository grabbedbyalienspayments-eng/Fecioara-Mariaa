import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'Aveți creșă și grădiniță?',
    a: 'Da, Centrul Educațional „Fecioara Maria" oferă servicii complete de creșă pentru copii cu vârste mici și grădiniță acreditată pentru preșcolari.',
    icon: 'ri-seedling-fill',
    color: '#6B8B6E',
  },
  {
    q: 'Cum funcționează predarea bilingvă?',
    a: 'Predarea bilingvă română–engleză este integrată natural în activitățile zilnice, fără presiune, prin imersie progresivă adaptată vârstei.',
    icon: 'ri-global-fill',
    color: '#4A9E9B',
  },
  {
    q: 'Ce activități suplimentare au copiii?',
    a: 'Dans (parteneriat Mihai Petre), limbă germană, arte plastice, pictură, muzică vocală, dezvoltare personală și pregătire pentru școală.',
    icon: 'ri-palette-fill',
    color: '#C96B45',
  },
  {
    q: 'Cum comunicați cu părinții?',
    a: 'Comunicare zilnică educator–părinte, raport săptămânal, transmiterea meniului, informare organizatorică, întâlniri individuale și monitorizarea progresului.',
    icon: 'ri-chat-3-fill',
    color: '#D4A041',
  },
  {
    q: 'Cum este meniul copiilor?',
    a: 'Meniul este preparat în bucătăria proprie. Fără mezeluri, fără carne de pui. Se servesc carne de curcan, vițel și pește, fructe și legume zilnic, dulciuri preparate în casă.',
    icon: 'ri-restaurant-fill',
    color: '#6B8B6E',
  },
  {
    q: 'Cum programez o vizită?',
    a: 'Ne puteți contacta telefonic la 0799 741 474, pe email sau completând formularul de contact. Programăm vizite la un moment convenabil pentru familia dumneavoastră.',
    icon: 'ri-calendar-check-fill',
    color: '#C96B45',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#FAF8F4' }}
    >
      {/* Rainbow wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden" style={{ height: 55 }}>
        <svg viewBox="0 0 1440 55" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rwSep8" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F2C8B4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#BDD3BF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B3D8D7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,22 Q360,50 720,20 Q1080,-8 1440,24 L1440,55 L0,55 Z" fill="url(#rwSep8)" />
          <path d="M0,34 Q360,55 720,32 Q1080,10 1440,36 L1440,55 L0,55 Z" fill="#FAF8F4" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #C96B45)' }} />
            <span className="chapter-label">Răspunsuri clare</span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #C96B45, transparent)' }} />
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: '#2D2520' }}
          >
            Întrebări{' '}
            <em
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #C96B45, #D4A041)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              frecvente
            </em>
          </h2>
          <p className="font-body text-lg" style={{ color: '#5C4E44' }}>
            Tot ce vreți să știți despre centrul nostru, înainte de prima vizită.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
                style={{
                  background: 'white',
                  border: `1px solid ${isOpen ? `${faq.color}30` : 'rgba(242,233,221,0.8)'}`,
                  boxShadow: isOpen ? `0 8px 32px ${faq.color}12` : 'none',
                  animationDelay: `${i * 70}ms`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left cursor-pointer transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: isOpen ? `${faq.color}15` : 'rgba(242,233,221,0.6)',
                    }}
                  >
                    <i className={`${faq.icon} text-base`} style={{ color: faq.color }} />
                  </div>

                  <h3
                    className="flex-1 font-body font-semibold text-sm md:text-base pr-4"
                    style={{ color: '#2D2520' }}
                  >
                    {faq.q}
                  </h3>

                  {/* Toggle */}
                  <div
                    className="w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? `${faq.color}15` : 'rgba(242,233,221,0.6)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  >
                    <i className="ri-arrow-down-s-line text-base" style={{ color: faq.color }} />
                  </div>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  <div className="px-6 pb-5 pl-20">
                    <div
                      className="pl-4"
                      style={{ borderLeft: `2px solid ${faq.color}30` }}
                    >
                      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#5C4E44' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-14 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-body text-base mb-6" style={{ color: '#7A6B60' }}>
            Mai aveți întrebări? Suntem bucuroși să vă răspundem.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-body font-semibold rounded-full whitespace-nowrap cursor-pointer transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #C96B45, #D4A041)',
              boxShadow: '0 8px 28px rgba(201,107,69,0.28)',
            }}
          >
            <i className="ri-phone-line" />
            Contactează-ne
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}
