import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const CATEGORY_COLORS = {
  Childcare: 'bg-blue-50 text-blue-600',
  Deposit: 'bg-green-50 text-green-600',
  'Backup Care': 'bg-purple-50 text-purple-600',
}

export default function EmployeeDashboard() {
  const { user, employee } = useApp()
  const [tab, setTab] = useState('overview')

  if (!employee) return null

  const pct = Math.round((employee.annualAllocation - employee.fsaBalance) / employee.annualAllocation * 100)

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1B2D5B]">My KidyPay</h1>
            <p className="text-sm text-gray-500 mt-0.5">Welcome back, {user?.name?.split(' ')[0]}</p>
          </div>
          <Link to="/providers" className="text-sm font-semibold bg-[#2E9E4F] text-white px-4 py-2 rounded-xl hover:bg-[#257a3f] transition-colors">
            Find Providers
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-gray-100 shadow-sm w-fit mb-8">
          {['overview', 'transactions', 'providers'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
                tab === t ? 'bg-[#1B2D5B] text-white' : 'text-gray-500 hover:text-[#1B2D5B]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div className="space-y-6">
            {/* Balance card */}
            <div className="bg-[#1B2D5B] text-white rounded-3xl p-8">
              <p className="text-sm opacity-60 mb-1">FSA Available Balance</p>
              <p className="text-5xl font-extrabold mb-2">${employee.fsaBalance.toLocaleString()}</p>
              <p className="text-sm opacity-60 mb-6">of ${employee.annualAllocation.toLocaleString()} annual allocation</p>
              <div className="h-2 bg-white/20 rounded-full mb-2">
                <div className="h-full bg-[#2E9E4F] rounded-full transition-all" style={{ width: `${100 - pct}%` }} />
              </div>
              <p className="text-xs opacity-50">{pct}% used this year</p>
            </div>

            {/* Two cols */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Next payment */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <p className="text-xs font-bold text-[#E8A020] uppercase tracking-widest mb-3">Upcoming Payment</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold text-gray-800">{employee.nextPayment.provider}</p>
                    <p className="text-xs text-gray-400">{employee.nextPayment.date}</p>
                  </div>
                  <p className="text-xl font-extrabold text-[#1B2D5B]">${employee.nextPayment.amount}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 text-xs font-semibold bg-[#2E9E4F] text-white py-2.5 rounded-xl hover:bg-[#257a3f] transition-colors">
                    Pay Now
                  </button>
                  <button className="flex-1 text-xs font-semibold border border-gray-200 py-2.5 rounded-xl hover:border-gray-400 transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <p className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest mb-3">My Children</p>
                {employee.children.map(child => (
                  <div key={child.name} className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#f0f4ff] rounded-2xl flex items-center justify-center text-2xl">👧</div>
                    <div>
                      <p className="font-bold text-gray-800">{child.name}</p>
                      <p className="text-xs text-gray-400">Age {child.age} · {child.provider}</p>
                    </div>
                  </div>
                ))}
                <button className="w-full text-xs font-semibold border border-dashed border-gray-200 py-2.5 rounded-xl text-gray-400 hover:border-[#2E9E4F] hover:text-[#2E9E4F] transition-colors">
                  + Add Child
                </button>
              </div>
            </div>

            {/* Recent transactions preview */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-[#1B2D5B]">Recent Activity</h3>
                <button onClick={() => setTab('transactions')} className="text-xs text-[#2E9E4F] font-semibold hover:underline">See all</button>
              </div>
              {employee.transactions.slice(0, 3).map(tx => (
                <div key={tx.id} className="px-6 py-4 flex items-center justify-between border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${CATEGORY_COLORS[tx.category] || 'bg-gray-50 text-gray-500'}`}>
                      {tx.type === 'deposit' ? '↑' : '↓'}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{tx.name}</p>
                      <p className="text-xs text-gray-400">{tx.date} · {tx.category}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${tx.amount > 0 ? 'text-[#2E9E4F]' : 'text-gray-700'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'transactions' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-[#1B2D5B]">Transaction History</h3>
              <button className="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-xl hover:border-[#2E9E4F] transition-colors">Download Statement</button>
            </div>
            <div className="divide-y divide-gray-50">
              {employee.transactions.map(tx => (
                <div key={tx.id} className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${CATEGORY_COLORS[tx.category] || 'bg-gray-50 text-gray-500'}`}>
                      {tx.type === 'deposit' ? '↑' : '↓'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{tx.name}</p>
                      <p className="text-xs text-gray-400">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${tx.amount > 0 ? 'text-[#2E9E4F]' : 'text-gray-800'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toLocaleString()}
                    </p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[tx.category] || 'bg-gray-100 text-gray-500'}`}>
                      {tx.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'providers' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest mb-4">My Providers</p>
              {employee.providers.map(name => (
                <div key={name} className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1B2D5B]/10 rounded-xl flex items-center justify-center text-base">🏫</div>
                    <div>
                      <p className="font-semibold text-gray-800">{name}</p>
                      <p className="text-xs text-green-600 font-medium">FSA Accepted</p>
                    </div>
                  </div>
                  <button className="text-xs font-semibold text-[#2E9E4F] border border-[#2E9E4F] px-3 py-1.5 rounded-lg hover:bg-[#2E9E4F] hover:text-white transition-colors">Pay</button>
                </div>
              ))}
            </div>
            <Link
              to="/providers"
              className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-200 rounded-2xl py-5 text-sm font-semibold text-gray-400 hover:border-[#2E9E4F] hover:text-[#2E9E4F] transition-colors"
            >
              <span>+</span> Find & Add a Provider
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
