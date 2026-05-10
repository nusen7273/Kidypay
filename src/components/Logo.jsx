export default function Logo({ white = false, size = 1 }) {
  const textColor = white ? '#FFFFFF' : '#1B2D5B'
  const h = 44 * size

  return (
    <svg
      width={h * 4.2}
      height={h}
      viewBox="0 0 185 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KidyPay"
    >
      {/* "KidyPa" text */}
      <text
        y="38"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="40"
        fill={textColor}
        letterSpacing="-1"
      >
        KidyPa
      </text>

      {/* Person figure replacing the "y" */}
      {/* Green dollar circle (head) */}
      <circle cx="172" cy="9" r="9" fill="#2E9E4F" />
      <text
        x="172"
        y="14"
        textAnchor="middle"
        fill="white"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="11"
      >
        $
      </text>

      {/* Left arm */}
      <line x1="162" y1="22" x2="170" y2="31" stroke={textColor} strokeWidth="3.5" strokeLinecap="round" />
      {/* Right arm */}
      <line x1="182" y1="22" x2="174" y2="31" stroke={textColor} strokeWidth="3.5" strokeLinecap="round" />
      {/* Body going down */}
      <line x1="172" y1="31" x2="172" y2="44" stroke={textColor} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}
