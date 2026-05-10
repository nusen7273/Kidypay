import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const DEMO_USERS = [
  { id: 1, email: 'hr@techcorp.com', password: 'demo123', name: 'Sarah Mitchell', role: 'Employer / HR', company: 'TechCorp' },
  { id: 2, email: 'jane@example.com', password: 'demo123', name: 'Jane Smith', role: 'Employee / Parent', company: 'TechCorp' },
]

export const INITIAL_STATE = {
  user: null,
  employer: {
    company: 'TechCorp',
    totalEmployees: 127,
    enrolled: 94,
    totalPaid: 482000,
    ytdSavings: 28900,
    utilizationRate: 73,
    employees: [
      { id: 1, name: 'Jane Smith', email: 'jane@example.com', plan: 'FSA Basic', balance: 4250, status: 'Active' },
      { id: 2, name: 'Mark Johnson', email: 'mark@techcorp.com', plan: 'FSA Premium', balance: 8100, status: 'Active' },
      { id: 3, name: 'Lisa Chen', email: 'lisa@techcorp.com', plan: 'FSA Basic', balance: 1200, status: 'Active' },
      { id: 4, name: 'Robert Davis', email: 'robert@techcorp.com', plan: 'FSA Premium', balance: 6500, status: 'Pending' },
      { id: 5, name: 'Amy Wilson', email: 'amy@techcorp.com', plan: 'FSA Basic', balance: 3100, status: 'Active' },
    ],
    transactions: [
      { id: 1, employee: 'Jane Smith', provider: 'Little Stars Daycare', amount: -850, date: 'May 1, 2026', type: 'payment' },
      { id: 2, employee: 'Mark Johnson', provider: 'Happy Kids Center', amount: -1200, date: 'May 1, 2026', type: 'payment' },
      { id: 3, employee: 'All Employees', provider: 'FSA Monthly Deposit', amount: 5208.35, date: 'May 1, 2026', type: 'deposit' },
      { id: 4, employee: 'Lisa Chen', provider: 'Sunshine Learning', amount: -600, date: 'Apr 28, 2026', type: 'payment' },
      { id: 5, employee: 'Amy Wilson', provider: 'Bright Futures Academy', amount: -1500, date: 'Apr 15, 2026', type: 'payment' },
    ],
  },
  employee: {
    fsaBalance: 4250,
    annualAllocation: 5000,
    ytdSpent: 750,
    nextPayment: { amount: 850, date: 'Jun 1, 2026', provider: 'Little Stars Daycare' },
    transactions: [
      { id: 1, name: 'Little Stars Daycare', amount: -850, date: 'May 1, 2026', type: 'payment', category: 'Childcare' },
      { id: 2, name: 'KidyPay FSA Deposit', amount: 416.67, date: 'May 1, 2026', type: 'deposit', category: 'Deposit' },
      { id: 3, name: 'Happy Tots Backup Care', amount: -120, date: 'Apr 22, 2026', type: 'payment', category: 'Backup Care' },
      { id: 4, name: 'KidyPay FSA Deposit', amount: 416.67, date: 'Apr 1, 2026', type: 'deposit', category: 'Deposit' },
      { id: 5, name: 'Little Stars Daycare', amount: -850, date: 'Apr 1, 2026', type: 'payment', category: 'Childcare' },
    ],
    children: [{ name: 'Emma Smith', age: 3, provider: 'Little Stars Daycare' }],
    providers: ['Little Stars Daycare'],
  },
  providers: [
    { id: 1, name: 'Little Stars Daycare', type: 'Daycare', address: '123 Maple St, New York, NY', rating: 4.9, reviews: 128, price: '$850/mo', ages: '6 weeks – 5 years', accepts_fsa: true },
    { id: 2, name: 'Happy Kids Center', type: 'Preschool', address: '456 Oak Ave, Brooklyn, NY', rating: 4.7, reviews: 89, price: '$1,200/mo', ages: '2 – 5 years', accepts_fsa: true },
    { id: 3, name: 'Sunshine Learning', type: 'Childcare', address: '789 Pine Rd, Queens, NY', rating: 4.6, reviews: 64, price: '$600/mo', ages: '1 – 4 years', accepts_fsa: true },
    { id: 4, name: 'Bright Futures Academy', type: 'Preschool', address: '321 Elm St, Manhattan, NY', rating: 4.8, reviews: 201, price: '$1,500/mo', ages: '18 months – 5 years', accepts_fsa: true },
    { id: 5, name: 'Little Explorers', type: 'Daycare', address: '654 Birch Ln, Bronx, NY', rating: 4.5, reviews: 43, price: '$780/mo', ages: '3 months – 3 years', accepts_fsa: true },
    { id: 6, name: 'Creative Minds Center', type: 'After-School', address: '987 Cedar Dr, Staten Island, NY', rating: 4.4, reviews: 37, price: '$450/mo', ages: '5 – 12 years', accepts_fsa: false },
  ],
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem('kidypay_user')
      if (saved) {
        const user = JSON.parse(saved)
        return { ...INITIAL_STATE, user }
      }
    } catch {}
    return INITIAL_STATE
  })

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('kidypay_user', JSON.stringify(state.user))
    } else {
      localStorage.removeItem('kidypay_user')
    }
  }, [state.user])

  const login = useCallback((email, password) => {
    const user = DEMO_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!user) return { success: false, error: 'Invalid credentials. Try hr@techcorp.com / demo123 or jane@example.com / demo123' }
    setState(s => ({ ...s, user }))
    return { success: true, user }
  }, [])

  const signup = useCallback((formData) => {
    const newUser = { id: Date.now(), ...formData }
    setState(s => ({ ...s, user: newUser }))
    return { success: true, user: newUser }
  }, [])

  const logout = useCallback(() => setState(s => ({ ...s, user: null })), [])

  const resetDemo = useCallback(() => {
    localStorage.removeItem('kidypay_user')
    setState(INITIAL_STATE)
  }, [])

  return (
    <AppContext.Provider value={{
      user: state.user,
      employer: state.employer,
      employee: state.employee,
      providers: state.providers,
      login,
      signup,
      logout,
      resetDemo,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
