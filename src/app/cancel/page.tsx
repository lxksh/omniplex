export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
          <p className="text-gray-600 mb-6">Your payment was cancelled. No charges have been made to your account.</p>
          <a href="/" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
}