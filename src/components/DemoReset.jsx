import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function DemoReset() {
  const { resetDemo } = useApp()
  const navigate = useNavigate()
  const [confirm, setConfirm] = useState(false)

  const handleReset = () => {
    resetDemo()
    setConfirm(false)
    navigate('/')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {confirm && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4 w-64 text-center">
          <p className="text-sm font-semibold text-[#1B2D5B] mb-1">Reset Demo?</p>
          <p className="text-xs text-gray-400 mb-3">Logs you out and restores all data to its original state.</p>
          <div className="flex gap-2">
            <button
              onClick={() => setConfirm(false)}
              className="flex-1 text-xs font-semibold border border-gray-200 py-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="flex-1 text-xs font-semibold bg-[#1B2D5B] text-white py-2 rounded-xl hover:bg-[#152347] transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setConfirm(o => !o)}
        className="flex items-center gap-2 bg-white border border-gray-200 shadow-lg px-4 py-2.5 rounded-full text-xs font-semibold text-gray-600 hover:border-[#1B2D5B] hover:text-[#1B2D5B] transition-all"
      >
        <span>🔄</span>
        <span>Restore Demo</span>
      </button>
    </div>
  )
}
