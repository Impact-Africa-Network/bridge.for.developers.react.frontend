// components/ui/ErrorAlert.jsx
import React from 'react';
import { AlertCircle, X } from 'lucide-react';

const ErrorAlert = ({ message, onDismiss }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-[#3c1c1c] border border-[#5f3636] rounded-lg shadow-lg max-w-md z-50">
      <div className="p-4 flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-[#ff5252] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-[#ff5252] text-sm">{message}</p>
        </div>
        {onDismiss && (
          <button 
            onClick={onDismiss}
            className="p-1 hover:bg-[#4c2626] rounded-full"
          >
            <X className="w-4 h-4 text-[#ff5252]" />
          </button>
        )}
      </div>
    </div>
  );
};


export default ErrorAlert;