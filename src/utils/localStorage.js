// utils/localStorage.js
const STORAGE_KEY = 'google_keep_notes';

export const loadFromStorage = () => {
  try {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return [];
  }
};

export const saveToStorage = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};