export default function Logo({ white = false, height = 40 }) {
  return (
    <img
      src={white ? '/logo-dark.png' : '/logo-light.png'}
      alt="KidyPay"
      style={{ height, width: 'auto', objectFit: 'contain', display: 'block' }}
    />
  )
}
