import { useState } from 'react'
import Modal from './Modal'

const ROLES = ['Employer / HR', 'Employee / Parent', 'Other']

export default function SignupModal({ onClose, onSwitchToLogin }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', role: '', company: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const next = (e) => {
    e.preventDefault()
    if (step === 1) { if (form.name && form.email && form.role) setStep(2) }
    else {
      setLoading(true)
      setTimeout(() => { setLoading(false); setDone(true) }, 1400)
    }
  }

  if (done) return (
    <Modal onClose={onClose}>
      <div className="text-center py-6">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-extrabold text-[#1B2D5B] mb-2">You're all set!</h2>
        <p className="text-gray-500 text-sm mb-6">Welcome to KidyPay, {form.name.split(' ')[0]}. Check your email to verify your account.</p>
        <button onClick={onClose} className="bg-[#2E9E4F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#257a3f] transition-colors">
          Done
        </button>
      </div>
    </Modal>
  )

  return (
    <Modal onClose={onClose}>
      <div className="text-center mb-6">
        <div className="text-3xl mb-2">🚀</div>
        <h2 className="text-2xl font-extrabold text-[#1B2D5B]">Create your account</h2>
        <p className="text-gray-400 text-sm mt-1">Step {step} of 2</p>
        <div className="flex gap-2 justify-center mt-3">
          {[1,2].map(s => (
            <div key={s} className={`h-1.5 w-12 rounded-full transition-colors ${s <= step ? 'bg-[#2E9E4F]' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>

      <form onSubmit={next} className="space-y-4">
        {step === 1 ? (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Jane Smith"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2E9E4F] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Work Email</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="jane@company.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2E9E4F] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">I am a…</label>
              <div className="grid grid-cols-3 gap-2">
                {ROLES.map(r => (
                  <button key={r} type="button" onClick={() => setForm(f => ({ ...f, role: r }))}
                    className={`border rounded-xl py-2 text-xs font-semibold transition-colors ${form.role === r ? 'border-[#2E9E4F] bg-[#2E9E4F]/10 text-[#2E9E4F]' : 'border-gray-200 text-gray-500 hover:border-[#2E9E4F]'}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                {form.role === 'Employer / HR' ? 'Company Name' : 'Organization'}
              </label>
              <input name="company" value={form.company} onChange={handle} placeholder="Acme Inc."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2E9E4F] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Create Password</label>
              <input name="password" type="password" value={form.password} onChange={handle} placeholder="Min. 8 characters"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2E9E4F] transition-colors" />
            </div>
          </>
        )}

        <button type="submit" disabled={loading}
          className="w-full bg-[#2E9E4F] text-white font-semibold py-3 rounded-xl hover:bg-[#257a3f] transition-colors disabled:opacity-60">
          {loading ? 'Creating account…' : step === 1 ? 'Continue →' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-4">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-[#2E9E4F] font-semibold hover:underline">Log in</button>
      </p>
    </Modal>
  )
}
