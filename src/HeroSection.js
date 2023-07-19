import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css'

const HeroSection = () => {
  return (
    <>
      <h1>Omada</h1>
      <p>
        Find your dream property today.
      </p>
      <Button variant="primary" href="#properties">View Properties</Button>
    </>
  );
};

export default HeroSection;
