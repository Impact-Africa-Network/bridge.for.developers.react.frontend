// components/mainpage/pages/NotesPage.jsx
import React from 'react';
import { LightbulbIcon } from 'lucide-react';
import { useSidebar } from '../../../context/SidebarContext';
import NoteCreation from '../components/NoteCreation';
import NoteCard from './NoteCard';

const NotesPage = () => {
  const { notes, isLoading } = useSidebar();
  const hasNotes = notes?.length > 0;

  return (
    <div className="p-4">
      <NoteCreation />
      
      {isLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-300px)]">
          <div className="text-[#e2e2e3]">Loading...</div>
        </div>
      ) : !hasNotes ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-300px)]">
          <div className="w-28 h-28 flex items-center justify-center rounded-full">
            <LightbulbIcon className="w-16 h-16 text-[#5f6368]" strokeWidth={1} />
          </div>
          <p className="text-[#9aa0a6] mt-6 text-lg">Notes you add appear here</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesPage;