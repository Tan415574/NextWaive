import React from 'react';
import './Styles/Styles.css';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Services from './components/Services';
import Package  from './components/Package';
import Booking  from './components/Booking';
import Footer   from './components/Footer';

function App() {
  return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Package />
        <Booking />
        <Footer />
      </>
  );
}

export default App;