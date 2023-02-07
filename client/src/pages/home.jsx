import Header from "../components/header"
import About from "./about"
import Contact from "./contact"
import Gallery from "./gallery"
import Footer from "../components/footer"

function Home() {
  return (
    <div className="home">
      <Header />
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home