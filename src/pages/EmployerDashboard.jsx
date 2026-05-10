import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

function StatCard({ label, value, sub, color, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${color}`}>{sub}</span>
      </div>
      <p className="text-2xl font-extrabold text-[#1B2D5B]">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  )
}

const STATUS_COLORS = { Active: 'bg-green-100 text-green-700', Pending: 'bg-yellow-100 text-yellow-700' }

export default function EmployerDashboard() {
  const { user, employer } = useApp()
  const [tab, setTab] = useState('overview')

  if (!employer) return null

  const fmt = (n) => n < 0
    ? `-$${Math.abs(n).toLocaleString()}`
    : `+$${n.toLocaleString()}`

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1B2D5B]">Employer Dashboard</h1>
            <p className="text-sm text-gray-500 mt-0.5">{employer.company} · Welcome back, {user?.name?.split(' ')[0]}</p>
          </div>
          <div className="flex gap-3">
            <Link to="/providers" className="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-xl hover:border-[#2E9E4F] hover:text-[#2E9E4F] transition-colors">
              Find Providers
            </Link>
            <button className="text-sm font-semibold bg-[#2E9E4F] text-white px-4 py-2 rounded-xl hover:bg-[#257a3f] transition-colors">
              + Add Employee
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-gray-100 shadow-sm w-fit mb-8">
          {['overview', 'employees', 'payments'].map(t => (
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
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatCard label="Employees Enrolled" value={`${employer.enrolled}/${employer.totalEmployees}`} sub="Active" color="bg-green-100 text-green-700" icon="👥" />
              <StatCard label="Total Benefits Paid" value={`$${(employer.totalPaid / 1000).toFixed(0)}K`} sub="YTD 2026" color="bg-blue-100 text-blue-700" icon="💳" />
              <StatCard label="Utilization Rate" value={`${employer.utilizationRate}%`} sub="+5% vs last yr" color="bg-purple-100 text-purple-700" icon="📊" />
              <StatCard label="Company Tax Savings" value={`$${(employer.ytdSavings / 1000).toFixed(1)}K`} sub="YTD" color="bg-yellow-100 text-yellow-700" icon="💰" />
            </div>

            {/* Two columns: recent transactions + quick actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="font-bold text-[#1B2D5B]">Recent Transactions</h3>
                  <button onClick={() => setTab('payments')} className="text-xs text-[#2E9E4F] font-semibold hover:underline">View all</button>
                </div>
                <div className="divide-y divide-gray-50">
                  {employer.transactions.map(tx => (
                    <div key={tx.id} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${tx.type === 'deposit' ? 'bg-green-50' : 'bg-blue-50'}`}>
                          {tx.type === 'deposit' ? '💰' : '📤'}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{tx.provider}</p>
                          <p className="text-xs text-gray-400">{tx.employee} · {tx.date}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-bold ${tx.amount > 0 ? 'text-[#2E9E4F]' : 'text-gray-700'}`}>
                        {fmt(tx.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {/* Plan summary */}
                <div className="bg-[#1B2D5B] text-white rounded-2xl p-6">
                  <p className="text-xs opacity-60 mb-1">Current Plan</p>
                  <p className="text-xl font-extrabold mb-1">Growth</p>
                  <p className="text-xs opacity-60">{employer.enrolled} employees · $12/mo each</p>
                  <div className="mt-4 h-1.5 bg-white/20 rounded-full">
                    <div className="h-full bg-[#2E9E4F] rounded-full" style={{ width: `${(employer.enrolled / employer.totalEmployees) * 100}%` }} />
                  </div>
                  <p className="text-xs opacity-60 mt-2">{employer.enrolled} of {employer.totalEmployees} employees enrolled</p>
                </div>

                {/* Quick actions */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
                  <p className="text-sm font-bold text-[#1B2D5B]">Quick Actions</p>
                  {[
                    { label: 'Download Report', icon: '📄' },
                    { label: 'Invite Employees', icon: '✉️' },
                    { label: 'Manage Plan', icon: '⚙️' },
                    { label: 'Contact Support', icon: '💬' },
                  ].map(a => (
                    <button key={a.label} className="w-full flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#2E9E4F] transition-colors">
                      <span className="text-base">{a.icon}</span> {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === 'employees' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-[#1B2D5B]">Enrolled Employees ({employer.employees.length})</h3>
              <button className="text-sm font-semibold bg-[#2E9E4F] text-white px-4 py-2 rounded-xl hover:bg-[#257a3f] transition-colors">
                + Add Employee
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">Employee</th>
                    <th className="px-6 py-3 text-left">Plan</th>
                    <th className="px-6 py-3 text-right">FSA Balance</th>
                    <th className="px-6 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {employer.employees.map(emp => (
                    <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#1B2D5B]/10 flex items-center justify-center text-xs font-bold text-[#1B2D5B]">
                            {emp.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{emp.name}</p>
                            <p className="text-xs text-gray-400">{emp.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{emp.plan}</td>
                      <td className="px-6 py-4 text-right font-semibold text-[#1B2D5B]">${emp.balance.toLocaleString()}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[emp.status]}`}>
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'payments' && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-[#1B2D5B]">All Transactions</h3>
              <button className="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-xl hover:border-[#2E9E4F] transition-colors">
                Export CSV
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {employer.transactions.map(tx => (
                <div key={tx.id} className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base ${tx.type === 'deposit' ? 'bg-green-50' : 'bg-blue-50'}`}>
                      {tx.type === 'deposit' ? '💰' : '📤'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{tx.provider}</p>
                      <p className="text-xs text-gray-400">{tx.employee} · {tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${tx.amount > 0 ? 'text-[#2E9E4F]' : 'text-gray-800'}`}>{fmt(tx.amount)}</p>
                    <p className={`text-xs capitalize font-medium ${tx.type === 'deposit' ? 'text-green-500' : 'text-blue-500'}`}>{tx.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
