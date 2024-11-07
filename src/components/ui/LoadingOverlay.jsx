// components/ui/LoadingOverlay.jsx
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 bg-[#202124] bg-opacity-80 flex items-center justify-center z-50">
      <LoadingSpinner size="large" />
    </div>
  );
};


export default LoadingOverlay;