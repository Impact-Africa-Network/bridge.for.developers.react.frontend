// components/mainpage/components/NoteCard.jsx
import React from 'react';
import { Archive, Trash2, Bell, Image, MoreVertical } from 'lucide-react';
import { useSidebar } from '../../../context/SidebarContext';

const NoteCard = ({ note }) => {
  const { toggleArchive, toggleTrash } = useSidebar();

  return (
    <div className="bg-[#202124] border border-[#5f6368] rounded-lg hover:shadow-md group">
      {/* Note Content */}
      <div className="p-4">
        {note.title && (
          <h3 className="text-[#e2e2e3] text-base font-medium mb-2">{note.title}</h3>
        )}
        <p className="text-[#e2e2e3] text-sm whitespace-pre-wrap break-words">
          {note.content}
        </p>
      </div>

      {/* Note Actions */}
      <div className="px-2 py-2 border-t border-[#5f6368] opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-start space-x-1">
          <button 
            className="p-2 hover:bg-[#35363a] rounded-full"
            title="Remind me"
          >
            <Bell className="w-4 h-4 text-[#9aa0a6]" />
          </button>
          <button 
            className="p-2 hover:bg-[#35363a] rounded-full"
            title="Add image"
          >
            <Image className="w-4 h-4 text-[#9aa0a6]" />
          </button>
          <button 
            className="p-2 hover:bg-[#35363a] rounded-full"
            title="Archive"
            onClick={() => toggleArchive(note.id)}
          >
            <Archive className="w-4 h-4 text-[#9aa0a6]" />
          </button>
          <button 
            className="p-2 hover:bg-[#35363a] rounded-full"
            title="More"
          >
            <MoreVertical className="w-4 h-4 text-[#9aa0a6]" />
          </button>
          <button 
            className="p-2 hover:bg-[#35363a] rounded-full"
            title="Delete"
            onClick={() => toggleTrash(note.id)}
          >
            <Trash2 className="w-4 h-4 text-[#9aa0a6]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;