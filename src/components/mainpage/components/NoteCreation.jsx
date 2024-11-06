import React, { useState } from 'react';
import { 
  Check, 
  PencilLine, 
  Image, 
  Bell,
  Users,
  Clock,
  Plus,
  MoreVertical,
  Undo,
  Redo,
  Pin
} from 'lucide-react';

const NoteCreation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClose = () => {
    if (title.trim() || content.trim()) {
      // Save note logic here
    }
    setIsExpanded(false);
    setTitle('');
    setContent('');
  };

  if (!isExpanded) {
    return (
      <div className="max-w-[600px] mx-auto mt-8">
        <div 
          onClick={() => setIsExpanded(true)}
          className="bg-[#202124] border border-[#5f6368] rounded-lg hover:bg-[#28292c] cursor-text"
        >
          <div className="px-4 py-3 text-[#e2e2e3] flex items-center justify-between">
            <span className="text-[#9aa0a6]">Take a note...</span>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-[#35363a] rounded-full">
                <Check className="w-5 h-5 text-[#9aa0a6]" />
              </button>
              <button className="p-2 hover:bg-[#35363a] rounded-full">
                <PencilLine className="w-5 h-5 text-[#9aa0a6]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto mt-8">
      <div className="bg-[#202124] border border-[#5f6368] rounded-lg shadow-lg">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 pt-3 bg-transparent border-none focus:outline-none text-[#e2e2e3]"
        />

        {/* Content */}
        <textarea
          placeholder="Take a note..."
          value={content}
          autoFocus
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-[#e2e2e3] min-h-[100px] resize-none"
        />

        {/* Actions */}
        <div className="px-4 py-2 flex items-center justify-between border-t border-[#5f6368]">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Bell className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Users className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Clock className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Plus className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <MoreVertical className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Undo className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Redo className="w-4 h-4 text-[#9aa0a6]" />
            </button>
          </div>
          <button 
            onClick={handleClose}
            className="px-6 py-1.5 text-[#e2e2e3] hover:bg-[#35363a] rounded-md text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCreation;