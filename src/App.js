import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import PropertyListing from './PropertyListing';
import Footer from './Footer';
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PropertyListing />
      <Footer />
    </div>
  );
}

export default App;
