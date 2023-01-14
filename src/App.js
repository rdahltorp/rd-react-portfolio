import React from "react";
import Navigation from "./components/Header/navigation"
import PageHandler from "./components/PageHandler"
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <PageHandler />
      </main>
      <Footer />
    </div>
  );
}

export default App;
