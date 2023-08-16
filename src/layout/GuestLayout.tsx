import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/layout/Navbar"), {
  ssr: false,
});
import Footer from "../components/layout/Footer";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
