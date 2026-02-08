interface CompassIconProps {
  size?: number;
  className?: string;
}

const CompassIcon = ({ size = 48, className = "" }: CompassIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    {/* Outer ring */}
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.3"
    />
    <circle
      cx="50"
      cy="50"
      r="42"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.15"
    />

    {/* Tick marks */}
    {Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      const isMajor = i % 9 === 0;
      const r1 = isMajor ? 38 : 40;
      const r2 = 43;
      return (
        <line
          key={i}
          x1={50 + r1 * Math.sin(angle)}
          y1={50 - r1 * Math.cos(angle)}
          x2={50 + r2 * Math.sin(angle)}
          y2={50 - r2 * Math.cos(angle)}
          stroke="currentColor"
          strokeWidth={isMajor ? "1.5" : "0.5"}
          opacity={isMajor ? "0.5" : "0.2"}
        />
      );
    })}

    {/* Cross lines */}
    <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <line x1="12" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />

    {/* North needle - Gold */}
    <polygon points="50,14 44,48 56,48" fill="hsl(38 80% 52%)" />
    {/* South needle - Dark */}
    <polygon points="50,86 44,52 56,52" fill="currentColor" opacity="0.25" />
    {/* East needle */}
    <polygon points="86,50 52,44 52,56" fill="currentColor" opacity="0.15" />
    {/* West needle */}
    <polygon points="14,50 48,44 48,56" fill="currentColor" opacity="0.15" />

    {/* Center circle */}
    <circle cx="50" cy="50" r="5" fill="hsl(38 80% 52%)" />
    <circle cx="50" cy="50" r="3" fill="hsl(38 80% 38%)" />
  </svg>
);

export default CompassIcon;