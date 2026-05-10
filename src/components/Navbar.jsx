import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { useApp } from '../context/AppContext'

const PUBLIC_NAV = [
  { label: 'Employers', to: '/employers' },
  { label: 'Employees', to: '/employees' },
  { label: 'Benefits', to: '/benefits' },
  { label: 'Resources', to: '/resources' },
  { label: 'About Us', to: '/about' },
]

export default function Navbar({ onLogin, onSignup }) {
  const { user, logout } = useApp()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isEmployer = user?.role === 'Employer / HR'
  const dashboardPath = isEmployer ? '/dashboard/employer' : '/dashboard/employee'

  const employerNav = [
    { label: 'Dashboard', to: '/dashboard/employer' },
    { label: 'Employees', to: '/dashboard/employer/employees' },
    { label: 'Payments', to: '/dashboard/employer/payments' },
    { label: 'Find Providers', to: '/providers' },
  ]

  const employeeNav = [
    { label: 'Dashboard', to: '/dashboard/employee' },
    { label: 'Providers', to: '/providers' },
    { label: 'Resources', to: '/resources' },
  ]

  const navLinks = user ? (isEmployer ? employerNav : employeeNav) : PUBLIC_NAV

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to={user ? dashboardPath : '/'}>
          <Logo height={60} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-[#2E9E4F] font-semibold'
                  : 'text-gray-600 hover:text-[#1B2D5B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1B2D5B] flex items-center justify-center text-white text-xs font-bold">
                  {user.name?.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <span className="text-sm font-semibold text-[#1B2D5B]">{user.name?.split(' ')[0]}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-gray-500 border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onLogin}
                className="text-sm font-semibold text-[#1B2D5B] border border-[#1B2D5B] px-4 py-2 rounded-lg hover:bg-[#1B2D5B] hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={onSignup}
                className="text-sm font-semibold bg-[#2E9E4F] text-white px-4 py-2 rounded-lg hover:bg-[#257a3f] transition-colors"
              >
                Get Started
              </button>
            </>
          )}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden ml-2 text-gray-600"
            onClick={() => setMenuOpen(o => !o)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#2E9E4F]"
            >
              {link.label}
            </Link>
          ))}
          {!user && (
            <div className="flex gap-3 pt-2">
              <button onClick={() => { setMenuOpen(false); onLogin?.() }} className="text-sm font-semibold text-[#1B2D5B] border border-[#1B2D5B] px-4 py-2 rounded-lg">Login</button>
              <button onClick={() => { setMenuOpen(false); onSignup?.() }} className="text-sm font-semibold bg-[#2E9E4F] text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>
          )}
          {user && (
            <button onClick={handleLogout} className="text-sm font-semibold text-red-500">Log Out</button>
          )}
        </div>
      )}
    </nav>
  )
}
