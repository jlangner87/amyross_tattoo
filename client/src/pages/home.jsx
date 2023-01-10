import About from "./about"
import Contact from "./contact"
import Gallery from "./gallery"

function Home() {
  return (
    <div className="page">
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default Home