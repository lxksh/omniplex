'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 border border-gray-700">
        <div className="text-center">
          <CheckCircleIcon className="mx-auto h-20 w-20 text-green-400 mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-gray-300 mb-6">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
          {sessionId && (
            <div className="bg-gray-700 p-4 rounded-lg mb-6 border border-gray-600">
              <p className="text-sm text-gray-400">Session ID:</p>
              <p className="text-xs text-gray-300 break-all">{sessionId}</p>
            </div>
          )}
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}