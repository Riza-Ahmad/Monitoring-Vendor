/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Home,
  Users,
  Briefcase,
  BarChart2,
  Settings,
  Plus,
  UserPlus,
  FileText,
  Database,
  HelpCircle,
} from "lucide-react";

export default function Sidebar({ sidebarOpen, activeTab, setActiveTab }) {
  
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { id: "employees", label: "Karyawan", icon: <Users size={20} /> },
    { id: "projects", label: "Proyek", icon: <Briefcase size={20} /> },
    { id: "analytics", label: "Analitik", icon: <BarChart2 size={20} /> },
    { id: "settings", label: "Pengaturan", icon: <Settings size={20} /> },
  ];

  const quickActions = [
    { id: "new-project", label: "Proyek Baru", icon: <Plus size={16} /> },
    { id: "add-employee", label: "Tambah Karyawan", icon: <UserPlus size={16} /> },
    { id: "generate-report", label: "Buat Laporan", icon: <FileText size={16} /> },
    { id: "system-backup", label: "Backup Sistem", icon: <Database size={16} /> },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-20 transition-all duration-300 ease-in-out border-r border-white/10
      ${sidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full opacity-0"} 
      bg-[#456882] text-white shadow-xl overflow-hidden`}
    >
      <div className="h-full flex flex-col justify-between w-64 px-4 pb-6">
        
        {/* Menu Navigasi */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          <div className="mb-8 mt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-blue-100/70 ml-3">
              Menu Utama
            </h3>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 group
                    ${
                      activeTab === item.id
                        ? "bg-white/20 text-white font-semibold shadow-sm"
                        : "text-blue-100 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Aksi Cepat */}
          <div className="mb-8">
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-3 text-blue-100/70 ml-3">
              Aksi Cepat
            </h3>
            <div className="space-y-1">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  className="flex items-center w-full px-4 py-2.5 rounded-lg transition-colors text-blue-50 hover:bg-black/20 hover:text-white text-sm"
                >
                  <span className="mr-3">{action.icon}</span>
                  <span className="font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Sistem Kecil */}
          <div className="p-4 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm mx-1">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-blue-200">
              Status Server
            </h3>
            <div className="flex items-center justify-between text-xs text-blue-100 mb-1">
              <span>Online</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <div className="w-full bg-black/30 h-1.5 rounded-full mt-2">
              <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>

        {/* Bantuan */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <button className="flex items-center w-full px-4 py-3 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white transition-colors">
            <HelpCircle size={20} className="mr-3" />
            <span className="font-medium text-sm">Bantuan & Dukungan</span>
          </button>
        </div>

      </div>
    </aside>
  );
}