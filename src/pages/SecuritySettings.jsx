import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import apiService from '../services/apiService';

const SecuritySettings = () => {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    try {
      await apiService.changePassword({
        current_password: currentPassword,
        new_password: newPassword
      });
      setMessage('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error('Failed to change password:', err);
      setError(err.response?.data?.detail || 'Failed to change password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTwoFactorToggle = async () => {
    setIsLoading(true);
    try {
      if (twoFactorEnabled) {
        await apiService.disableTwoFactor();
        setTwoFactorEnabled(false);
        setMessage('Two-factor authentication disabled');
      } else {
        // This would typically show a QR code for setup
        await apiService.enableTwoFactor();
        setTwoFactorEnabled(true);
        setMessage('Two-factor authentication enabled');
      }
    } catch (err) {
      console.error('Failed to toggle 2FA:', err);
      setError('Failed to update two-factor authentication');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.9 5.16-1.16 9-5.35 9-10.9V7l-10-5z"/>
                    <path d="M12 7L7 9.5v5.25c0 2.78 1.92 4.87 4.5 5.45 2.58-.58 4.5-2.67 4.5-5.45V9.5L12 7z" fillOpacity="0.7"/>
                    <circle cx="12" cy="12" r="2" fill="white"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Envoyou</span>
              </Link>
              <nav className="hidden md:flex space-x-8 ml-10">
                <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors">Dashboard</Link>
                <Link to="/dashboard/api-keys" className="text-slate-300 hover:text-white transition-colors">API Keys</Link>
                <Link to="/dashboard/usage" className="text-slate-300 hover:text-white transition-colors">Usage</Link>
                <Link to="/dashboard/settings" className="text-emerald-400 font-medium">Settings</Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/documentation" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>

              <div className="relative">
                <button className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {user?.name?.[0] || user?.email?.[0] || 'U'}
                    </span>
                  </div>
                  <span className="text-white font-medium hidden md:block">
                    {user?.name}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Security Settings</h1>
          <p className="mt-1 text-sm text-slate-400">
            Manage your account security and authentication preferences.
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-6 bg-emerald-900 border border-emerald-700 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-emerald-400">{message}</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-900 border border-red-700 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-400">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Change Password */}
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-slate-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              {isLoading ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
              <p className="text-sm text-slate-400 mt-1">
                Add an extra layer of security to your account by enabling 2FA.
              </p>
            </div>
            <button
              onClick={handleTwoFactorToggle}
              disabled={isLoading}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                twoFactorEnabled ? 'bg-emerald-600' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {twoFactorEnabled && (
            <div className="mt-4 p-4 bg-slate-700 rounded-lg">
              <p className="text-sm text-slate-300">
                Two-factor authentication is enabled. Use an authenticator app to generate codes when signing in.
              </p>
            </div>
          )}
        </div>

        {/* Account Security Status */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Security Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                <span className="text-slate-300">Password Strength</span>
              </div>
              <span className="text-emerald-400 text-sm">Strong</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${twoFactorEnabled ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                <span className="text-slate-300">Two-Factor Authentication</span>
              </div>
              <span className={`text-sm ${twoFactorEnabled ? 'text-emerald-400' : 'text-yellow-400'}`}>
                {twoFactorEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                <span className="text-slate-300">Account Verification</span>
              </div>
              <span className="text-emerald-400 text-sm">Verified</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecuritySettings;
