// context/SidebarContext.js
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeView, setActiveView] = useState('notes');
  const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);
  const [labels, setLabels] = useState([]);
  const [notes, setNotes] = useState({
    notes: [],
    reminders: [],
    archive: [],
    trash: []
  });

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  
  const openLabelModal = () => setIsLabelModalOpen(true);
  const closeLabelModal = () => setIsLabelModalOpen(false);
  
  const addLabel = (label) => {
    setLabels([...labels, label]);
  };

  const removeLabel = (labelId) => {
    setLabels(labels.filter(label => label.id !== labelId));
  };

  // Note management functions
  const addNote = (note, view = 'notes') => {
    setNotes(prev => ({
      ...prev,
      [view]: [note, ...prev[view]]
    }));
  };

  const moveNote = (noteId, fromView, toView) => {
    setNotes(prev => {
      const note = prev[fromView].find(n => n.id === noteId);
      return {
        ...prev,
        [fromView]: prev[fromView].filter(n => n.id !== noteId),
        [toView]: [note, ...prev[toView]]
      };
    });
  };

  return (
    <SidebarContext.Provider value={{
      isExpanded,
      toggleSidebar,
      activeView,
      setActiveView,
      isLabelModalOpen,
      openLabelModal,
      closeLabelModal,
      labels,
      addLabel,
      removeLabel,
      notes,
      addNote,
      moveNote
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};