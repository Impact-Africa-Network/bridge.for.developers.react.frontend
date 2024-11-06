// components/mainpage/pages/ArchivePage.jsx
import React from 'react';
import { Archive } from 'lucide-react';
import { useSidebar } from '../../../context/SidebarContext';
import NoteCard from './NoteCard';
import ErrorAlert from '../../ui/ErrorAlert';
import LoadingSpinner from '../../ui/LoadingSpinner';

const ArchivePage = () => {
  const { notes, isLoading, error } = useSidebar();
  const hasNotes = notes?.length > 0;

  return (
    <div className="p-4">
      {error && <ErrorAlert message={error} />}
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <LoadingSpinner size="large" />
          <p className="text-[#9aa0a6] mt-4">Loading archived notes...</p>
        </div>
      ) : !hasNotes ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="w-28 h-28 flex items-center justify-center rounded-full">
            <Archive className="w-16 h-16 text-[#5f6368]" strokeWidth={1} />
          </div>
          <p className="text-[#9aa0a6] mt-6 text-lg">Your archived notes appear here</p>
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

export default ArchivePage;