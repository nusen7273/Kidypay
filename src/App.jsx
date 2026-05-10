import { useState } from 'react'
import './index.css'
import Logo from './components/Logo'
import LoginModal from './components/LoginModal'
import SignupModal from './components/SignupModal'

const NAV_LINKS = ['Employers', 'Employees', 'Employee Benefits', 'Resources', 'About Us']

const STATS = [
  { value: '$5,000', label: 'Avg. annual savings' },
  { value: '500+', label: 'Employers enrolled' },
  { value: '10k+', label: 'Families supported' },
  { value: '98%', label: 'Satisfaction rate' },
]

const EMPLOYER_FEATURES = [
  { icon: '🎯', text: 'Attract top talent with family-friendly benefits' },
  { icon: '🔒', text: 'Retain employees by reducing childcare stress' },
  { icon: '💼', text: 'Easy payroll integration and tax savings' },
  { icon: '📊', text: 'Real-time reporting and compliance tools' },
]

const EMPLOYEE_FEATURES = [
  { icon: '💳', text: 'Pay for childcare directly from your benefits' },
  { icon: '📅', text: 'Flexible scheduling and payment options' },
  { icon: '🏫', text: 'Access to 50,000+ care providers nationwide' },
  { icon: '📱', text: 'Manage everything from the mobile app' },
]

const PLATFORM_FEATURES = [
  'Dependent Care FSA management',
  'Backup care coordination',
  'Provider network access',
  'Automated reimbursements',
  'Employee self-service portal',
  'Employer dashboard & analytics',
]

const TESTIMONIALS = [
  {
    quote: 'KidyPay transformed how we support working parents. Employee retention improved by 34% in the first year.',
    name: 'Sarah M.',
    title: 'HR Director, TechCorp',
    initials: 'SM',
    color: 'bg-[#1B2D5B]',
  },
  {
    quote: 'Finally, a childcare benefit that actually works. I saved over $4,800 last year using pre-tax dollars.',
    name: 'James L.',
    title: 'Software Engineer & Parent',
    initials: 'JL',
    color: 'bg-[#2E9E4F]',
  },
  {
    quote: 'The platform is incredibly easy to set up. Our whole benefits package feels more competitive now.',
    name: 'Maria R.',
    title: 'People Operations, StartupCo',
    initials: 'MR',
    color: 'bg-[#E8A020]',
  },
]

const SECTION_IDS = {
  'Employers': 'employers',
  'Employees': 'employees',
  'Employee Benefits': 'platform',
  'Resources': 'testimonials',
  'About Us': 'cta',
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  const [modal, setModal] = useState(null) // 'login' | 'signup' | null

  return (
    <div className="min-h-screen text-[#1B2D5B]">
      {modal === 'login' && (
        <LoginModal onClose={() => setModal(null)} onSwitchToSignup={() => setModal('signup')} />
      )}
      {modal === 'signup' && (
        <SignupModal onClose={() => setModal(null)} onSwitchToLogin={() => setModal('login')} />
      )}

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Logo height={70} />
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(SECTION_IDS[link])}
                className="text-sm font-medium text-gray-600 hover:text-[#1B2D5B] transition-colors">
                {link}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setModal('login')}
              className="text-sm font-semibold text-[#1B2D5B] border border-[#1B2D5B] px-4 py-2 rounded-lg hover:bg-[#1B2D5B] hover:text-white transition-colors">
              Login
            </button>
            <button onClick={() => setModal('signup')}
              className="text-sm font-semibold bg-[#2E9E4F] text-white px-4 py-2 rounded-lg hover:bg-[#257a3f] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ee] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#2E9E4F]/10 text-[#2E9E4F] text-xs font-semibold px-3 py-1 rounded-full mb-6">
              #1 Child Care Benefits Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2D5B] leading-tight mb-4">
              Smart child care<br />payments.<br />
              <span className="text-[#2E9E4F]">Stronger futures.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              KidyPay simplifies child care payments and benefits for employers and families — saving time, reducing stress, and building a better future for working parents.
            </p>
            <div className="flex gap-4 mb-12">
              <button onClick={() => setModal('signup')}
                className="bg-[#2E9E4F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#257a3f] transition-colors">
                Get Started Free
              </button>
              <button onClick={() => scrollTo('employers')}
                className="border border-[#1B2D5B] text-[#1B2D5B] font-semibold px-6 py-3 rounded-xl hover:bg-[#1B2D5B] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <p className="text-xl font-extrabold text-[#1B2D5B]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-80 bg-[#1B2D5B] rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👩‍👧</div>
                <p className="text-sm opacity-70">Working parents supported</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2E9E4F]/10 rounded-full flex items-center justify-center text-lg">💰</div>
              <div>
                <p className="text-xs text-gray-500">Avg. annual savings</p>
                <p className="text-lg font-extrabold text-[#1B2D5B]">$5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers / For Employees */}
      <section id="employers" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#f0f4ff] rounded-3xl p-8">
            <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">For Employers</span>
            <h2 className="text-2xl font-extrabold text-[#1B2D5B] mt-2 mb-2">Attract. Retain. Support.</h2>
            <p className="text-gray-500 mb-6">Offer the benefit that matters most to working parents and stand out in today's competitive job market.</p>
            <ul className="space-y-4">
              {EMPLOYER_FEATURES.map(f => (
                <li key={f.text} className="flex items-start gap-3">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-sm text-gray-600">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f0fff5] rounded-3xl p-8">
            <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">For Employees & Parents</span>
            <h2 className="text-2xl font-extrabold text-[#1B2D5B] mt-2 mb-2">More Support. Less Stress.</h2>
            <p className="text-gray-500 mb-6">Use pre-tax dollars to pay for childcare and get access to the nation's largest care network.</p>
            <ul className="space-y-4">
              {EMPLOYEE_FEATURES.map(f => (
                <li key={f.text} className="flex items-start gap-3">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-sm text-gray-600">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Everything in one place */}
      <section id="platform" className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-[#E8A020] uppercase tracking-widest">Platform</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2 mb-4">Everything you need,<br />all in one place.</h2>
            <p className="text-gray-500 mb-8">From enrollment to reimbursement, KidyPay handles every step of the childcare benefits journey.</p>
            <ul className="space-y-3">
              {PLATFORM_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2E9E4F] flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-sm font-medium text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => setModal('signup')}
              className="mt-8 bg-[#1B2D5B] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#152347] transition-colors">
              See the Platform
            </button>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <div className="bg-[#1B2D5B] rounded-2xl p-4 mb-4 text-white">
              <p className="text-xs opacity-60 mb-1">KidyPay Dashboard</p>
              <p className="text-2xl font-extrabold">$4,250.00</p>
              <p className="text-xs opacity-60">Available balance</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[['Payments', '$12,400', '📤'], ['Savings', '$5,000', '💰'], ['Providers', '12', '🏫']].map(([label, val, icon]) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{icon}</div>
                  <p className="text-sm font-bold text-[#1B2D5B]">{val}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[['Little Stars Daycare', '-$850.00', 'May 1'], ['KidyPay FSA Deposit', '+$416.67', 'May 1'], ['Happy Kids Center', '-$600.00', 'Apr 15']].map(([name, amt, date]) => (
                <div key={name} className="flex items-center justify-between py-2 border-b border-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{name}</p>
                    <p className="text-xs text-gray-400">{date}</p>
                  </div>
                  <span className={`text-sm font-bold ${amt.startsWith('+') ? 'text-[#2E9E4F]' : 'text-gray-700'}`}>{amt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Loved by employers and families</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#E8A020] text-sm">★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1B2D5B]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta" className="bg-[#1B2D5B] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to build stronger futures?</h2>
          <p className="text-blue-200 mb-8">Join hundreds of employers and thousands of families who trust KidyPay for smarter childcare benefits.</p>
          <button onClick={() => setModal('signup')}
            className="bg-[#2E9E4F] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#257a3f] transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#142131] text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="mb-3">
              <Logo white height={80} />
            </div>
            <p className="text-sm leading-relaxed">Smart child care payments.<br />Stronger futures.</p>
          </div>
          {[
            { title: 'Employers', links: ['How it Works', 'Pricing', 'Integrations'] },
            { title: 'Employees', links: ['Benefits', 'Find Care', 'FSA Guide'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Contact'] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-white font-semibold text-sm mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map(l => <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>)}
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

    </div>
  )
}
