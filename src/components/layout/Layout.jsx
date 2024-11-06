// components/layout/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import KeepNavbar from './KeepNavbar';
import { SidebarProvider } from '../../context/SidebarContext';

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col">
        <KeepNavbar />
        <hr className='border-[#e2e2e38a]' />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 bg-[#202124] overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;