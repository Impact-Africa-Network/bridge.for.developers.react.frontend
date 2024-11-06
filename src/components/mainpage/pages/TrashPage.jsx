// components/mainpage/pages/TrashPage.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';

const TrashPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
      <div className="w-28 h-28 flex items-center justify-center rounded-full">
        <Trash2 className="w-16 h-16 text-[#5f6368]" strokeWidth={1} />
      </div>
      <p className="text-[#9aa0a6] mt-6 text-lg">No notes in Trash</p>
      <p className="text-[#9aa0a6] mt-2 text-sm italic">Notes in Trash are deleted after 7 days.</p>
    </div>
  );
};

export default TrashPage;