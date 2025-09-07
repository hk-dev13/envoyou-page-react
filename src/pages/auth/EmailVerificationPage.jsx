import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import apiService from '../../services/apiService';

const EmailVerificationPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Token verifikasi tidak valid');
        return;
      }

      try {
        // Call the API to verify email
        const response = await apiService.verifyEmail({ token });

        if (response.message === 'Email verified successfully') {
          setStatus('success');
          setMessage('Email berhasil diverifikasi! Anda sekarang dapat login ke akun Anda.');
        } else {
          throw new Error('Verifikasi gagal');
        }
      } catch (error) {
        console.error('Email verification error:', error);
        setStatus('error');
        setMessage('Link verifikasi tidak valid atau sudah kadaluarsa. Silakan coba lagi atau minta email verifikasi baru.');
      }
    };

    verifyEmail();
  }, [token]);

  const handleResendVerification = async () => {
    // This would need to be implemented - for now just show a message
    setMessage('Fitur kirim ulang email verifikasi akan segera hadir.');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Status Icon */}
        <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center">
          {status === 'verifying' && (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
          )}
          {status === 'success' && (
            <div className="bg-green-600 rounded-full p-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-600 rounded-full p-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {status === 'verifying' && 'Memverifikasi Email...'}
            {status === 'success' && '🎉 Email Berhasil Diverifikasi!'}
            {status === 'error' && 'Verifikasi Gagal'}
          </h2>
          <p className="text-slate-400">
            {status === 'verifying' && 'Mohon tunggu sebentar...'}
            {status === 'success' && 'Selamat! Akun Anda telah aktif.'}
            {status === 'error' && 'Terjadi kesalahan dalam verifikasi email.'}
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className={`p-4 rounded-lg ${
            status === 'success'
              ? 'bg-green-900/50 border border-green-500 text-green-200'
              : status === 'error'
              ? 'bg-red-900/50 border border-red-500 text-red-200'
              : 'bg-slate-800/50 border border-slate-700 text-slate-300'
          }`}>
            <p className="text-sm">{message}</p>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-4">
          {status === 'success' && (
            <Link
              to="/auth/login"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center"
            >
              Login Sekarang
            </Link>
          )}

          {status === 'error' && (
            <div className="space-y-3">
              <button
                onClick={handleResendVerification}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Kirim Ulang Email Verifikasi
              </button>
              <Link
                to="/auth/login"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center"
              >
                Kembali ke Login
              </Link>
            </div>
          )}

          {status === 'verifying' && (
            <div className="text-sm text-slate-400">
              <p>Sedang memproses verifikasi email Anda...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-500">
          <p>
            Butuh bantuan?{' '}
            <Link to="/contact" className="text-emerald-400 hover:text-emerald-300">
              Hubungi kami
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
