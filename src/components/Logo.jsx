export default function Logo({ white = false, size = 1 }) {
  const textColor = white ? '#FFFFFF' : '#1B2D5B'
  const figureColor = '#E8A020'
  const scale = size
  const w = 198 * scale
  const h = 44 * scale

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 198 44"
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

      {/* Green dollar circle — sits above the figure like a head */}
      <circle cx="178" cy="5" r="9" fill="#2E9E4F" />
      <text
        x="178"
        y="10"
        textAnchor="middle"
        fill="white"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="11"
      >
        $
      </text>

      {/* Gold person figure — arms raised wide in a Y shape */}
      {/* Left arm: from junction up-left */}
      <line x1="178" y1="24" x2="163" y2="13" stroke={figureColor} strokeWidth="4" strokeLinecap="round" />
      {/* Right arm: from junction up-right */}
      <line x1="178" y1="24" x2="193" y2="13" stroke={figureColor} strokeWidth="4" strokeLinecap="round" />
      {/* Body: straight down from junction */}
      <line x1="178" y1="24" x2="178" y2="44" stroke={figureColor} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
