/* eslint-disable no-unused-vars */
import React from "react";
import FullPage from "../components/FullPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import KarakterImage from "../assets/images/4karakter.png";

const OnboardingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content Area dengan FullPage */}
      <div className="flex flex-1">
        {/* Menggunakan FullPage component */}
        <FullPage
          bgGradient="bg-gradient-to-b from-[#0a5ea8] via-[#1e6fd9] to-blue-100"
          className="text-white"
        >
          <div className="h-full flex flex-col">
            {/* Simple Title */}
            <div className="pt-8 text-center"></div>

            {/* Main Area */}
            <div className="flex-grow flex flex-col justify-end">
              {/* Compact Content Card - Menempel Gambar */}
              <div className="mb-1 px-4">
                <div className="max-w-md mx-auto">
                  <div className="p-4">
                    {/* Title - Top Most Separated */}
                    {/* Combined Content - Positioned Lower */}
                    <div className="max-w-md mx-auto">
                      <div className="p-4">
                        {/* Title - Extra Large */}
                        <div className="text-center mb-8">
                          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold">
                            SATU Indonesia Cerdas{" "}
                          </h1>
                        </div>

                        {/* Single Combined Sentence */}
                        <div className="text-center mt-10">
                          <p className="text-base md:text-lg text-white/90 leading-relaxed">
                            <span className="italic">
                              Semangat Astra Terpadu Untuk Indonesia Cerdas
                            </span>{" "}
                            melalui{" "}
                            <span className="font-bold text-white">
                              Yayasan Astra - YPA Michael D. Ruslim
                            </span>
                            , yang merupakan wujud nyata Pilar Pendidikan dalam
                            Kontribusi Sosial Keberlanjutan Astra, yaitu{" "}
                            <span className="font-bold text-blue-100">
                              Astra Untuk Indonesia Cerdas
                            </span>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Width Image */}
              <div className="w-full">
                <img
                  src={KarakterImage}
                  alt="SATU Indonesia Cerdas"
                  className="w-full max-w-7xl mx-auto"
                  style={{
                    objectFit: "contain",
                    maxHeight: "75vh",
                  }}
                />
              </div>
            </div>
          </div>
        </FullPage>
      </div>
      <FullPage
        bgGradient="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
        center={true}
        padding="p-8"
        className="text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sejahtera Bersama Bangsa
          </h1>

          <div className="w-48 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mb-10 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed font-light">
              Mendukung revitalisasi pendidikan vokasi di Indonesia dalam
              penyiapan tenaga kerja kompeten berdaya saing global dan
              menghasilkan teknologi terapan yang dibutuhkan industri, relevan
              dan sejalan dengan{" "}
              <span className="font-semibold text-white">
                Astra Untuk Hari Ini dan Masa Depan Indonesia
              </span>
              .
            </p>
          </div>
        </div>
      </FullPage>
      <FullPage />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OnboardingPage;
