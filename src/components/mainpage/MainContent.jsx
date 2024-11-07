// components/MainContent.jsx
import React from 'react';
import NotesPage from './pages/NotesPage';
import RemindersPage from './pages/RemindersPage';
import TrashPage from './pages/TrashPage';
import ArchivePage from './pages/ArchivePage';
import { useSidebar } from '../../context/SidebarContext';
import EditLabelsModal from './modals/EditLabelsModal';


const MainContent = () => {
  const { activeView, isLabelModalOpen, closeLabelModal } = useSidebar();

  const renderPage = () => {
    switch (activeView) {
      case 'notes':
        return <NotesPage />;
      case 'reminders':
        return <RemindersPage />;
      case 'archive':
        return <ArchivePage />;
      case 'trash':
        return <TrashPage />;
      default:
        return <NotesPage />;
    }
  };

  return (
    <>
      {renderPage()}
      <EditLabelsModal isOpen={isLabelModalOpen} onClose={closeLabelModal} />
    </>
  );
};

export default MainContent;