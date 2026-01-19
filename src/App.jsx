/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
// Pastikan path import ini sesuai lokasi file Sidebar.jsx Anda
import Sidebar from "./components/Sidebar"; 

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";

import {
  Users, Briefcase, DollarSign, TrendingUp, TrendingDown, Clock, Settings,
  Bell, Search, Menu, X, Download, Filter, ChevronDown, UserPlus, FileText,
  Database, Cpu, Zap, Server, Wifi, Eye, Trash2, Edit, Check, User, LogOut
} from "lucide-react";

// ========== 1. KOMPONEN UTAMA (APP) ==========
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  // State Sidebar & Tab
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // State Search
  const [searchTerm, setSearchTerm] = useState(""); 

  // Data Notifikasi
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Proyek baru ditambahkan", time: "10 menit lalu", unread: true },
    { id: 2, title: "Pembayaran berhasil", time: "1 jam lalu", unread: true },
    { id: 3, title: "Rapat tim dijadwalkan ulang", time: "2 jam lalu", unread: false },
    { id: 4, title: "Laporan bulanan siap", time: "1 hari lalu", unread: false },
  ]);

  // Data User (Profile)
  const [userData, setUserData] = useState({
    name: "Alexandra Chen",
    role: "CEO & Founder",
    email: "alexandra@nexustech.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra",
  });

  // --- Data Dummy Grafik ---
  const revenueData = [
    { month: "Jan", revenue: 65000 }, { month: "Feb", revenue: 80000 },
    { month: "Mar", revenue: 75000 }, { month: "Apr", revenue: 90000 },
    { month: "May", revenue: 110000 }, { month: "Jun", revenue: 105000 },
    { month: "Jul", revenue: 120000 }, { month: "Aug", revenue: 115000 },
    { month: "Sep", revenue: 130000 }, { month: "Oct", revenue: 140000 },
    { month: "Nov", revenue: 135000 }, { month: "Dec", revenue: 150000 },
  ];

  const projectStatusData = [
    { name: "Selesai", value: 45, color: "#10B981" },
    { name: "Berjalan", value: 30, color: "#3B82F6" },
    { name: "Tertunda", value: 15, color: "#F59E0B" },
    { name: "Ditunda", value: 10, color: "#EF4444" },
  ];

  const employeePerformance = [
    { name: "Sarah M.", role: "Dev Lead", productivity: 92, projects: 8 },
    { name: "Michael T.", role: "UX Designer", productivity: 88, projects: 6 },
    { name: "David K.", role: "Full Stack", productivity: 95, projects: 9 },
    { name: "Lisa P.", role: "Data Analyst", productivity: 85, projects: 7 },
    { name: "Robert L.", role: "Marketing", productivity: 78, projects: 5 },
  ];

  const recentActivities = [
    { id: 1, user: "Michael T.", action: "upload desain", project: "UI/UX", time: "10:30 AM" },
    { id: 2, user: "Sarah M.", action: "fix payment", project: "E-com", time: "11:15 AM" },
    { id: 3, user: "David K.", action: "fix API", project: "Backend", time: "1:45 PM" },
  ];

  const systemMetrics = { cpu: 65, memory: 78, storage: 54, network: 42, uptime: "99.8%", activeUsers: 247 };

  // --- Helpers ---
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const markAsRead = (id) => setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n));
  const markAllAsRead = () => setNotifications(notifications.map(n => ({ ...n, unread: false })));

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      
      {/* Navigation Bar */}
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        notifications={notifications}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        markAsRead={markAsRead}
        markAllAsRead={markAllAsRead}
        userData={userData}
        setActiveTab={setActiveTab}
        searchTerm={searchTerm}         
        setSearchTerm={setSearchTerm}   
      />

      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          userData={userData}
        />

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
          <div className="p-6">
            
            {/* Header Halaman */}
            <div className="mb-8">
              <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {activeTab === "dashboard" && "Dashboard Eksekutif"}
                {activeTab === "employees" && "Manajemen Karyawan"}
                {activeTab === "projects" && "Pelacakan Proyek"}
                {activeTab === "analytics" && "Analitik & Laporan"}
                {activeTab === "settings" && "Pengaturan Sistem"}
              </h1>
              <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Selamat datang kembali, {userData.name}
              </p>
            </div>

            {/* Router / Tab Content */}
            {activeTab === "dashboard" && (
              <DashboardContent 
                darkMode={darkMode} 
                revenueData={revenueData} 
                projectStatusData={projectStatusData} 
                systemMetrics={systemMetrics} 
              />
            )}
            
            {activeTab === "employees" && (
              <EmployeesContent 
                darkMode={darkMode} 
                searchTerm={searchTerm} 
              />
            )}
            
            {activeTab === "projects" && <ProjectsContent darkMode={darkMode} />}
            {activeTab === "analytics" && <AnalyticsContent darkMode={darkMode} revenueData={revenueData} />}
            {activeTab === "settings" && <SettingsContent darkMode={darkMode} />}
          
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

// ========== 2. NAVBAR (NAVBAR DENGAN GARIS TIGA) ==========
function NavBar({ darkMode, toggleDarkMode, sidebarOpen, setSidebarOpen, notifications, showNotifications, setShowNotifications, markAsRead, markAllAsRead, userData, setActiveTab, searchTerm, setSearchTerm }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b transition-colors duration-300`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Tombol Garis Tiga */}
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className={`p-2 rounded-lg transition-colors mr-4 ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"}`}
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center">
              <div className={`p-2 rounded-lg mr-3 ${darkMode ? "bg-green-900" : "bg-green-100"}`}>
                <Zap size={24} className={darkMode ? "text-green-400" : "text-green-600"} />
              </div>
              <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Nexus<span className="text-green-500">Tech</span>
              </h1>
            </div>
          </div>

          {/* Search Input */}
          <div className="hidden md:flex items-center w-1/3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className={darkMode ? "text-gray-500" : "text-gray-400"} />
              </div>
              <input
                type="text"
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className={`block w-full pl-10 pr-4 py-2 rounded-lg border ${
                  darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Cari karyawan, role, atau email..."
              />
            </div>
          </div>

          {/* Profile & Notif */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className={`p-2 rounded-lg ${darkMode ? "hover:bg-gray-700 text-yellow-300" : "hover:bg-gray-100 text-gray-700"}`}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            <div className="relative">
              <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-3 focus:outline-none">
                <div className="text-right hidden md:block">
                  <p className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{userData.name}</p>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{userData.role}</p>
                </div>
                <img src={userData.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-green-500" />
              </button>
              
              {showProfileMenu && (
                <div className={`absolute right-0 mt-3 w-56 rounded-xl shadow-xl py-2 z-50 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                  <div className="px-4 py-2 border-b border-gray-700 mb-2">
                    <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Login sebagai</p>
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{userData.email}</p>
                  </div>
                  <button onClick={() => {setActiveTab('settings'); setShowProfileMenu(false)}} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center gap-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}><Settings size={16}/> Settings</button>
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-900/20 flex items-center gap-2"><LogOut size={16}/> Logout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ========== 3. KONTEN DASHBOARD ==========
function DashboardContent({ darkMode, revenueData, projectStatusData, systemMetrics }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard darkMode={darkMode} title="Total Pendapatan" value="$120,000" trend="up" change="+12%" icon={<DollarSign />} />
        <StatCard darkMode={darkMode} title="Produktivitas" value="94.2%" trend="up" change="+2%" icon={<TrendingUp />} />
        <StatCard darkMode={darkMode} title="Proyek Aktif" value="34" trend="down" change="-1" icon={<Briefcase />} />
        <StatCard darkMode={darkMode} title="Server Uptime" value={systemMetrics.uptime} trend="up" change="Stable" icon={<Server />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pendapatan</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{backgroundColor: '#1f2937', border: 'none', color:'white'}}/>
                <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Status Proyek</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={projectStatusData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {projectStatusData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== 4. KONTEN KARYAWAN (DENGAN FOTO!) ==========
function EmployeesContent({ darkMode, searchTerm }) {
  // Data karyawan lengkap dengan AVATAR
  const [employees] = useState([
    { id: 1, name: "Sarah Miller", role: "Dev Lead", dept: "Engineering", score: 92, email: "sarah@nexus.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { id: 2, name: "Michael Tan", role: "UX Designer", dept: "Design", score: 88, email: "michael@nexus.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" },
    { id: 3, name: "David Kim", role: "Full Stack", dept: "Engineering", score: 95, email: "david@nexus.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
    { id: 4, name: "Lisa Park", role: "Data Analyst", dept: "Analytics", score: 85, email: "lisa@nexus.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" },
    { id: 5, name: "Robert Lee", role: "Marketing", dept: "Marketing", score: 78, email: "robert@nexus.com", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert" },
  ]);

  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(term) ||
      emp.role.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );
  });

  return (
    <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Daftar Karyawan</h3>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2"><UserPlus size={18}/> Tambah</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className={darkMode ? "text-gray-400 border-b border-gray-700" : "text-gray-500 border-b border-gray-200"}>
            <tr>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Score</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody className={darkMode ? "text-gray-200" : "text-gray-700"}>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp) => (
                <tr key={emp.id} className={`border-b ${darkMode ? "border-gray-700 hover:bg-gray-700/50" : "border-gray-100 hover:bg-gray-50"}`}>
                  <td className="py-3 px-4 flex items-center gap-3">
                    {/* INI BAGIAN FOTO (IMG) KARYAWAN */}
                    <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full border border-gray-500"/>
                    <div className="font-medium">{emp.name}</div>
                  </td>
                  <td className="py-3 px-4">{emp.role}</td>
                  <td className="py-3 px-4">{emp.email}</td>
                  <td className="py-3 px-4">{emp.score}%</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="text-blue-500 hover:bg-blue-100 p-1 rounded"><Edit size={16}/></button>
                    <button className="text-red-500 hover:bg-red-100 p-1 rounded"><Trash2 size={16}/></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500">Tidak ada karyawan ditemukan.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ========== 5. KONTEN LAINNYA ==========
function ProjectsContent({ darkMode }) { return <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>Halaman Proyek</div>; }
function AnalyticsContent({ darkMode }) { return <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>Halaman Analitik</div>; }

function SettingsContent({ darkMode }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pengaturan</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className={`mb-4 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Umum</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center"><span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Notifikasi Email</span><input type="checkbox" defaultChecked className="toggle" /></div>
            <div className="flex justify-between items-center"><span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Mode Gelap Otomatis</span><input type="checkbox" className="toggle" /></div>
          </div>
        </div>
        <div>
          <h4 className={`mb-4 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Akun</h4>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg mb-3">Ubah Password</button>
          <button className="w-full py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">Hapus Akun</button>
        </div>
      </div>
    </div>
  );
}

// ========== 6. HELPERS ==========
function StatCard({ darkMode, title, value, change, trend, icon }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
          <h3 className={`text-2xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}>{icon}</div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className={`font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
        <span className={`ml-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>dari bulan lalu</span>
      </div>
    </div>
  );
}

function Footer({ darkMode }) {
  return (
    <footer className={`py-6 text-center text-sm border-t ${darkMode ? "bg-gray-800 border-gray-700 text-gray-500" : "bg-white border-gray-200 text-gray-400"}`}>
      &copy; 2024 NexusTech Dashboard
    </footer>
  );
}

function SunIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>; }
function MoonIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>; }