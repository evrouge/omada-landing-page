import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css'
import image from './photos/utah.png'
import image2 from './photos/icons.png'
import image3 from './photos/investtimeline.png'

const HeroSection = () => {
  return (
    <>
    <div className="component-below">
      <h1>Omada Capital Management</h1>
      <h1>Need to put a photo of a house here</h1>
      <h1>THE OPPORTUNITY</h1>
        <ul>Why Invest?
        <li>Low inventory of single-family homes caused home prices to rise</li>
        <li>Higher interest rates slowed down buyers</li>
        <li>Sellers won't lower prices of gives up low rates</li>
        <li>Homes for sale inventory drops</li>
        <li>More people remain renters for longer</li>
        <li>This means more income for investment groups who own single-family homes</li>
        <li>This situation is especially potent in Utah with rapid growth</li>
        </ul>
        <img src={image} alt="utah"></img>
        <div>
          <h3>Rates will increase or stablize, and prices will continue to stay steady (protecting the equity position). Quality rental applications will increase. Buying during the dip now provides the best of both worlds. </h3>
        </div>
        <div>
          <h2>14%</h2>
          <h3>Rent Increase*</h3>
          <p>Rent spikes during the recession and during the boom.</p>
        </div>
        <div>
          <h2>10%</h2>
          <h3>Property Appreciation*</h3>
          <p>Bounce back from this dip is likely to increase property values.</p>
        </div>
        <div>
          <h2>COST</h2>
          <h3>As a Hedge vs Taxes*</h3>
          <p>Dividents show loss now, but income when property values return.</p>
        </div>
        <h1>The Omada Difference</h1>
        <img src={image2}></img>
        <img src={image3}></img>
      <h1>THE TEAM</h1>

      <h1>THE PROFIT</h1>

      <Button variant="primary" href="#properties">View Properties</Button>
      </div>
    </>
  );
};

export default HeroSection;
