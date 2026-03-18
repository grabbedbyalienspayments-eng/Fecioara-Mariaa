interface FeatherMotifProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  animated?: boolean;
  delay?: number;
}

const sizeMap = {
  sm: 'text-3xl',
  md: 'text-5xl',
  lg: 'text-7xl',
  xl: 'text-9xl',
};

export default function FeatherMotif({
  size = 'md',
  color = 'text-terra-300',
  className = '',
  animated = true,
  delay = 0,
}: FeatherMotifProps) {
  return (
    <span
      className={`inline-block select-none pointer-events-none ${sizeMap[size]} ${color} ${animated ? 'animate-featherDrift' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, opacity: 0.55 }}
      aria-hidden="true"
    >
      <i className="ri-quill-pen-line" />
    </span>
  );
}
