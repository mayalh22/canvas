import Header from "./components/Header"
import About from "./components/About"
import Options from "./components/Options"
import FAQ from "./components/FAQ"
import FormsChoose from "./components/FormsChoose"
import Footer from "./components/Footer"
import Stars from "./components/Stars"

export default function App() {
  return (
    <div className="app">
      <Stars />
      <Header />
      <main>
        <About />
        <Options />
        <FAQ />
        <FormsChoose />
      </main>
      <Footer />
    </div>
  )
}