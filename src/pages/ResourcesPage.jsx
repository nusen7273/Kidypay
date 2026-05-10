import { useState } from 'react'

const ARTICLES = [
  {
    id: 1, category: 'FSA Guide', readTime: '5 min read',
    title: 'What Is a Dependent Care FSA and How Does It Work?',
    desc: 'A complete guide to Dependent Care Flexible Spending Accounts — who qualifies, how to enroll, and how to maximize your savings.',
    featured: true,
  },
  {
    id: 2, category: 'For Employers', readTime: '4 min read',
    title: 'How to Add Child Care Benefits Without Increasing HR Workload',
    desc: 'Modern platforms make it easy to offer childcare benefits. Here\'s what to look for and how to roll it out smoothly.',
  },
  {
    id: 3, category: 'Savings Tips', readTime: '3 min read',
    title: 'The $5,000 Rule: Maximizing Your FSA This Year',
    desc: 'The IRS allows up to $5,000 per household in pre-tax childcare dollars. Here\'s how to use every penny.',
  },
  {
    id: 4, category: 'Child Care', readTime: '6 min read',
    title: 'Choosing the Right Child Care Provider for Your Family',
    desc: 'From licensed daycares to preschools — a framework for evaluating providers, asking the right questions, and making the best choice.',
  },
  {
    id: 5, category: 'For Employers', readTime: '5 min read',
    title: '5 Ways Child Care Benefits Improve Employee Retention',
    desc: 'The data is clear: companies offering childcare benefits see lower turnover and higher engagement. Here\'s the research.',
  },
  {
    id: 6, category: 'Tax Tips', readTime: '4 min read',
    title: 'FSA vs. Child and Dependent Care Tax Credit: Which Is Better?',
    desc: 'Both can save you money on childcare — but you can\'t always use both. This guide helps you decide which gives you the bigger benefit.',
  },
  {
    id: 7, category: 'Savings Tips', readTime: '3 min read',
    title: 'Backup Care 101: What It Is and How to Use It',
    desc: 'When your regular provider is unavailable, backup care saves the day. Learn how KidyPay makes backup care easy and FSA-eligible.',
  },
]

const CATEGORIES = ['All', 'FSA Guide', 'For Employers', 'Savings Tips', 'Tax Tips', 'Child Care']

const CATEGORY_COLORS = {
  'FSA Guide': 'bg-blue-50 text-blue-600',
  'For Employers': 'bg-purple-50 text-purple-600',
  'Savings Tips': 'bg-green-50 text-green-600',
  'Tax Tips': 'bg-yellow-50 text-yellow-700',
  'Child Care': 'bg-pink-50 text-pink-600',
}

export default function ResourcesPage() {
  const [filter, setFilter] = useState('All')

  const featured = ARTICLES.find(a => a.featured)
  const rest = ARTICLES.filter(a => !a.featured && (filter === 'All' || a.category === filter))

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <span className="text-xs font-bold text-[#2E9E4F] uppercase tracking-widest">Resources</span>
        <h1 className="text-4xl font-extrabold text-[#1B2D5B] mt-2 mb-3">Guides, Tips & Insights</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Everything you need to know about child care benefits, FSAs, and supporting working parents.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Featured article */}
        {featured && (
          <div className="bg-[#1B2D5B] text-white rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <span className="inline-block bg-[#2E9E4F] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Featured</span>
              <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-blue-200`}>{featured.category}</span>
              <h2 className="text-2xl font-extrabold mt-3 mb-3 leading-tight">{featured.title}</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">{featured.desc}</p>
              <div className="flex items-center gap-4">
                <button className="bg-[#2E9E4F] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#257a3f] transition-colors text-sm">
                  Read Article
                </button>
                <span className="text-xs text-blue-300">{featured.readTime}</span>
              </div>
            </div>
            <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">📖</div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                filter === c
                  ? 'bg-[#1B2D5B] text-white border-[#1B2D5B]'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#1B2D5B] hover:text-[#1B2D5B]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map(article => (
            <div key={article.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
              <h3 className="font-bold text-[#1B2D5B] mb-2 leading-snug group-hover:text-[#2E9E4F] transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{article.desc}</p>
              <p className="text-sm font-semibold text-[#2E9E4F] mt-4 hover:underline">Read more →</p>
            </div>
          ))}
        </div>

        {rest.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <div className="text-4xl mb-3">📭</div>
            <p className="font-semibold">No articles in this category yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
