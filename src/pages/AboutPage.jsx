import { Link } from 'react-router-dom'

const TEAM = [
  { name: 'Rachel Goldstein', title: 'CEO & Co-Founder', bg: 'bg-[#1B2D5B]', initials: 'RG', bio: 'Former VP at a Fortune 500 HR tech company. Mom of two. Built KidyPay after struggling with her own childcare costs.' },
  { name: 'David Park', title: 'CTO & Co-Founder', bg: 'bg-[#2E9E4F]', initials: 'DP', bio: 'Led engineering at two fintech startups. Passionate about making financial tools accessible to all families.' },
  { name: 'Tanya Brooks', title: 'Head of Partnerships', bg: 'bg-[#E8A020]', initials: 'TB', bio: '10+ years building provider and employer networks in the benefits industry.' },
  { name: 'Marcus Hill', title: 'Head of Product', bg: 'bg-[#7B5EA7]', initials: 'MH', bio: 'Former product lead at a leading benefits administration platform. Dad of three.' },
]

const VALUES = [
  { icon: '❤️', title: 'Family First', desc: 'Every decision we make starts with the question: does this help working parents?' },
  { icon: '🔓', title: 'Transparency', desc: 'No jargon, no hidden fees. We believe benefits should be simple and easy to understand.' },
  { icon: '⚡', title: 'Speed', desc: 'Time matters when you have a child. We build fast tools for busy people.' },
  { icon: '🤝', title: 'Inclusion', desc: 'KidyPay works for every kind of family — across income levels, family structures, and care needs.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1B2D5B] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-6">Our Story</span>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight">We built KidyPay because child care is too important to be complicated</h1>
          <p className="text-blue-200 leading-relaxed text-lg">
            In 2021, our founders — both working parents — discovered that millions of families leave thousands of dollars on the table every year because navigating child care benefits is so hard. KidyPay was born to fix that.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['2021', 'Founded'], ['500+', 'Employers'], ['10,000+', 'Families Helped'], ['$50M+', 'Benefits Managed']].map(([v, l]) => (
            <div key={l}>
              <p className="text-3xl font-extrabold text-[#1B2D5B]">{v}</p>
              <p className="text-sm text-gray-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-[#f0fff5]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">Our Mission</span>
          <blockquote className="text-2xl font-extrabold text-[#1B2D5B] mt-4 leading-snug">
            "Make quality child care accessible and affordable for every working family in America."
          </blockquote>
          <p className="text-gray-500 mt-6 leading-relaxed">
            Child care is one of the largest household expenses for working families — often costing more than rent or college tuition. Pre-tax benefits can meaningfully reduce that burden, but only if employers offer them and families know how to use them. KidyPay bridges that gap.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#E8A020] uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="text-center">
                <div className="w-16 h-16 bg-[#f0f4ff] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#1B2D5B] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">The Team</span>
            <h2 className="text-3xl font-extrabold text-[#1B2D5B] mt-2">Built by parents, for parents</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {TEAM.map(member => (
              <div key={member.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <div className={`w-16 h-16 rounded-2xl ${member.bg} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <p className="font-bold text-[#1B2D5B]">{member.name}</p>
                <p className="text-xs text-[#2E9E4F] font-semibold mb-3">{member.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1B2D5B] py-14 px-6 text-center text-white">
        <h2 className="text-2xl font-extrabold mb-3">Get in touch</h2>
        <p className="text-blue-200 mb-8">Questions? Partnerships? Press? We'd love to hear from you.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@kidypay.com" className="bg-[#2E9E4F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#257a3f] transition-colors">
            hello@kidypay.com
          </a>
          <Link to="/pricing" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
            See Pricing
          </Link>
        </div>
      </section>
    </div>
  )
}
