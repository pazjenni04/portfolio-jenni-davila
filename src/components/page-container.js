//to establish routes
import React, { useState } from "react";
//pages that are being imported to be rendered
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";

//will render all pages with routes
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Footer />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and updating it with handlepagechange */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling rednPage which renders a component - About, Portfolio, Contact  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
