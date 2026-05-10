import { Link } from 'react-router-dom'

const FEATURES = [
  { icon: '💳', title: 'Pre-Tax Payments', desc: 'Use tax-free dollars to pay for childcare. The average family saves $2,000+ per year.' },
  { icon: '🏫', title: '50,000+ Providers', desc: 'Search and pay any licensed provider — daycare, preschool, after-school, and more.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: 'Set up recurring payments or pay one-time. Manage everything from the dashboard.' },
  { icon: '📱', title: 'Mobile App', desc: 'Check your balance, submit receipts, and find providers from your phone.' },
  { icon: '⚡', title: 'Instant Payments', desc: 'Providers get paid within 1-2 business days. No paper checks, no delays.' },
  { icon: '🔒', title: 'Secure & Compliant', desc: 'Bank-level encryption. IRS-compliant FSA management built right in.' },
]

const HOW = [
  { icon: '📋', step: 'Enroll', desc: 'Your employer sets up KidyPay. You receive an invite and activate your account.' },
  { icon: '💰', step: 'Fund Your FSA', desc: 'Choose how much to contribute pre-tax each paycheck — up to $5,000/year.' },
  { icon: '🏫', step: 'Find a Provider', desc: 'Browse our network or add your existing provider. Most accept FSA directly.' },
  { icon: '✅', step: 'Pay & Save', desc: 'Pay for care directly from your FSA balance. No out-of-pocket then claim — just pay.' },
]

export default function EmployeesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0fff5] to-[#e8f5ee] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#2E9E4F]/10 text-[#2E9E4F] text-xs font-semibold px-3 py-1 rounded-full mb-6">For Employees & Parents</span>
            <h1 className="text-4xl font-extrabold text-[#1B2D5B] leading-tight mb-4">Pay for child care.<br /><span className="text-[#2E9E4F]">Save on taxes.</span></h1>
            <p className="text-gray-600 mb-8 leading-relaxed">KidyPay puts your child care benefits to work — making it easy to pay providers, track spending, and save thousands using pre-tax dollars.</p>
            <div className="flex gap-4">
              <Link to="/providers" className="bg-[#2E9E4F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#257a3f] transition-colors">Find Providers</Link>
              <Link to="/resources" className="border border-[#1B2D5B] text-[#1B2D5B] font-semibold px-6 py-3 rounded-xl hover:bg-[#1B2D5B] hover:text-white transition-colors">FSA Guide</Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <div className="bg-[#1B2D5B] rounded-2xl p-5 text-white mb-4">
              <p className="text-xs opacity-60 mb-1">FSA Balance</p>
              <p className="text-4xl font-extrabold">$4,250</p>
              <div className="mt-3 h-1.5 bg-white/20 rounded-full">
                <div className="h-full bg-[#2E9E4F] rounded-full w-[85%]" />
              </div>
              <p className="text-xs opacity-50 mt-1">$750 used of $5,000</p>
            </div>
            <div className="space-y-3">
              {[['Little Stars Daycare', '-$850', 'May 1'], ['FSA Deposit', '+$416', 'May 1'], ['Happy Tots', '-$120', 'Apr 22']].map(([n, a, d]) => (
                <div key={n} className="flex justify-between items-center py-2 border-b border-gray-50">
                  <div><p className="text-sm font-medium">{n}</p><p className="text-xs text-gray-400">{d}</p></div>
                  <span className={`text-sm font-bold ${a.startsWith('+') ? 'text-[#2E9E4F]' : 'text-gray-700'}`}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#E8A020] uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Start saving in 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {HOW.map((h, i) => (
              <div key={h.step} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="w-16 h-16 bg-[#f0f4ff] rounded-2xl flex items-center justify-center text-2xl">{h.icon}</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2E9E4F] rounded-full text-white text-xs font-bold flex items-center justify-center">{i + 1}</div>
                </div>
                <h3 className="font-bold text-[#1B2D5B] mb-2">{h.step}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">Features</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Everything you need to manage child care</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#1B2D5B] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings calculator teaser */}
      <section className="bg-[#1B2D5B] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">How much could you save?</h2>
          <p className="text-blue-200 mb-3">A family spending $15,000/year on childcare can save up to <span className="text-[#2E9E4F] font-bold">$3,750</span> by using a Dependent Care FSA.</p>
          <p className="text-blue-300 text-sm mb-8">Based on a combined federal + state tax rate of 25%.</p>
          <Link to="/providers" className="inline-block bg-[#2E9E4F] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#257a3f] transition-colors">Find Providers Near You</Link>
        </div>
      </section>
    </div>
  )
}
