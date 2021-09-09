import React from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Parent() {
  return (
    <div className="material-template">
      <main className="pt-page pt-page-current" data-id="home">
        <div className="section-inner start-page-content">
          <Header />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Parent;
