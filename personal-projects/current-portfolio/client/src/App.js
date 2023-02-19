import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Hamburger from './components/Hamburger'

function App() {
  return (
    <div className="App">
      <Header />
      <Hamburger />
      <main>
        <Home />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
