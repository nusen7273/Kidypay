import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoReset from './components/DemoReset'
import LoginModal from './components/LoginModal'
import SignupModal from './components/SignupModal'

import Landing from './pages/Landing'
import EmployersPage from './pages/EmployersPage'
import EmployeesPage from './pages/EmployeesPage'
import BenefitsPage from './pages/BenefitsPage'
import ResourcesPage from './pages/ResourcesPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import ProvidersPage from './pages/ProvidersPage'
import EmployerDashboard from './pages/EmployerDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'

function ProtectedRoute({ children, requiredRole }) {
  const { user } = useApp()
  if (!user) return <Navigate to="/" replace />
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={user.role === 'Employer / HR' ? '/dashboard/employer' : '/dashboard/employee'} replace />
  }
  return children
}

function AppShell() {
  const [modal, setModal] = useState(null)

  return (
    <div className="min-h-screen text-[#1B2D5B]">
      {modal === 'login' && (
        <LoginModal onClose={() => setModal(null)} onSwitchToSignup={() => setModal('signup')} />
      )}
      {modal === 'signup' && (
        <SignupModal onClose={() => setModal(null)} onSwitchToLogin={() => setModal('login')} />
      )}

      <Navbar onLogin={() => setModal('login')} onSignup={() => setModal('signup')} />

      <Routes>
        <Route path="/" element={<Landing onSignup={() => setModal('signup')} />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route
          path="/dashboard/employer"
          element={<ProtectedRoute requiredRole="Employer / HR"><EmployerDashboard /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/employer/*"
          element={<ProtectedRoute requiredRole="Employer / HR"><EmployerDashboard /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/employee"
          element={<ProtectedRoute><EmployeeDashboard /></ProtectedRoute>}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <DemoReset />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppShell />
      </AppProvider>
    </BrowserRouter>
  )
}
