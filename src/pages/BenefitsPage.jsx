import { Link } from 'react-router-dom'

const BENEFIT_TYPES = [
  {
    icon: '💳',
    title: 'Dependent Care FSA',
    tag: 'Most Popular',
    tagColor: 'bg-[#2E9E4F] text-white',
    desc: 'Set aside up to $5,000 per year in pre-tax dollars for eligible child care expenses. Reduces your taxable income immediately.',
    details: ['Tax-free childcare payments', 'Up to $5,000/year ($2,500 if married filing separately)', 'Eligible expenses: daycare, preschool, after-school, summer day camp', 'Use it or lose it — plan carefully'],
  },
  {
    icon: '🏥',
    title: 'Backup Care',
    tag: 'Add-On',
    tagColor: 'bg-[#E8A020] text-white',
    desc: 'When your regular provider is unavailable — sick days, school closures, or holidays — backup care keeps you covered.',
    details: ['Access to 500+ backup care centers', 'In-home care options available', 'Book same-day or in advance', 'Pay directly from your FSA'],
  },
  {
    icon: '🏫',
    title: 'Provider Network Access',
    tag: 'Included',
    tagColor: 'bg-blue-100 text-blue-600',
    desc: 'Search and pay from a network of 50,000+ licensed providers nationwide. All accept KidyPay FSA directly.',
    details: ['50,000+ licensed providers', 'Verified and background-checked', 'Direct FSA payments — no reimbursements', 'Provider ratings and reviews'],
  },
  {
    icon: '📊',
    title: 'Self-Service Portal',
    tag: 'Included',
    tagColor: 'bg-blue-100 text-blue-600',
    desc: 'Manage your FSA balance, view transactions, add providers, and download tax statements — all in one place.',
    details: ['Real-time balance updates', 'Transaction history & receipts', 'Downloadable annual tax statement', 'Mobile-friendly dashboard'],
  },
]

export default function BenefitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ee] py-16 px-6 text-center">
        <span className="inline-block bg-[#2E9E4F]/10 text-[#2E9E4F] text-xs font-semibold px-3 py-1 rounded-full mb-4">Employee Benefits</span>
        <h1 className="text-4xl font-extrabold text-[#1B2D5B] mb-4">Your complete child care benefits package</h1>
        <p className="text-gray-500 max-w-xl mx-auto">KidyPay brings together FSA management, provider access, and backup care into one seamless platform.</p>
      </section>

      {/* Benefit types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {BENEFIT_TYPES.map((b, i) => (
              <div key={b.title} className={`rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#f0f4ff] rounded-3xl flex items-center justify-center text-4xl">
                    {b.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-xl font-extrabold text-[#1B2D5B]">{b.title}</h2>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${b.tagColor}`}>{b.tag}</span>
                  </div>
                  <p className="text-gray-500 mb-4 leading-relaxed">{b.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {b.details.map(d => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#2E9E4F] font-bold mt-0.5">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-[#1B2D5B] mb-4">Who is eligible?</h2>
          <p className="text-gray-500 mb-8">A Dependent Care FSA is available to employees whose employers offer it. The IRS requires:</p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { icon: '👶', title: 'Child under 13', desc: 'Dependents must be under age 13 at the time of care.' },
              { icon: '👨‍👩‍👧', title: 'Both parents work', desc: 'Or one parent is a full-time student or disabled.' },
              { icon: '🏫', title: 'Licensed provider', desc: 'The care provider must be a licensed or certified facility.' },
            ].map(e => (
              <div key={e.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="text-2xl mb-2">{e.icon}</div>
                <p className="font-bold text-[#1B2D5B] mb-1">{e.title}</p>
                <p className="text-sm text-gray-500">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2D5B] py-14 px-6 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">Start using your benefits today</h2>
        <p className="text-blue-200 mb-8">Ask your HR team to set up KidyPay, or share this page with them.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/providers" className="bg-[#2E9E4F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#257a3f] transition-colors">Find Providers</Link>
          <Link to="/resources" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">Read FSA Guide</Link>
        </div>
      </section>
    </div>
  )
}
