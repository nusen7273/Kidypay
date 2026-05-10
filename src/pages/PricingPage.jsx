const PLANS = [
  {
    name: 'Starter',
    price: '$15',
    unit: 'per employee / mo',
    desc: 'Perfect for small businesses getting started with child care benefits.',
    color: 'bg-white border-gray-200',
    button: 'bg-[#1B2D5B] text-white hover:bg-[#152347]',
    badge: null,
    features: [
      'Up to 50 employees',
      'Dependent Care FSA',
      'Employee self-service portal',
      'Provider network access (10K+)',
      'Basic reporting',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$12',
    unit: 'per employee / mo',
    desc: 'For growing companies that want the full KidyPay experience.',
    color: 'bg-[#1B2D5B] border-[#1B2D5B]',
    button: 'bg-[#2E9E4F] text-white hover:bg-[#257a3f]',
    badge: 'Most Popular',
    features: [
      'Up to 200 employees',
      'Everything in Starter',
      'Backup care coordination',
      'Automated reimbursements',
      'Provider network (50K+)',
      'Advanced analytics',
      'Priority support',
    ],
    textColor: 'text-white',
    subColor: 'text-blue-200',
    featColor: 'text-blue-100',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'pricing',
    desc: 'For large organizations with complex benefits and compliance needs.',
    color: 'bg-white border-gray-200',
    button: 'bg-[#1B2D5B] text-white hover:bg-[#152347]',
    badge: null,
    features: [
      'Unlimited employees',
      'Everything in Growth',
      'Custom integrations (HRIS, payroll)',
      'Dedicated account manager',
      'SLA & compliance reporting',
      'White-label options',
      '24/7 premium support',
    ],
  },
]

const FAQS = [
  { q: 'How does the FSA work?', a: 'Employees set aside pre-tax dollars into their KidyPay FSA account. Those funds can be used to pay for eligible childcare expenses directly through the platform.' },
  { q: 'Is there a setup fee?', a: 'No setup fees. You only pay the per-employee monthly rate based on your plan. Billing starts when employees activate their accounts.' },
  { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.' },
  { q: 'What childcare expenses are eligible?', a: 'Licensed daycare centers, preschools, after-school programs, summer day camps, and in-home care for children under 13.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f5ee] py-16 px-6 text-center">
        <span className="inline-block bg-[#2E9E4F]/10 text-[#2E9E4F] text-xs font-semibold px-3 py-1 rounded-full mb-4">Transparent Pricing</span>
        <h1 className="text-4xl font-extrabold text-[#1B2D5B] mb-4">Simple, per-employee pricing</h1>
        <p className="text-gray-500 max-w-xl mx-auto">No hidden fees. No long-term contracts. Just great child care benefits your employees will love.</p>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PLANS.map(plan => (
            <div key={plan.name} className={`rounded-3xl border p-8 flex flex-col ${plan.color} relative`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2E9E4F] text-white text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</span>
                </div>
              )}
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.textColor || 'text-[#2E9E4F]'}`}>{plan.name}</p>
              <div className="mb-1">
                <span className={`text-4xl font-extrabold ${plan.textColor || 'text-[#1B2D5B]'}`}>{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.subColor || 'text-gray-400'}`}>{plan.unit}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.subColor || 'text-gray-500'}`}>{plan.desc}</p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${plan.featColor || 'text-gray-600'}`}>
                    <span className={`mt-0.5 font-bold ${plan.textColor ? 'text-[#2E9E4F]' : 'text-[#2E9E4F]'}`}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${plan.button}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1B2D5B] text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <p className="font-bold text-[#1B2D5B] mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
