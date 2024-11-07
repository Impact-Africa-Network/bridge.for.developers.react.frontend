// components/ui/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div className="h-full w-full border-4 border-[#5f6368] border-t-[#e2e2e3] rounded-full" />
    </div>
  );
};

export default LoadingSpinner;