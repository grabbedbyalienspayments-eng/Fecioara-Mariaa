import { useEffect, useRef, useState } from 'react';

export default function Credibility() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { icon: 'ri-award-fill', text: 'Grădiniță acreditată', color: '#C96B45', bg: 'rgba(201,107,69,0.07)', border: 'rgba(201,107,69,0.15)' },
    { icon: 'ri-global-fill', text: 'Program bilingv', color: '#4A9E9B', bg: 'rgba(74,158,155,0.07)', border: 'rgba(74,158,155,0.15)' },
    { icon: 'ri-team-fill', text: 'Parteneriate selecte', color: '#D4A041', bg: 'rgba(212,160,65,0.07)', border: 'rgba(212,160,65,0.15)' },
    { icon: 'ri-camera-fill', text: 'Activitate documentată', color: '#6B8B6E', bg: 'rgba(107,139,110,0.07)', border: 'rgba(107,139,110,0.15)' },
  ];

  return (
    <div ref={sectionRef} className="py-10 md:py-12" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 ${visible ? 'animate-staggerIn' : 'opacity-0'}`}
              style={{
                background: item.bg,
                border: `1px solid ${item.border}`,
                animationDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'white' }}
              >
                <i className={`${item.icon} text-base`} style={{ color: item.color }} />
              </div>
              <span
                className="font-body text-xs md:text-sm font-semibold leading-snug"
                style={{ color: '#2D2520' }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
