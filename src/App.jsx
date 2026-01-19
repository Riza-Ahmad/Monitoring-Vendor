/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../../Monitoring-Vendor/src/components/Footer";
import Navbar from "../../Monitoring-Vendor/src/components/Navbar";
import Sidebar from "../../Monitoring-Vendor/src/components/Sidebar";

const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Navbar />
      <Sidebar />
      <main className="flex-grow"></main>

      <Footer />
    </div>
  );
};

export default OnboardingPage;
