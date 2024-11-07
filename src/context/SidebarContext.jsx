// context/SidebarContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { loadFromStorage, saveToStorage } from '../utils/localStorage';

const MOCK_API = {
  GET_NOTES: 'https://run.mocky.io/v3/ad64777a-cfd5-45dd-a22f-bd3da50d190a',
  // GET_ARCHIVED: 'https://run.mocky.io/v3/your-archived-endpoint',
  // GET_TRASH: 'https://run.mocky.io/v3/your-trash-endpoint',
  POST_NOTE: 'https://run.mocky.io/v3/3e0ffe9e-c7ba-4ad1-a6aa-4b649dc240b1'
};

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeView, setActiveView] = useState('notes');
  const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);
  const [labels, setLabels] = useState([]);
  const [notes, setNotes] = useState(() => loadFromStorage());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const openLabelModal = () => setIsLabelModalOpen(true);
  const closeLabelModal = () => setIsLabelModalOpen(false);
  const addLabel = (label) => {
    setLabels([...labels, label]);
  };

  const removeLabel = (labelId) => {
    setLabels(labels.filter(label => label.id !== labelId));
  };

  // Save notes to localStorage whenever they change
  useEffect(() => {
    saveToStorage(notes);
  }, [notes]);

  const getFilteredNotes = () => {
    return notes.filter(note => {
      switch (activeView) {
        case 'trash':
          return note.is_trashed;
        case 'archive':
          return note.is_archived && !note.is_trashed;
        default:
          return !note.is_archived && !note.is_trashed;
      }
    });
  };

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // For initial data only if localStorage is empty
      if (notes.length === 0) {
        const response = await fetch(MOCK_API.GET_NOTES);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setNotes(data);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
      setError('Failed to fetch notes. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const createNote = async (noteData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(MOCK_API.POST_NOTE);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const mockResponse = await response.json();
      const newNote = {
        ...mockResponse,
        title: noteData.title,
        content: noteData.content,
        created_at: new Date().toISOString(),
        is_archived: false,
        is_trashed: false
      };
      
      setNotes(prev => [newNote, ...prev]);
      return newNote;
    } catch (error) {
      console.error('Error creating note:', error);
      setError('Failed to create note. Please try again later.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const toggleArchive = async (id) => {
    try {
      setError(null);
      setNotes(prev => prev.map(note => 
        note.id === id
          ? { ...note, is_archived: !note.is_archived }
          : note
      ));
    } catch (error) {
      console.error('Error toggling archive:', error);
      setError('Failed to archive note. Please try again later.');
    }
  };

  const toggleTrash = async (id) => {
    try {
      setError(null);
      setNotes(prev => prev.map(note => 
        note.id === id
          ? { ...note, is_trashed: !note.is_trashed }
          : note
      ));
    } catch (error) {
      console.error('Error toggling trash:', error);
      setError('Failed to move note to trash. Please try again later.');
    }
  };

  const permanentlyDeleteNote = (id) => {
    try {
      setError(null);
      setNotes(prev => prev.filter(note => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
      setError('Failed to delete note. Please try again later.');
    }
  };

  // Fetch initial notes
  useEffect(() => {
    fetchNotes();
  }, []);

  const filteredNotes = getFilteredNotes();

  return (
    <SidebarContext.Provider value={{
      isExpanded,
      activeView,
      toggleSidebar,
      setActiveView,
      isLabelModalOpen,
      openLabelModal,
      closeLabelModal,
      addLabel,
      removeLabel,
      labels,
      notes: filteredNotes,
      isLoading,
      error,
      fetchNotes,
      createNote,
      toggleArchive,
      toggleTrash,
      permanentlyDeleteNote
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