// components/mainpage/pages/TrashPage.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { useSidebar } from '../../../context/SidebarContext';
import ErrorAlert from '../../ui/ErrorAlert';
import NoteCard from './NoteCard';

const TrashPage = () => {
  const { notes, isLoading, error } = useSidebar();
  const hasNotes = notes?.length > 0;

  return (
    <div className="p-4">
      {error && <ErrorAlert message={error} />}
      
      {hasNotes && (
        <div className="bg-[#202124] border border-[#5f6368] rounded-lg p-4 mb-4">
          <p className="text-[#e2e2e3] text-sm">
            Notes in Trash are deleted after 7 days
          </p>
        </div>
      )}
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <LoadingSpinner size="large" />
          <p className="text-[#9aa0a6] mt-4">Loading trash...</p>
        </div>
      ) : !hasNotes ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="w-28 h-28 flex items-center justify-center rounded-full">
            <Trash2 className="w-16 h-16 text-[#5f6368]" strokeWidth={1} />
          </div>
          <p className="text-[#9aa0a6] mt-6 text-lg">No notes in Trash</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((note) => (
            <NoteCard 
              key={note.id} 
              note={note} 
              isTrashView
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TrashPage;