import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Timeline from './components/Timeline'
import Filmography from './components/Filmography'
import Music from './components/Music'
import Awards from './components/Awards'
import Gallery from './components/Gallery'
import Videos from './components/Videos'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Biography />
      <Timeline />
      <Filmography />
      <Music />
      <Awards />
      <Gallery />
      <Videos />
      <Footer />
    </div>
  )
}

export default App
