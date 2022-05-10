import logo from './logo.svg'
import './App.css'

import Navigation from './components/navbar'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="section1">
        <Landing />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Services />
      </div>
      <div id="section4">
        <Gallery />
      </div>
      <div id="section5">
        <Testimonials />
      </div>
      <div id="section6">
        <Contact />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
