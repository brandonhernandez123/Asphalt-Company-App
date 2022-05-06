import logo from './logo.svg'
import './App.css'

import Navigation from './components/navbar'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'

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
        <h1>Section 5</h1>
      </div>
      <div id="section6">
        <h1>Section 6</h1>
      </div>
    </div>
  )
}

export default App
