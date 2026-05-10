import { Link } from 'react-router-dom'

const STEPS = [
  { n: '01', title: 'Sign up your company', desc: 'Create your employer account in minutes. No paperwork, no waiting.' },
  { n: '02', title: 'Invite your employees', desc: 'Send invites via email. Employees activate their account and set up their FSA.' },
  { n: '03', title: 'Employees pay for care', desc: 'Employees use their KidyPay card or portal to pay any provider in the network.' },
  { n: '04', title: 'You save too', desc: 'Employer FICA contributions are reduced on every pre-tax dollar employees contribute.' },
]

const BENEFITS = [
  { icon: '🎯', title: 'Attract Top Talent', desc: 'Child care benefits rank among the top requested perks for working parents. Stand out from competitors.' },
  { icon: '🔒', title: 'Boost Retention', desc: 'Companies offering childcare benefits see up to 34% better employee retention rates.' },
  { icon: '💼', title: 'Payroll Integration', desc: 'Connects with ADP, Gusto, Rippling, and more. Setup takes under 30 minutes.' },
  { icon: '📊', title: 'Real-Time Analytics', desc: 'Monitor utilization, compliance, and employee engagement from one dashboard.' },
  { icon: '💰', title: 'Tax Savings', desc: 'Save up to 7.65% in FICA taxes on every pre-tax dollar your employees contribute.' },
  { icon: '⚖️', title: 'Compliance Built-In', desc: 'KidyPay handles IRS reporting, nondiscrimination testing, and annual plan documents.' },
]

export default function EmployersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B2D5B] to-[#2a4080] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-6">For Employers & HR Teams</span>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">The child care benefit your employees are asking for</h1>
            <p className="text-blue-100 mb-8 leading-relaxed">KidyPay makes it simple to offer Dependent Care FSA benefits — with zero administrative headache. Attract talent, reduce turnover, and save on payroll taxes.</p>
            <div className="flex gap-4">
              <Link to="/pricing" className="bg-[#2E9E4F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#257a3f] transition-colors">
                See Pricing
              </Link>
              <Link to="/about" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Talk to Sales
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['34%', 'Better retention'], ['7.65%', 'FICA tax savings'], ['30 min', 'Setup time'], ['98%', 'Satisfaction rate']].map(([val, label]) => (
              <div key={label} className="bg-white/10 rounded-2xl p-5 text-center">
                <p className="text-3xl font-extrabold text-[#2E9E4F]">{val}</p>
                <p className="text-xs text-blue-200 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#E8A020] uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Up and running in 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map(step => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 bg-[#f0f4ff] rounded-2xl flex items-center justify-center text-2xl font-extrabold text-[#1B2D5B] mx-auto mb-4">{step.n}</div>
                <h3 className="font-bold text-[#1B2D5B] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">Why KidyPay</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Everything you need to support working parents</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map(b => (
              <div key={b.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-[#1B2D5B] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2E9E4F] py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">Ready to support your team?</h2>
        <p className="text-green-100 mb-8 max-w-xl mx-auto">Join 500+ employers already offering KidyPay. Set up takes less than 30 minutes.</p>
        <Link to="/pricing" className="inline-block bg-white text-[#2E9E4F] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-colors">
          Get Started Free
        </Link>
      </section>
    </div>
  )
}
