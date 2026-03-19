import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Options from "./components/Options";
import FAQ from "./components/FAQ";
import FormsChoose from "./components/FormsChoose";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Options />
        <FAQ />
        <FormsChoose />
      </main>
      <Footer />
    </div>
  );
}

export default App;