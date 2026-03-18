interface WaveSeparatorProps {
  variant?: 'wave1' | 'wave2' | 'wave3' | 'curve1' | 'curve2';
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveSeparator({ 
  variant = 'wave1', 
  color = '#FAF8F5',
  flip = false,
  className = ''
}: WaveSeparatorProps) {
  const waves = {
    wave1: (
      <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    wave2: (
      <path d="M0,48L48,42.7C96,37,192,27,288,32C384,37,480,59,576,64C672,69,768,59,864,48C960,37,1056,27,1152,26.7C1248,27,1344,37,1392,42.7L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    wave3: (
      <path d="M0,40L48,45.3C96,51,192,61,288,61.3C384,61,480,51,576,42.7C672,35,768,29,864,32C960,35,1056,45,1152,48C1248,51,1344,45,1392,42.7L1440,40L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    curve1: (
      <path d="M0,64L1440,32L1440,0L0,0Z" />
    ),
    curve2: (
      <path d="M0,32L720,64L1440,32L1440,0L0,0Z" />
    )
  };

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ transform: flip ? 'rotate(180deg)' : 'none' }}>
      <svg 
        className="relative block w-full h-12 md:h-16 lg:h-20" 
        viewBox="0 0 1440 96" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {waves[variant]}
      </svg>
      <style>{`
        svg path {
          fill: ${color};
        }
      `}</style>
    </div>
  );
}