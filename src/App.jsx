import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyLandingPage from './components/WhyLandingPage/WhyLandingPage';
import Services from './components/Services/Services';
import LaunchOffer from './components/LaunchOffer/LaunchOffer';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Process from './components/Process/Process'; 
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyLandingPage />
      <Services />
      <LaunchOffer />
      <Technologies />
      <Portfolio />
      <Pricing />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
