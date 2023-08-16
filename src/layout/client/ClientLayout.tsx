import React from "react";
import withClientProtection from "../../hoc/client/withClientAuth";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default withClientProtection(ClientLayout);
