import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import PropertyListing from './PropertyListing';
import Footer from './Footer';
import CardComponent from './CardComponent'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PropertyListing />
      <Footer />
      <CardComponent />
    </div>
  );
}

export default App;
