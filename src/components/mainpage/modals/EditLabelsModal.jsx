// components/modals/EditLabelsModal.jsx
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const EditLabelsModal = ({ isOpen, onClose }) => {
  const [newLabel, setNewLabel] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-20 z-50">
      <div className="bg-[#202124] border border-[#5f6368] rounded-lg w-[300px] shadow-lg">
        <div className="p-4">
          <h2 className="text-[#e2e2e3] text-lg mb-4">Edit labels</h2>
          
          <div className="flex items-center  mb-4">
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <X className="w-4 h-4 text-[#9aa0a6]" />
            </button>
            <input
              type="text"
              placeholder="Create new label"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none text-[#e2e2e3] text-sm"
            />
            <button className="p-2 hover:bg-[#35363a] rounded-full">
              <Check className="w-4 h-4 text-[#9aa0a6]" />
            </button>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 text-[#e2e2e3] hover:bg-[#35363a] rounded-md text-sm"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLabelsModal;