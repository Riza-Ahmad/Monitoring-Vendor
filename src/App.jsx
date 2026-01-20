<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import {
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Download,
  Upload,
  Filter,
  ChevronDown,
  ChevronUp,
  UserPlus,
  FileText,
  BarChart2,
  PieChart as PieChartIcon,
  Globe,
  Shield,
  Database,
  Cpu,
  Zap,
  Cloud,
  Lock,
  Unlock,
  Home,
  Building,
  Award,
  Target,
  MessageSquare,
  Mail,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Server,
  RefreshCw,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Save,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  LogOut,
  User,
  HelpCircle,
} from "lucide-react";

// ========== KOMPONEN UTAMA ==========
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Proyek baru ditambahkan",
      time: "10 menit yang lalu",
      unread: true,
    },
    {
      id: 2,
      title: "Pembayaran berhasil diproses",
      time: "1 jam yang lalu",
      unread: true,
    },
    {
      id: 3,
      title: "Rapat tim dijadwalkan ulang",
      time: "2 jam yang lalu",
      unread: false,
    },
    {
      id: 4,
      title: "Laporan bulanan siap",
      time: "1 hari yang lalu",
      unread: false,
    },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alexandra Chen",
    role: "CEO & Founder",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra",
  });

  // Data untuk grafik
  const revenueData = [
    { month: "Jan", revenue: 65000, target: 60000 },
    { month: "Feb", revenue: 80000, target: 75000 },
    { month: "Mar", revenue: 75000, target: 70000 },
    { month: "Apr", revenue: 90000, target: 85000 },
    { month: "May", revenue: 110000, target: 100000 },
    { month: "Jun", revenue: 105000, target: 95000 },
    { month: "Jul", revenue: 120000, target: 110000 },
    { month: "Aug", revenue: 115000, target: 105000 },
    { month: "Sep", revenue: 130000, target: 120000 },
    { month: "Oct", revenue: 140000, target: 130000 },
    { month: "Nov", revenue: 135000, target: 125000 },
    { month: "Dec", revenue: 150000, target: 140000 },
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
    {
      name: "Emma W.",
      role: "Project Manager",
      productivity: 90,
      projects: 10,
    },
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Michael T.",
      action: "mengupload desain baru",
      project: "Redesign UI",
      time: "10:30 AM",
    },
    {
      id: 2,
      user: "Sarah M.",
      action: "menyelesaikan modul pembayaran",
      project: "E-commerce",
      time: "11:15 AM",
    },
    {
      id: 3,
      user: "David K.",
      action: "memperbaiki bug API",
      project: "Backend System",
      time: "1:45 PM",
    },
    {
      id: 4,
      user: "Lisa P.",
      action: "menganalisis data pengguna",
      project: "Analytics Dashboard",
      time: "2:30 PM",
    },
    {
      id: 5,
      user: "Robert L.",
      action: "meluncurkan kampanye baru",
      project: "Marketing 2024",
      time: "3:20 PM",
    },
  ];

  const systemMetrics = {
    cpu: 65,
    memory: 78,
    storage: 54,
    network: 42,
    uptime: "99.8%",
    activeUsers: 247,
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, unread: false }))
    );
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
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
      />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          darkMode={darkMode}
          sidebarOpen={sidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <div className="p-6">
            {/* Dashboard Header */}
            <div className="mb-8">
              <h1
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {activeTab === "dashboard" && "Dashboard Eksekutif"}
                {activeTab === "employees" && "Manajemen Karyawan"}
                {activeTab === "projects" && "Pelacakan Proyek"}
                {activeTab === "analytics" && "Analitik & Laporan"}
                {activeTab === "settings" && "Pengaturan Sistem"}
              </h1>
              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {activeTab === "dashboard" &&
                  "Ringkasan performa dan metrik perusahaan"}
                {activeTab === "employees" && "Kelola data karyawan dan tim"}
                {activeTab === "projects" && "Pantau perkembangan semua proyek"}
                {activeTab === "analytics" &&
                  "Analisis data dan laporan mendalam"}
                {activeTab === "settings" &&
                  "Konfigurasi sistem dan preferensi"}
              </p>
            </div>

            {/* Render konten berdasarkan tab aktif */}
            {activeTab === "dashboard" && (
              <DashboardContent
                darkMode={darkMode}
                revenueData={revenueData}
                projectStatusData={projectStatusData}
                employeePerformance={employeePerformance}
                recentActivities={recentActivities}
                systemMetrics={systemMetrics}
              />
            )}

            {activeTab === "employees" && (
              <EmployeesContent darkMode={darkMode} />
            )}

            {activeTab === "projects" && (
              <ProjectsContent darkMode={darkMode} />
            )}

            {activeTab === "analytics" && (
              <AnalyticsContent
                darkMode={darkMode}
                revenueData={revenueData}
                projectStatusData={projectStatusData}
              />
            )}

            {activeTab === "settings" && (
              <SettingsContent darkMode={darkMode} />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

// ========== KOMPONEN NAVIGATION BAR ==========
function NavBar({
  darkMode,
  toggleDarkMode,
  sidebarOpen,
  setSidebarOpen,
  notifications,
  showNotifications,
  setShowNotifications,
  markAsRead,
  markAllAsRead,
  userData,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav
      className={`fixed top-0 z-50 w-full ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo & Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="ml-4 flex items-center">
              <div
                className={`p-2 rounded-lg ${
                  darkMode ? "bg-green-900" : "bg-green-100"
                }`}
              >
                <Zap
                  size={24}
                  className={darkMode ? "text-green-400" : "text-green-600"}
                />
              </div>
              <h1
                className={`ml-3 text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Nexus<span className="text-green-500">Tech</span>
              </h1>
              <span
                className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                v3.2.1
              </span>
            </div>
          </div>

          {/* Center - Search */}
          <div className="hidden md:flex items-center w-1/3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  size={18}
                  className={darkMode ? "text-gray-500" : "text-gray-400"}
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`block w-full pl-10 pr-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Cari proyek, laporan, atau dokumen..."
              />
            </div>
          </div>

          {/* Right side - Icons & User */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-700 text-yellow-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-lg relative ${
                  darkMode
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <Bell size={20} />
                {notifications.filter((n) => n.unread).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div
                  className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg py-2 ${
                    darkMode
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div
                    className={`px-4 py-2 flex justify-between items-center border-b ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <h3
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Notifikasi
                    </h3>
                    <button
                      onClick={markAllAsRead}
                      className={`text-sm ${
                        darkMode
                          ? "text-green-400 hover:text-green-300"
                          : "text-green-600 hover:text-green-700"
                      }`}
                    >
                      Tandai semua terbaca
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:${
                            darkMode ? "bg-gray-700" : "bg-gray-50"
                          } cursor-pointer border-b ${
                            darkMode ? "border-gray-700" : "border-gray-100"
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex justify-between">
                            <p
                              className={`font-medium ${
                                notification.unread
                                  ? darkMode
                                    ? "text-white"
                                    : "text-gray-900"
                                  : darkMode
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }`}
                            >
                              {notification.title}
                            </p>
                            {notification.unread && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                            )}
                          </div>
                          <p
                            className={`text-sm mt-1 ${
                              darkMode ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            {notification.time}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center">
                        <Bell
                          size={32}
                          className={`mx-auto mb-2 ${
                            darkMode ? "text-gray-600" : "text-gray-400"
                          }`}
                        />
                        <p
                          className={
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }
                        >
                          Tidak ada notifikasi
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    className={`px-4 py-2 text-center border-t ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <a
                      href="#"
                      className={`text-sm ${
                        darkMode
                          ? "text-green-400 hover:text-green-300"
                          : "text-green-600 hover:text-green-700"
                      }`}
                    >
                      Lihat semua notifikasi
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center">
              <div className="text-right hidden md:block mr-3">
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {userData.name}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {userData.role}
                </p>
              </div>
              <div className="relative">
                <img
                  src={userData.avatar}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ========== KOMPONEN SIDEBAR ==========
function Sidebar({ darkMode, sidebarOpen, activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { id: "employees", label: "Karyawan", icon: <Users size={20} /> },
    { id: "projects", label: "Proyek", icon: <Briefcase size={20} /> },
    { id: "analytics", label: "Analitik", icon: <BarChart2 size={20} /> },
    { id: "settings", label: "Pengaturan", icon: <Settings size={20} /> },
  ];

  const quickActions = [
    { id: "new-project", label: "Proyek Baru", icon: <Plus size={16} /> },
    {
      id: "add-employee",
      label: "Tambah Karyawan",
      icon: <UserPlus size={16} />,
    },
    {
      id: "generate-report",
      label: "Buat Laporan",
      icon: <FileText size={16} />,
    },
    {
      id: "system-backup",
      label: "Backup Sistem",
      icon: <Database size={16} />,
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-16 transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-0"
      } ${darkMode ? "bg-gray-800" : "bg-white"} border-r ${
        darkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div
        className={`h-full px-4 py-6 overflow-y-auto ${
          !sidebarOpen && "hidden"
        }`}
      >
        {/* Menu Navigasi */}
        <div className="mb-8">
          <h3
            className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Navigasi
          </h3>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? darkMode
                        ? "bg-green-900 text-green-300"
                        : "bg-green-50 text-green-700"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3
            className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Aksi Cepat
          </h3>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <button
                key={action.id}
                className={`flex items-center w-full px-4 py-2.5 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <span className="mr-3">{action.icon}</span>
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div
          className={`p-4 rounded-lg ${
            darkMode ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <h3
            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Status Sistem
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Server
              </span>
              <span className="flex items-center text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Online</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Database
              </span>
              <span className="flex items-center text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Aktif</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Backup
              </span>
              <span className="flex items-center text-yellow-500">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">6 jam lalu</span>
              </span>
            </div>
          </div>
        </div>

        {/* Help & Support */}
        <div className="mt-8">
          <button
            className={`flex items-center w-full px-4 py-3 rounded-lg ${
              darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HelpCircle size={20} className="mr-3" />
            <span className="font-medium">Bantuan & Dukungan</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

// ========== KOMPONEN DASHBOARD ==========
function DashboardContent({
  darkMode,
  revenueData,
  projectStatusData,
  employeePerformance,
  recentActivities,
  systemMetrics,
}) {
  // Hitung statistik
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const avgProductivity =
    employeePerformance.reduce((sum, emp) => sum + emp.productivity, 0) /
    employeePerformance.length;
  const activeProjects =
    projectStatusData.find((p) => p.name === "Berjalan")?.value || 0;
  const completedProjects =
    projectStatusData.find((p) => p.name === "Selesai")?.value || 0;

  return (
    <div className="space-y-6">
      {/* Statistik Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          darkMode={darkMode}
          title="Total Pendapatan"
          value={`$${totalRevenue.toLocaleString()}`}
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="text-green-500" size={24} />}
          subtitle="Tahun ini"
        />

        <StatCard
          darkMode={darkMode}
          title="Produktivitas Rata-rata"
          value={`${avgProductivity.toFixed(1)}%`}
          change="+5.2%"
          trend="up"
          icon={<TrendingUp className="text-blue-500" size={24} />}
          subtitle="Bulan ini"
        />

        <StatCard
          darkMode={darkMode}
          title="Proyek Aktif"
          value={activeProjects}
          change="+3"
          trend="up"
          icon={<Briefcase className="text-purple-500" size={24} />}
          subtitle="Dari 45 total"
        />

        <StatCard
          darkMode={darkMode}
          title="Proyek Selesai"
          value={completedProjects}
          change="+8"
          trend="up"
          icon={<Check className="text-green-500" size={24} />}
          subtitle="Bulan ini"
        />
      </div>

      {/* Grafik dan Visualisasi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grafik Pendapatan */}
        <div
          className={`rounded-xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Tren Pendapatan Tahunan
            </h3>
            <div className="flex items-center space-x-2">
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                2024
              </span>
              <ChevronDown
                size={16}
                className={darkMode ? "text-gray-400" : "text-gray-500"}
              />
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={darkMode ? "#374151" : "#e5e7eb"}
                />
                <XAxis
                  dataKey="month"
                  stroke={darkMode ? "#9ca3af" : "#6b7280"}
                />
                <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <Tooltip
                  contentStyle={
                    darkMode
                      ? {
                          backgroundColor: "#1f2937",
                          borderColor: "#374151",
                          color: "white",
                        }
                      : {}
                  }
                  formatter={(value) => [
                    `$${value.toLocaleString()}`,
                    "Pendapatan",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Pendapatan Aktual
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Target Pendapatan
              </span>
            </div>
          </div>
        </div>

        {/* Status Proyek */}
        <div
          className={`rounded-xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h3
            className={`text-lg font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Distribusi Status Proyek
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={
                    darkMode
                      ? {
                          backgroundColor: "#1f2937",
                          borderColor: "#374151",
                          color: "white",
                        }
                      : {}
                  }
                  formatter={(value, name) => [`${value}%`, name]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performa Karyawan & Aktivitas Terbaru */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performa Karyawan Teratas */}
        <div
          className={`rounded-xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Performa Karyawan Teratas
            </h3>
            <button
              className={`text-sm flex items-center ${
                darkMode
                  ? "text-green-400 hover:text-green-300"
                  : "text-green-600 hover:text-green-700"
              }`}
            >
              Lihat semua <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {employeePerformance.map((employee) => (
              <div
                key={employee.name}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-700/30"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-medium mr-4">
                    {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {employee.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {employee.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-lg font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {employee.productivity}%
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {employee.projects} proyek
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div
          className={`rounded-xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3
              className={`text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Aktivitas Terbaru
            </h3>
            <button
              className={`text-sm flex items-center ${
                darkMode
                  ? "text-green-400 hover:text-green-300"
                  : "text-green-600 hover:text-green-700"
              }`}
            >
              Lihat semua <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start p-3 rounded-lg hover:bg-gray-700/30"
              >
                <div
                  className={`p-2 rounded-full mr-3 ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <User
                    size={16}
                    className={darkMode ? "text-gray-300" : "text-gray-600"}
                  />
                </div>
                <div className="flex-1">
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action} untuk proyek{" "}
                    <span className="font-medium">{activity.project}</span>
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrik Sistem */}
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-lg font-semibold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Metrik Sistem & Server
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <MetricCard
            darkMode={darkMode}
            title="CPU"
            value={`${systemMetrics.cpu}%`}
            icon={<Cpu size={20} />}
            status={
              systemMetrics.cpu > 80
                ? "high"
                : systemMetrics.cpu > 60
                ? "medium"
                : "low"
            }
          />
          <MetricCard
            darkMode={darkMode}
            title="Memory"
            value={`${systemMetrics.memory}%`}
            icon={<Database size={20} />}
            status={
              systemMetrics.memory > 85
                ? "high"
                : systemMetrics.memory > 70
                ? "medium"
                : "low"
            }
          />
          <MetricCard
            darkMode={darkMode}
            title="Storage"
            value={`${systemMetrics.storage}%`}
            icon={<Server size={20} />}
            status={
              systemMetrics.storage > 80
                ? "high"
                : systemMetrics.storage > 60
                ? "medium"
                : "low"
            }
          />
          <MetricCard
            darkMode={darkMode}
            title="Network"
            value={`${systemMetrics.network}%`}
            icon={<Wifi size={20} />}
            status={
              systemMetrics.network > 80
                ? "high"
                : systemMetrics.network > 60
                ? "medium"
                : "low"
            }
          />
          <MetricCard
            darkMode={darkMode}
            title="Uptime"
            value={systemMetrics.uptime}
            icon={<Clock size={20} />}
            status="low"
          />
          <MetricCard
            darkMode={darkMode}
            title="Pengguna Aktif"
            value={systemMetrics.activeUsers}
            icon={<Users size={20} />}
            status="low"
          />
        </div>
      </div>
    </div>
  );
}

// ========== KOMPONEN KARYAWAN ==========
function EmployeesContent({ darkMode }) {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sarah Miller",
      role: "Lead Developer",
      department: "Engineering",
      joinDate: "2021-03-15",
      email: "sarah.m@nexustech.com",
      productivity: 92,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "Michael Tan",
      role: "UX Designer",
      department: "Design",
      joinDate: "2020-11-08",
      email: "michael.t@nexustech.com",
      productivity: 88,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: 3,
      name: "David Kim",
      role: "Full Stack Developer",
      department: "Engineering",
      joinDate: "2022-01-20",
      email: "david.k@nexustech.com",
      productivity: 95,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      id: 4,
      name: "Lisa Park",
      role: "Data Analyst",
      department: "Analytics",
      joinDate: "2021-07-12",
      email: "lisa.p@nexustech.com",
      productivity: 85,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    {
      id: 5,
      name: "Robert Lee",
      role: "Marketing Specialist",
      department: "Marketing",
      joinDate: "2020-05-30",
      email: "robert.l@nexustech.com",
      productivity: 78,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "Project Manager",
      department: "Management",
      joinDate: "2019-09-22",
      email: "emma.w@nexustech.com",
      productivity: 90,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
      id: 7,
      name: "James Chen",
      role: "DevOps Engineer",
      department: "Engineering",
      joinDate: "2022-03-10",
      email: "james.c@nexustech.com",
      productivity: 87,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    {
      id: 8,
      name: "Olivia Davis",
      role: "HR Manager",
      department: "Human Resources",
      joinDate: "2018-12-05",
      email: "olivia.d@nexustech.com",
      productivity: 82,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("all");

  const departments = [
    "all",
    "Engineering",
    "Design",
    "Analytics",
    "Marketing",
    "Management",
    "Human Resources",
  ];

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === "all" || emp.department === filterDept;
    return matchesSearch && matchesDept;
  });

  const handleAddEmployee = () => {
    if (
      newEmployee.name &&
      newEmployee.role &&
      newEmployee.department &&
      newEmployee.email
    ) {
      const newId =
        employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1;
      const employeeToAdd = {
        id: newId,
        ...newEmployee,
        joinDate: new Date().toISOString().split("T")[0],
        productivity: Math.floor(Math.random() * 20) + 80,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${
          newEmployee.name.split(" ")[0]
        }`,
      };

      setEmployees([...employees, employeeToAdd]);
      setNewEmployee({ name: "", role: "", department: "", email: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header dengan Statistik */}
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Manajemen Karyawan
            </h3>
            <p
              className={`mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Total {employees.length} karyawan di{" "}
              {new Set(employees.map((e) => e.department)).size} departemen
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <UserPlus size={18} className="mr-2" />
            Tambah Karyawan Baru
          </button>
        </div>

        {/* Form Tambah Karyawan */}
        {showAddForm && (
          <div
            className={`p-5 rounded-lg mb-6 ${
              darkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <h4
              className={`text-lg font-medium mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Tambah Karyawan Baru
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={newEmployee.name}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Posisi / Role
                </label>
                <input
                  type="text"
                  value={newEmployee.role}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, role: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="Contoh: Frontend Developer"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Departemen
                </label>
                <select
                  value={newEmployee.department}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      department: e.target.value,
                    })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="">Pilih Departemen</option>
                  {departments
                    .filter((d) => d !== "all")
                    .map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={newEmployee.email}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, email: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="email@nexustech.com"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowAddForm(false)}
                className={`px-4 py-2.5 rounded-lg font-medium ${
                  darkMode
                    ? "bg-gray-600 text-gray-300 hover:bg-gray-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Batal
              </button>
              <button
                onClick={handleAddEmployee}
                className="px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
              >
                Simpan Karyawan
              </button>
            </div>
          </div>
        )}

        {/* Filter dan Pencarian */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  size={18}
                  className={darkMode ? "text-gray-500" : "text-gray-400"}
                />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
                placeholder="Cari karyawan..."
              />
            </div>
            <div className="ml-4">
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === "all" ? "Semua Departemen" : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className={`flex items-center px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Download size={18} className="mr-2" />
              Ekspor
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Tabel Karyawan */}
      <div
        className={`rounded-xl overflow-hidden shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={darkMode ? "bg-gray-700" : "bg-gray-50"}>
              <tr>
                <th className="py-4 px-6 text-left">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Karyawan
                  </span>
                </th>
                <th className="py-4 px-6 text-left">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Departemen
                  </span>
                </th>
                <th className="py-4 px-6 text-left">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Tanggal Bergabung
                  </span>
                </th>
                <th className="py-4 px-6 text-left">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Produktivitas
                  </span>
                </th>
                <th className="py-4 px-6 text-left">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Aksi
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className={`border-t ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700/50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <h4
                          className={`font-medium ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {employee.name}
                        </h4>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {employee.role}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {employee.department}
                    </span>
                  </td>
                  <td
                    className={`py-4 px-6 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {employee.joinDate}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-24 h-2 rounded-full bg-gray-600 mr-3 overflow-hidden">
                        <div
                          className={`h-full ${
                            employee.productivity > 90
                              ? "bg-green-500"
                              : employee.productivity > 80
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${employee.productivity}%` }}
                        ></div>
                      </div>
                      <span
                        className={`font-medium ${
                          employee.productivity > 90
                            ? "text-green-500"
                            : employee.productivity > 80
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {employee.productivity}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        className={`p-2 rounded-lg ${
                          darkMode
                            ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                            : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteEmployee(employee.id)}
                        className={`p-2 rounded-lg ${
                          darkMode
                            ? "hover:bg-gray-700 text-gray-400 hover:text-red-400"
                            : "hover:bg-gray-200 text-gray-600 hover:text-red-600"
                        }`}
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        className={`p-2 rounded-lg ${
                          darkMode
                            ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                            : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredEmployees.length === 0 && (
          <div className="py-12 text-center">
            <Users
              size={48}
              className={`mx-auto mb-4 ${
                darkMode ? "text-gray-600" : "text-gray-400"
              }`}
            />
            <h3
              className={`text-lg font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Tidak ada karyawan yang ditemukan
            </h3>
            <p className={darkMode ? "text-gray-500" : "text-gray-400"}>
              Coba ubah filter pencarian atau tambahkan karyawan baru
            </p>
          </div>
        )}
      </div>

      {/* Statistik Departemen */}
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-lg font-semibold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Distribusi Karyawan per Departemen
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments
            .filter((d) => d !== "all")
            .map((dept) => {
              const count = employees.filter(
                (e) => e.department === dept
              ).length;
              const percentage = (count / employees.length) * 100;

              return (
                <div key={dept} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={darkMode ? "#374151" : "#e5e7eb"}
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray={`${percentage}, 100`}
                      />
                    </svg>
                    <div
                      className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {count}
                    </div>
                  </div>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {dept}
                  </p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {percentage.toFixed(1)}%
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

// ========== KOMPONEN PROYEK ==========
function ProjectsContent({ darkMode }) {
  // Komponen ini akan sangat panjang, jadi saya akan membuat versi singkatnya
  return (
    <div className="space-y-6">
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Manajemen Proyek
        </h3>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Lacak dan kelola semua proyek perusahaan
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards akan ditempatkan di sini */}
          <div
            className={`p-5 rounded-xl border ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4
                  className={`font-bold text-lg ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Redesign UI/UX
                </h4>
                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Desain Tim
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                Berjalan
              </span>
            </div>
            <p
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Redesign antarmuka pengguna untuk platform e-commerce dengan fokus
              pada pengalaman pengguna.
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                  Progress
                </span>
                <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  65%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-600">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-gray-800"
                  />
                ))}
              </div>
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Deadline: 15 Des
              </span>
            </div>
          </div>

          {/* Tambahkan lebih banyak kartu proyek di sini */}
        </div>
      </div>

      {/* Timeline proyek, grafik Gantt, dan komponen lainnya akan ditambahkan di sini */}
    </div>
  );
}

// ========== KOMPONEN ANALITIK ==========
// eslint-disable-next-line no-unused-vars
function AnalyticsContent({ darkMode, revenueData, projectStatusData }) {
  return (
    <div className="space-y-6">
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Analitik & Laporan Mendalam
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Performa Pendapatan Per Kuartal
            </h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { quarter: "Q1", revenue: 220000, target: 200000 },
                    { quarter: "Q2", revenue: 305000, target: 280000 },
                    { quarter: "Q3", revenue: 365000, target: 330000 },
                    { quarter: "Q4", revenue: 410000, target: 380000 },
                  ]}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={darkMode ? "#374151" : "#e5e7eb"}
                  />
                  <XAxis
                    dataKey="quarter"
                    stroke={darkMode ? "#9ca3af" : "#6b7280"}
                  />
                  <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                  <Tooltip
                    contentStyle={
                      darkMode
                        ? {
                            backgroundColor: "#1f2937",
                            borderColor: "#374151",
                            color: "white",
                          }
                        : {}
                    }
                    formatter={(value) => [
                      `$${value.toLocaleString()}`,
                      "Pendapatan",
                    ]}
                  />
                  <Legend />
                  <Bar
                    dataKey="revenue"
                    fill="#10B981"
                    name="Pendapatan Aktual"
                  />
                  <Bar
                    dataKey="target"
                    fill="#3B82F6"
                    name="Target Pendapatan"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Metrik Kinerja Utama
            </h4>
            <div className="space-y-4">
              <MetricItem
                darkMode={darkMode}
                label="Tingkat Penyelesaian Proyek"
                value="87%"
                change="+5.2%"
                trend="up"
              />
              <MetricItem
                darkMode={darkMode}
                label="Kepuasan Klien"
                value="94%"
                change="+2.1%"
                trend="up"
              />
              <MetricItem
                darkMode={darkMode}
                label="Waktu Penyelesaian Rata-rata"
                value="18.5 hari"
                change="-3.2 hari"
                trend="down"
              />
              <MetricItem
                darkMode={darkMode}
                label="Retensi Karyawan"
                value="92%"
                change="+1.8%"
                trend="up"
              />
              <MetricItem
                darkMode={darkMode}
                label="Pertumbuhan Pengguna"
                value="34%"
                change="+12.5%"
                trend="up"
              />
              <MetricItem
                darkMode={darkMode}
                label="Rasio Biaya-Pendapatan"
                value="22%"
                change="-3.1%"
                trend="down"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tambahkan lebih banyak analitik dan grafik di sini */}
    </div>
  );
}

// ========== KOMPONEN PENGATURAN ==========
function SettingsContent({ darkMode }) {
  const [settings, setSettings] = useState({
    notifications: true,
    emailReports: true,
    twoFactorAuth: false,
    autoBackup: true,
    darkMode: true,
    language: "id",
    timezone: "Asia/Jakarta",
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div
        className={`rounded-xl p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Pengaturan Sistem
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Pengaturan Umum */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Pengaturan Umum
              </h4>
              <div className="space-y-4">
                <SettingToggle
                  darkMode={darkMode}
                  label="Notifikasi"
                  description="Terima notifikasi untuk aktivitas penting"
                  checked={settings.notifications}
                  onChange={(val) => handleSettingChange("notifications", val)}
                />
                <SettingToggle
                  darkMode={darkMode}
                  label="Laporan Email Mingguan"
                  description="Kirim laporan mingguan ke email Anda"
                  checked={settings.emailReports}
                  onChange={(val) => handleSettingChange("emailReports", val)}
                />
                <SettingToggle
                  darkMode={darkMode}
                  label="Autentikasi Dua Faktor"
                  description="Tambahkan lapisan keamanan ekstra untuk login"
                  checked={settings.twoFactorAuth}
                  onChange={(val) => handleSettingChange("twoFactorAuth", val)}
                />
                <SettingToggle
                  darkMode={darkMode}
                  label="Backup Otomatis"
                  description="Backup data sistem secara otomatis setiap hari"
                  checked={settings.autoBackup}
                  onChange={(val) => handleSettingChange("autoBackup", val)}
                />
              </div>
            </div>

            {/* Pengaturan Tampilan */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Tampilan & Bahasa
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Bahasa
                  </label>
                  <select
                    value={settings.language}
                    onChange={(e) =>
                      handleSettingChange("language", e.target.value)
                    }
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option value="id">Bahasa Indonesia</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Zona Waktu
                  </label>
                  <select
                    value={settings.timezone}
                    onChange={(e) =>
                      handleSettingChange("timezone", e.target.value)
                    }
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    <option value="Asia/Jakarta">WIB (Jakarta)</option>
                    <option value="Asia/Makassar">WITA (Makassar)</option>
                    <option value="Asia/Jayapura">WIT (Jayapura)</option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Panel Informasi Sistem */}
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Informasi Sistem
            </h4>
            <div
              className={`p-5 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <div className="space-y-4">
                <InfoItem
                  darkMode={darkMode}
                  label="Versi Aplikasi"
                  value="v3.2.1"
                />
                <InfoItem
                  darkMode={darkMode}
                  label="Tanggal Rilis"
                  value="15 November 2024"
                />
                <InfoItem
                  darkMode={darkMode}
                  label="Lisensi"
                  value="Enterprise"
                />
                <InfoItem
                  darkMode={darkMode}
                  label="Database"
                  value="PostgreSQL 14.5"
                />
                <InfoItem
                  darkMode={darkMode}
                  label="Server"
                  value="Ubuntu 22.04 LTS"
                />
                <InfoItem
                  darkMode={darkMode}
                  label="Pengguna Aktif"
                  value="247"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <button
                  className={`w-full py-3 rounded-lg font-medium ${
                    darkMode
                      ? "bg-green-700 hover:bg-green-600 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  Simpan Perubahan
                </button>
                <button
                  className={`w-full py-3 rounded-lg font-medium mt-3 ${
                    darkMode
                      ? "bg-gray-600 hover:bg-gray-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  Reset ke Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== KOMPONEN FOOTER ==========
function Footer({ darkMode }) {
  return (
    <footer
      className={`py-6 px-6 border-t ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            &copy; {new Date().getFullYear()} NexusTech. Hak cipta dilindungi.
          </p>
          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Dibangun dengan React & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className={
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Kebijakan Privasi
          </a>
          <a
            href="#"
            className={
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Syarat Layanan
          </a>
          <a
            href="#"
            className={
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Dukungan
          </a>
          <a
            href="#"
            className={
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}

// ========== KOMPONEN HELPER ==========

// Komponen StatCard untuk dashboard
function StatCard({ darkMode, title, value, change, trend, icon, subtitle }) {
  return (
    <div
      className={`rounded-xl p-6 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {title}
          </p>
          <h3
            className={`text-2xl font-bold mt-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {value}
          </h3>
          <div className="flex items-center mt-2">
            {trend === "up" ? (
              <TrendingUp size={16} className="text-green-500 mr-1" />
            ) : (
              <TrendingDown size={16} className="text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {change}
            </span>
            <span
              className={`text-sm ml-2 ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {subtitle}
            </span>
          </div>
        </div>
        <div
          className={`p-3 rounded-lg ${
            darkMode ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

// Komponen MetricCard untuk metrik sistem
function MetricCard({ darkMode, title, value, icon, status }) {
  const getStatusColor = () => {
    switch (status) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return darkMode ? "text-gray-300" : "text-gray-700";
    }
  };

  return (
    <div
      className={`p-4 rounded-xl ${
        darkMode ? "bg-gray-700" : "bg-gray-100"
      } text-center`}
    >
      <div
        className={`inline-flex p-3 rounded-full mb-3 ${
          darkMode ? "bg-gray-600" : "bg-gray-200"
        }`}
      >
        {React.cloneElement(icon, { className: getStatusColor(), size: 24 })}
      </div>
      <h4
        className={`text-lg font-bold mb-1 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {value}
      </h4>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {title}
      </p>
    </div>
  );
}

// Komponen SettingToggle untuk pengaturan
function SettingToggle({ darkMode, label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p
          className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          {label}
        </p>
        <p
          className={`text-sm mt-1 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
          checked ? "bg-green-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

// Komponen InfoItem untuk pengaturan
function InfoItem({ darkMode, label, value }) {
  return (
    <div className="flex justify-between">
      <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
        {label}
      </span>
      <span
        className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        {value}
      </span>
    </div>
  );
}

// Komponen MetricItem untuk analitik
function MetricItem({ darkMode, label, value, change, trend }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-700/30">
      <div>
        <p
          className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          {label}
        </p>
        <div className="flex items-center mt-1">
          {trend === "up" ? (
            <TrendingUp size={14} className="text-green-500 mr-1" />
          ) : (
            <TrendingDown size={14} className="text-red-500 mr-1" />
          )}
          <span
            className={`text-xs ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {change} dari bulan lalu
          </span>
        </div>
      </div>
      <span
        className={`text-lg font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

// Ikon untuk dark/light mode
function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}

// ========== STYLE GLOBAL ==========
// Tambahkan ini ke file CSS global atau buat komponen style
// eslint-disable-next-line no-unused-vars
const globalStyles = `
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1f2937;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
  
  /* Smooth transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
  
  /* Glass effect */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .dark .glass {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
=======
>>>>>>> 13c4f06d77548dccaf8f3e3a3669ca76419f32dc
