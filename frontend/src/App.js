import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedPets from "./components/FeaturedPets";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init({
  duration:1000
});

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <FeaturedPets />
      <ContactForm />
      <Footer />
      
    </div>
  );
}

export default App;




