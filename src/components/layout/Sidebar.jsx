import React from 'react';
import { 
  LightbulbIcon,
  Bell,
  PencilLine,
  Archive,
  Trash2
} from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';

const SidebarItem = ({ icon: Icon, label, view }) => {
  const { isExpanded, activeView, setActiveView, openLabelModal } = useSidebar();
  
  const handleClick = () => {
    if (view === 'labels') {
      openLabelModal();
    } else {
      setActiveView(view);
    }
  };
  
  const isActive = activeView === view;
  
  return (
    <div 
      onClick={handleClick}
      className={`
        flex items-center px-6 py-3 rounded-r-full cursor-pointer
        ${isActive ? 'bg-[#41331C]' : 'hover:bg-[#28292C]'}
        transition-colors duration-200
      `}
    >
      <Icon className={`w-6 h-6 ${isActive ? 'text-[#e2e2e3]' : 'text-[#9aa0a6]'}`} />
      {isExpanded && (
        <span className={`ml-8 text-sm ${isActive ? 'text-[#e2e2e3]' : 'text-[#9aa0a6]'}`}>
          {label}
        </span>
      )}
    </div>
  );
};

const Sidebar = () => {
  const { isExpanded } = useSidebar();

  const menuItems = [
    { icon: LightbulbIcon, label: 'Notes', view: 'notes' },
    { icon: Bell, label: 'Reminders', view: 'reminders' },
    { icon: PencilLine, label: 'Edit labels', view: 'labels' },
    { icon: Archive, label: 'Archive', view: 'archive' },
    { icon: Trash2, label: 'Trash', view: 'trash' }
  ];

  return (
    <aside className={`
      h-full bg-[#202124] flex flex-col
      ${isExpanded ? 'w-64' : 'w-20'}
      transition-all duration-200
    `}>
      <nav className="flex-1 pt-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.view}
            icon={item.icon}
            label={item.label}
            view={item.view}
          />
        ))}
      </nav>
      
    </aside>
  );
};

export default Sidebar;