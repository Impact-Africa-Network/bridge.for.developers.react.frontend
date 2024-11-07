import React from 'react';
import { Menu, Search, RotateCcw, Settings, Eye } from 'lucide-react';
import { ListView } from '../../lib/icons';
import { useSidebar } from '../../context/SidebarContext';

const KeepNavbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="flex items-center h-16 px-4 bg-[#202124] text-[#e2e2e3]">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 hover:bg-gray-700 rounded-full"
          onClick={toggleSidebar}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center">
          <img 
            src="/shared/keeplogo.png" 
            alt="Keep"
            className="w-10 h-10"
          />
          <span className="ml-2 text-lg text-[#e2e2e3] font-medium">Keep</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <div className="hidden lg:flex items-center max-w-3xl mx-auto bg-[#525355] focus-within:bg-[#fff] focus-within:text-black rounded-lg px-4 h-12">
          <Search className="w-5 h-5 text-gray-400 focus-within:text-black" />
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 bg-transparent border-none focus:outline-none text-gray-200 focus-within:text-black"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <RotateCcw className="w-5 text-[#e2e2e3] h-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <ListView />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <Settings className="w-5 text-[#e2e2e3] h-5" />
        </button>
      </div>
    </nav>
  );
};

export default KeepNavbar;