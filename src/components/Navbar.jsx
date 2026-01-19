/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Bell } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a5ea8] shadow-lg py-2" : "bg-[#0a5ea8] py-3"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="mb-2">
            <div className="relative inline-block">
              {/* TEKS ATAS: yayasan */}
              <div className="flex items-end mb-1 ml-5">
                <span className="text-[17px] font-normal tracking-tight pt-1 text-white">
                  yayasan
                </span>
                <span className="text-[28px] font-extrabold tracking-tight leading-none ml-2 text-white">
                  ASTRA
                </span>
              </div>

              {/* BARIS BAWAH: ASTRA + garis + titik */}
              <div className="flex items-baseline gap-2 mt-[-4px]">
                {/* ASTRA */}

                {/* GARIS + TITIK di kanan ASTRA */}
                <div className="flex items-center">
                  <div className="h-[2px] w-[220px] bg-white"></div>
                  <span className="ml-0 w-[8px] h-[8px] rounded-full bg-white"></span>
                </div>
              </div>

              {/* SUBTITLE di bawah ASTRA */}
              <div className="ml-0.5 mt-1">
                <p className="text-[10px] font-medium tracking-wide text-white">
                  Yayasan Pendidikan Astra Michael D. Ruslim
                </p>
              </div>
            </div>
          </div>

          {/* Desktop - Search and Contact */}
          <div className="hidden lg:flex items-center ml-auto space-x-6">
            <div className="relative w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari program .."
                className="w-full pl-12 pr-4 py-2.5 bg-white/95 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent shadow-sm text-gray-800 placeholder-gray-500"
              />
            </div>
            <a
              href="#"
              className="px-5 py-2.5 bg-red-600/30 hover:bg-red-600/25 backdrop-blur-md text-red-100 hover:text-white rounded-lg font-medium transition-all duration-200 border border-red-500/40 whitespace-nowrap shadow-sm hover:shadow"
            >
              Keluar
            </a>{" "}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button className="relative p-3 left-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 group">
            <Bell className="w-5 h-5" />

            {/* Notification Badge */}
            <span className="absolute -top-2 -right-1 mr- w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-white">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu with Search */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 pt-2 border-t border-white/20">
            {/* Mobile Search Bar */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari program, berita..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
              />
            </div>

            {/* Mobile Links */}
            <div className="space-y-2">
              <a
                href="#"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                Beranda
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                Program
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                Kontak
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
