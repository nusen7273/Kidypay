import { useState } from 'react'
import Modal from './Modal'

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) { setError('Please fill in all fields.'); return }
    setError('')
    setLoading(true)
    setTimeout(() => { setLoading(false); setError('Demo mode — no real login yet.') }, 1200)
  }

  return (
    <Modal onClose={onClose}>
      <div className="text-center mb-6">
        <div className="text-3xl mb-2">👋</div>
        <h2 className="text-2xl font-extrabold text-[#1B2D5B]">Welcome back</h2>
        <p className="text-gray-400 text-sm mt-1">Log in to your KidyPay account</p>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            name="email" type="email" value={form.email} onChange={handle}
            placeholder="you@example.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2E9E4F] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
          <input
            name="password" type="password" value={form.password} onChange={handle}
            placeholder="••••••••"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2E9E4F] transition-colors"
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1B2D5B] text-white font-semibold py-3 rounded-xl hover:bg-[#152347] transition-colors disabled:opacity-60"
        >
          {loading ? 'Logging in…' : 'Log In'}
        </button>
      </form>
      <p className="text-center text-sm text-gray-400 mt-4">
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} className="text-[#2E9E4F] font-semibold hover:underline">
          Sign up free
        </button>
      </p>
    </Modal>
  )
}
