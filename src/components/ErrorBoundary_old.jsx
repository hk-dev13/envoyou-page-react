import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console (in production, you might want to send to error reporting service)
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        import React from 'react';
import logger from '../services/logger';
import { APP_CONFIG } from '../config';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to our logging service
    const errorId = logger.errorBoundary(error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
      errorId,
    });

    // In production, send to external error reporting
    if (!APP_CONFIG.isDevelopment) {
      this.reportToCrashlytics(error, errorInfo, errorId);
    }
  }

  reportToCrashlytics(error, errorInfo, errorId) {
    // This would integrate with external crash reporting services
    console.error('Error reported to crash analytics:', {
      errorId,
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });
  }

  handleRetry = () => {
    logger.info('User clicked retry on error boundary', {
      errorId: this.state.errorId,
    });
    
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    });
  };

  handleReload = () => {
    logger.info('User clicked reload on error boundary', {
      errorId: this.state.errorId,
    });
    
    window.location.reload();
  };

  exportErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      error: {
        name: this.state.error?.name,
        message: this.state.error?.message,
        stack: this.state.error?.stack,
      },
      errorInfo: this.state.errorInfo,
      userAgent: navigator.userAgent,
      url: window.location.href,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };

    const dataStr = JSON.stringify(errorDetails, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `error-report-${this.state.errorId}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    
    logger.info('Error details exported', { errorId: this.state.errorId });
  };

  render() {
    if (this.state.hasError) {
      const isProduction = !APP_CONFIG.isDevelopment;
      
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                {/* Error Icon */}
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Oops! Something went wrong
                </h1>
                
                <p className="text-gray-600 mb-6">
                  {isProduction
                    ? "We've encountered an unexpected error. Our team has been notified and we're working to fix it."
                    : "An error occurred while rendering this component. Check the console for more details."
                  }
                </p>

                {!isProduction && this.state.error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 text-left">
                    <h3 className="text-sm font-medium text-red-800 mb-2">
                      Error Details (Development Mode)
                    </h3>
                    <p className="text-sm text-red-700 font-mono mb-2">
                      {this.state.error.name}: {this.state.error.message}
                    </p>
                    {this.state.errorId && (
                      <p className="text-xs text-red-600">
                        Error ID: {this.state.errorId}
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={this.handleRetry}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Try Again
                  </button>
                  
                  <button
                    onClick={this.handleReload}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Reload Page
                  </button>

                  {!isProduction && (
                    <button
                      onClick={this.exportErrorDetails}
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Export Error Details
                    </button>
                  )}
                </div>

                {/* Contact Info for Production */}
                {isProduction && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      If this problem persists, please{' '}
                      <a
                        href="/contact"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        contact our support team
                      </a>
                      {this.state.errorId && (
                        <>
                          {' '}and reference error ID: {' '}
                          <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                            {this.state.errorId}
                          </code>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
