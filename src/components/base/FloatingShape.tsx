import { useEffect, useState } from 'react';

interface FloatingShapeProps {
  type?: 'circle' | 'blob1' | 'blob2' | 'blob3';
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  duration?: number;
}

export default function FloatingShape({
  type = 'circle',
  color = 'var(--color-coral-200)',
  size = 100,
  top,
  left,
  right,
  bottom,
  delay = 0,
  duration = 8,
}: FloatingShapeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const position: React.CSSProperties = {
    top,
    left,
    right,
    bottom,
  };

  const shapes = {
    circle: (
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} opacity="0.4" />
    ),
    blob1: (
      <path
        d={`M ${size * 0.5} ${size * 0.1} 
           C ${size * 0.8} ${size * 0.1}, ${size * 0.9} ${size * 0.4}, ${size * 0.9} ${size * 0.5}
           C ${size * 0.9} ${size * 0.6}, ${size * 0.8} ${size * 0.9}, ${size * 0.5} ${size * 0.9}
           C ${size * 0.2} ${size * 0.9}, ${size * 0.1} ${size * 0.6}, ${size * 0.1} ${size * 0.5}
           C ${size * 0.1} ${size * 0.4}, ${size * 0.2} ${size * 0.1}, ${size * 0.5} ${size * 0.1} Z`}
        fill={color}
        opacity="0.3"
      />
    ),
    blob2: (
      <path
        d={`M ${size * 0.5} ${size * 0.05}
           C ${size * 0.75} ${size * 0.05}, ${size * 0.95} ${size * 0.25}, ${size * 0.95} ${size * 0.5}
           C ${size * 0.95} ${size * 0.7}, ${size * 0.8} ${size * 0.85}, ${size * 0.6} ${size * 0.95}
           C ${size * 0.4} ${size * 0.95}, ${size * 0.2} ${size * 0.85}, ${size * 0.05} ${size * 0.6}
           C ${size * 0.05} ${size * 0.35}, ${size * 0.25} ${size * 0.05}, ${size * 0.5} ${size * 0.05} Z`}
        fill={color}
        opacity="0.35"
      />
    ),
    blob3: (
      <path
        d={`M ${size * 0.5} ${size * 0.15}
           C ${size * 0.7} ${size * 0.1}, ${size * 0.85} ${size * 0.3}, ${size * 0.9} ${size * 0.5}
           C ${size * 0.85} ${size * 0.7}, ${size * 0.7} ${size * 0.85}, ${size * 0.5} ${size * 0.9}
           C ${size * 0.3} ${size * 0.85}, ${size * 0.15} ${size * 0.7}, ${size * 0.1} ${size * 0.5}
           C ${size * 0.15} ${size * 0.3}, ${size * 0.3} ${size * 0.15}, ${size * 0.5} ${size * 0.15} Z`}
        fill={color}
        opacity="0.4"
      />
    ),
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...position,
        width: `${size}px`,
        height: `${size}px`,
        animation: mounted ? `floatSlow ${duration}s ease-in-out ${delay}s infinite` : 'none',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {shapes[type]}
      </svg>
    </div>
  );
}