import './App.css'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Services from './components/Services'
import SliderComponent from './components/SliderComponent'
import Teachers from './components/Teachers'



function App() {
  
  const userTypeFromStorage = localStorage.getItem("userType");
  const accessToken = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");
  const storedProfileData = JSON.parse(localStorage.getItem("profileData"));

  console.log(userTypeFromStorage);
  console.log(accessToken);
  console.log(user);
  console.log(storedProfileData);
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
