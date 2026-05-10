import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <div className="text-5xl mb-4">💳</div>
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">KidyPay</h1>
        <p className="text-gray-500 mb-8">Manage payments for your kids programs</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-indigo-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-indigo-700">$0</p>
            <p className="text-sm text-gray-500">Total Paid</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-green-600">$0</p>
            <p className="text-sm text-gray-500">Balance Due</p>
          </div>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors">
          Make a Payment
        </button>
      </div>
    </div>
  )
}
