import './App.css'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Services from './components/Services'
import SliderComponent from './components/SliderComponent'
import Teachers from './components/Teachers'



function App() {
  

  return (
    <>
    <Navbar />
    <main>
    <SliderComponent /> 
    <Teachers />
    <Services />
    </main>
     
   <Footer />

    </>
  )
}

export default App
