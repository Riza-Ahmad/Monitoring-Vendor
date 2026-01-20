/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Search, Menu, X, Bell, LogOut, LogIn } from "lucide-react";
import Logo from "../assets/images/SATUindonesia.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a5ea8] shadow-lg py-3" : "bg-[#0a5ea8] py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              {/* Logo Image */}
              <div className="flex-shrink-0 mr-2">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="Logo SATU Indonesia Cerdas"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text Logo */}
              <div className="relative">
                <div className="flex items-end mb-1">
                  <span className="text-[16px] font-normal tracking-tight text-white">
                    yayasan
                  </span>
                  <span className="text-[28px] font-extrabold tracking-tight leading-none ml-1 text-white">
                    ASTRA
                  </span>
                </div>

                <div className="flex items-center mt-[-2px]">
                  <div className="h-[1.5px] w-[180px] bg-white"></div>
                  <span className="ml-1 w-[6px] h-[6px] rounded-full bg-white"></span>
                </div>

                <div className="mt-1">
                  <p className="text-[10px] font-medium tracking-wide text-white/90">
                    Yayasan Pendidikan Astra Michael D. Ruslim
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Search Bar */}
              <div className="relative">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Search
                      size={18}
                      className="text-gray-400 transition-all duration-300 
                                  group-hover:text-blue-500 
                                  group-focus-within:text-blue-600 
                                  group-focus-within:scale-110"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Cari ..."
                    className="w-56 pl-12 pr-10 py-2.5 bg-white/90 backdrop-blur-xl rounded-2xl 
              border-2 border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]
              hover:bg-white hover:border-blue-100 hover:shadow-[0_15px_40px_rgb(59,130,246,0.15)]
              focus:bg-white focus:border-blue-300 focus:shadow-[0_15px_40px_rgb(59,130,246,0.25)]
              focus:outline-none focus:ring-4 focus:ring-blue-400/20
              text-sm text-gray-800 placeholder-gray-500/70
              transition-all duration-500 ease-out
              group-hover:w-64
              focus:w-64"
                  />

                  {/* Micro animation hint */}
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"></div>

                  {/* Glow effect */}
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-sm 
                  opacity-0 group-hover:opacity-50 group-focus-within:opacity-80 
                  transition-opacity duration-500 -z-10"
                  />
                </div>
              </div>

              {/* Notification Bell */}
              <button className="relative p-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white border border-white">
                  3
                </span>
              </button>

              {/* Masuk Button */}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium text-sm transition-colors border border-white/30"
              >
                <LogIn size={16} />
                Masuk
              </a>

              {/* Keluar Button */}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm transition-colors"
              >
                <LogOut size={16} />
                Keluar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 pt-2 border-t border-white/30">
              {/* Mobile Logo */}
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={Logo}
                      alt="Logo SATU Indonesia Cerdas"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-end">
                    <span className="text-[14px] font-normal text-white">
                      yayasan
                    </span>
                    <span className="text-[22px] font-bold ml-1 text-white">
                      ASTRA
                    </span>
                  </div>
                  <p className="text-[9px] text-white/80 mt-0.5">
                    Yayasan Pendidikan Astra Michael D. Ruslim
                  </p>
                </div>
              </div>

              {/* Mobile Search Bar */}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari.."
                  className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm text-gray-800"
                />
              </div>

              {/* Mobile Actions */}
              <div className="space-y-3">
                {/* Notification Bell Mobile */}
                <button className="relative w-full p-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm flex items-center justify-center">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5" />
                    <span className="ml-2 text-sm">Notifikasi</span>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white border border-white">
                      3
                    </span>
                  </div>
                </button>

                {/* Masuk Button Mobile */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium text-sm transition-colors border border-white/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn size={16} />
                  Masuk
                </a>

                {/* Keluar Button Mobile */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogOut size={16} />
                  Keluar
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer untuk konten agar tidak tertutup navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
