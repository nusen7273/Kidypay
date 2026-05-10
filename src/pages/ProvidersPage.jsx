import { useState } from 'react'
import { useApp } from '../context/AppContext'

const TYPES = ['All', 'Daycare', 'Preschool', 'Childcare', 'After-School']

function Stars({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-xs ${i < Math.round(rating) ? 'text-[#E8A020]' : 'text-gray-200'}`}>★</span>
      ))}
    </span>
  )
}

export default function ProvidersPage() {
  const { providers } = useApp()
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [fsaOnly, setFsaOnly] = useState(false)

  const filtered = providers.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.address.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'All' || p.type === typeFilter
    const matchFsa = !fsaOnly || p.accepts_fsa
    return matchSearch && matchType && matchFsa
  })

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <div className="bg-[#1B2D5B] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-3">Find Child Care Providers</h1>
          <p className="text-blue-200 mb-8">Browse 50,000+ licensed providers. Pay directly with your KidyPay FSA.</p>
          <div className="relative max-w-xl mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search by name or location…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl text-gray-800 text-sm outline-none shadow-lg focus:ring-2 focus:ring-[#2E9E4F]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex gap-1 bg-white rounded-xl p-1 border border-gray-100 shadow-sm">
            {TYPES.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  typeFilter === t ? 'bg-[#1B2D5B] text-white' : 'text-gray-500 hover:text-[#1B2D5B]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button
            onClick={() => setFsaOnly(o => !o)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
              fsaOnly ? 'bg-[#2E9E4F] text-white border-[#2E9E4F]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#2E9E4F]'
            }`}
          >
            <span>💳</span> FSA Accepted Only
          </button>
          <span className="text-sm text-gray-400 ml-auto">{filtered.length} providers found</span>
        </div>

        {/* Provider cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map(p => (
            <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#f0f4ff] rounded-2xl flex items-center justify-center text-2xl">🏫</div>
                  <div>
                    <h3 className="font-bold text-[#1B2D5B]">{p.name}</h3>
                    <p className="text-xs text-gray-400">{p.type}</p>
                  </div>
                </div>
                {p.accepts_fsa && (
                  <span className="text-xs font-semibold bg-green-50 text-green-600 px-2.5 py-1 rounded-full">FSA ✓</span>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-3">📍 {p.address}</p>
              <div className="flex items-center gap-2 mb-4">
                <Stars rating={p.rating} />
                <span className="text-sm font-bold text-[#1B2D5B]">{p.rating}</span>
                <span className="text-xs text-gray-400">({p.reviews} reviews)</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-gray-500">
                <span>👶 Ages: {p.ages}</span>
                <span>💰 {p.price}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 text-sm font-semibold bg-[#2E9E4F] text-white py-2.5 rounded-xl hover:bg-[#257a3f] transition-colors">
                  Add to My Providers
                </button>
                <button className="text-sm font-semibold border border-gray-200 px-4 py-2.5 rounded-xl hover:border-gray-400 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="md:col-span-2 text-center py-16 text-gray-400">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-semibold">No providers found</p>
              <p className="text-sm">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
