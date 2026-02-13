interface IconProps {
  size?: number;
  className?: string;
}

// רכישת דירה - בית עם מחט מצפן
export const HomePurchaseIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* House */}
    <path d="M8 22L24 10L40 22V38C40 39.1 39.1 40 38 40H10C8.9 40 8 39.1 8 38V22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08"/>
    <path d="M4 24L24 8L44 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Compass needle inside house */}
    <polygon points="24,16 21.5,27 26.5,27" fill="hsl(38 80% 52%)" />
    <polygon points="24,34 21.5,27 26.5,27" fill="currentColor" opacity="0.3" />
    <circle cx="24" cy="27" r="2" fill="hsl(38 80% 52%)" />
    <circle cx="24" cy="27" r="1" fill="hsl(38 80% 38%)" />
  </svg>
);

// מחיר למשתכן - דלת עם מפתח מצפן
export const AffordableHousingIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Building */}
    <rect x="10" y="8" width="28" height="34" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08"/>
    {/* Windows */}
    <rect x="15" y="13" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <rect x="28" y="13" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <rect x="15" y="22" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    <rect x="28" y="22" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    {/* Door with compass rose */}
    <rect x="19" y="32" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    {/* Mini compass rose on door */}
    <polygon points="24,33.5 23,37 25,37" fill="hsl(38 80% 52%)" />
    <polygon points="24,40.5 23,37 25,37" fill="currentColor" opacity="0.3" />
    <line x1="21" y1="37" x2="27" y2="37" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="24" cy="37" r="1" fill="hsl(38 80% 52%)" />
  </svg>
);

// משפרי דיור - שני בתים עם חץ מסלול מפה
export const HomeUpgradeIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Small house */}
    <path d="M4 26L12 20L20 26V34C20 34.6 19.6 35 19 35H5C4.4 35 4 34.6 4 34V26Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M2 27L12 19L22 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Large house */}
    <path d="M28 22L36 14L44 22V34C44 34.6 43.6 35 43 35H29C28.4 35 28 34.6 28 34V22Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M26 23L36 13L46 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Map-style route arrow between houses */}
    <path d="M20 38 C22 42, 26 42, 28 38" stroke="hsl(38 80% 52%)" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="3 2"/>
    <polygon points="28,37 30,39 28,41" fill="hsl(38 80% 52%)" />
    {/* Route dots */}
    <circle cx="21" cy="40" r="1" fill="hsl(38 80% 52%)" opacity="0.5"/>
    <circle cx="24" cy="41.5" r="1" fill="hsl(38 80% 52%)" opacity="0.7"/>
  </svg>
);

// משקיעים - מגדל מטבעות עם מצפן מרחף
export const InvestorIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Coin stack */}
    <ellipse cx="20" cy="38" rx="10" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <ellipse cx="20" cy="33" rx="10" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <ellipse cx="20" cy="28" rx="10" ry="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <line x1="10" y1="28" x2="10" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="30" y1="28" x2="30" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    {/* Floating mini compass */}
    <circle cx="36" cy="14" r="8" stroke="hsl(38 80% 52%)" strokeWidth="1.5" fill="hsl(38 80% 52%)" fillOpacity="0.1"/>
    <polygon points="36,8 34.5,13 37.5,13" fill="hsl(38 80% 52%)" />
    <polygon points="36,20 34.5,15 37.5,15" fill="currentColor" opacity="0.3" />
    <circle cx="36" cy="14" r="1.5" fill="hsl(38 80% 52%)" />
    {/* Glow lines */}
    <line x1="36" y1="3" x2="36" y2="5" stroke="hsl(38 80% 52%)" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
    <line x1="44" y1="14" x2="46" y2="14" stroke="hsl(38 80% 52%)" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
    <line x1="28" y1="14" x2="26" y2="14" stroke="hsl(38 80% 52%)" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
  </svg>
);

// בנייה עצמית - תוכנית אדריכלית מגולגלת עם מצפן
export const SelfBuildIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Rolled blueprint */}
    <rect x="6" y="14" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    {/* Roll curl */}
    <path d="M34 14 C38 14, 40 16, 40 20 C40 24, 38 26, 34 26" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
    <line x1="34" y1="14" x2="34" y2="38" stroke="currentColor" strokeWidth="1.5"/>
    {/* Blueprint grid lines */}
    <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
    <line x1="10" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
    <line x1="10" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
    <line x1="16" y1="14" x2="16" y2="38" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
    <line x1="24" y1="14" x2="24" y2="38" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
    {/* Compass overlay */}
    <circle cx="20" cy="26" r="6" stroke="hsl(38 80% 52%)" strokeWidth="1.2" fill="hsl(38 80% 52%)" fillOpacity="0.1"/>
    <polygon points="20,21.5 18.8,25 21.2,25" fill="hsl(38 80% 52%)" />
    <polygon points="20,30.5 18.8,27 21.2,27" fill="currentColor" opacity="0.3" />
    <circle cx="20" cy="26" r="1.2" fill="hsl(38 80% 52%)" />
  </svg>
);

// שיפוץ - (מחזור משכנתא) חץ מעגלי עם שושנת רוחות
export const RenovationIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Wrench + house combo */}
    <path d="M14 18L24 10L34 18V34C34 35.1 33.1 36 32 36H16C14.9 36 14 35.1 14 34V18Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M12 19L24 9L36 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Wrench icon inside */}
    <path d="M20 24 C18.5 22.5, 18.5 20, 20 18.5 C21 17.5, 22.5 17.5, 23.5 18 L28 22.5 L26.5 24 L22 19.5 C21.5 19, 20.5 19, 20 19.5 C19.5 20, 19.5 21, 20 21.5 L24.5 26 L23 27.5 Z" fill="hsl(38 80% 52%)" opacity="0.8"/>
    <path d="M26 25 L31 30 C31.5 30.5 31.5 31.5 31 32 C30.5 32.5 29.5 32.5 29 32 L24 27 Z" fill="hsl(38 80% 52%)" opacity="0.6"/>
    {/* Compass points around house */}
    <line x1="24" y1="4" x2="24" y2="7" stroke="hsl(38 80% 52%)" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="24" y1="41" x2="24" y2="44" stroke="hsl(38 80% 52%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <line x1="4" y1="24" x2="7" y2="24" stroke="hsl(38 80% 52%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <line x1="41" y1="24" x2="44" y2="24" stroke="hsl(38 80% 52%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

// איחוד הלוואות - מגנט שמושך שטרות/אחוזים
export const LoanConsolidationIcon = ({ size = 26, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    {/* Magnet */}
    <path d="M14 16 C14 10, 20 6, 24 6 C28 6, 34 10, 34 16 L34 28 L29 28 L29 16 C29 13, 27 11, 24 11 C21 11, 19 13, 19 16 L19 28 L14 28 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
    {/* Magnet tips */}
    <rect x="13" y="26" width="7" height="5" rx="1" fill="hsl(38 80% 52%)" opacity="0.7"/>
    <rect x="28" y="26" width="7" height="5" rx="1" fill="hsl(38 80% 52%)" opacity="0.7"/>
    {/* Attracted items - bills & percentages */}
    <text x="10" y="40" fontSize="8" fill="currentColor" opacity="0.5" fontWeight="bold">%</text>
    <text x="30" y="42" fontSize="7" fill="currentColor" opacity="0.4" fontWeight="bold">₪</text>
    <text x="20" y="44" fontSize="7" fill="currentColor" opacity="0.45" fontWeight="bold">%</text>
    {/* Attraction lines */}
    <path d="M13 38 Q16 35, 18 32" stroke="hsl(38 80% 52%)" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2"/>
    <path d="M35 40 Q32 36, 30 33" stroke="hsl(38 80% 52%)" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2"/>
    <path d="M24 44 Q24 40, 24 36" stroke="hsl(38 80% 52%)" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2"/>
  </svg>
);
