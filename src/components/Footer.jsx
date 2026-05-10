import { Link } from 'react-router-dom'
import Logo from './Logo'

const COLS = [
  { title: 'Employers', links: [{ label: 'How it Works', to: '/employers' }, { label: 'Pricing', to: '/pricing' }, { label: 'Integrations', to: '/employers' }] },
  { title: 'Employees', links: [{ label: 'Benefits', to: '/benefits' }, { label: 'Find Care', to: '/providers' }, { label: 'FSA Guide', to: '/resources' }] },
  { title: 'Company', links: [{ label: 'About Us', to: '/about' }, { label: 'Resources', to: '/resources' }, { label: 'Contact', to: '/about' }] },
]

export default function Footer() {
  return (
    <footer className="bg-[#142131] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="mb-3">
            <Logo white height={70} />
          </div>
          <p className="text-sm leading-relaxed">Smart child care payments.<br />Stronger futures.</p>
        </div>
        {COLS.map(col => (
          <div key={col.title}>
            <p className="text-white font-semibold text-sm mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
        <p>© 2026 KidyPay. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
