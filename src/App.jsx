import './App.css'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Services from './components/Services'
import SliderComponent from './components/SliderComponent'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
// import LandingModal from './components/Modals/LandingModal'
import Teachers from './components/Teachers'
import Test from './components/Test'





function App() {
  const notify = () => toast("Wow so easy !");

  
  
  return (
    <>
    <ToastContainer />
    <Navbar />
    
    <main>
{/* <LandingModal /> */}
        
    <SliderComponent /> 
    <Test />
    <Teachers />
    <Services />
    </main>
     
   <Footer />

    </>
  )
}

export default App
