// components/mainpage/pages/ArchivePage.jsx
import React from 'react';
import { Archive } from 'lucide-react';

const ArchivePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
      <div className="w-28 h-28 flex items-center justify-center rounded-full">
        <Archive className="w-16 h-16 text-[#5f6368]" strokeWidth={1} />
      </div>
      <p className="text-[#9aa0a6] mt-6 text-lg">Your archived notes appear here</p>
    </div>
  );
};

export default ArchivePage;