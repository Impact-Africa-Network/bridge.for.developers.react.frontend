// components/mainpage/pages/NotesPage.jsx
import React from 'react';
import { LightbulbIcon } from 'lucide-react';
import { useSidebar } from '../../../context/SidebarContext';
import NoteCreation from '../components/NoteCreation';

const NotesPage = () => {
  const { notes } = useSidebar();
  const hasNotes = notes.notes.length > 0;

  return (
    <div className="p-4">
      <NoteCreation />
      
      {!hasNotes && (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-300px)]">
          <div className="w-28 h-28 flex items-center justify-center rounded-full">
            <LightbulbIcon className="w-16 h-16 text-[#5f6368]" strokeWidth={1} />
          </div>
          <p className="text-[#9aa0a6] mt-6 text-lg">Notes you add appear here</p>
        </div>
      )}
    </div>
  );
};

export default NotesPage;