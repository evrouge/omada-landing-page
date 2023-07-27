// ============= IMPORTS ==========================
import React from 'react';
import './styles.css'
import image from './photos/utah.png'
import image2 from './photos/icons.png'
import image3 from './photos/investtimeline.png'
import image4 from './photos/howitworks.png'
import photo from './photos/letter.png'
import image5 from './photos/qna.png'
import mainhouse from './photos/1.png'
import CardComponent from './CardComponent';
// ==================================================

const HeroSection = () => {

  return (
    <>
    <div className="component-below">
      <div class="split-container1">
        <h1 class="text" id='omadatitle'>Omada Capital Management</h1>
        <img src={mainhouse} class="mainhouse"></img>
      </div><br/>
      <img src={photo} class='helloletter'></img><br/>
      <h1 id="opportunity" class="titlestyle">The Opportunity</h1><br/>
      <div className='split-container1'>
        <div className='text'>
          <h2 class='why-invest'>Why invest?</h2><br/>
          <p>Low inventory of single-family homes caused home prices to rise</p>
          <p>Hgher interest rates slowed down buyers</p>
          <p>Sellers won't lower prices of gives up low rates</p>
          <p>Homes for sale inventory drops</p>
          <p>More people remain renters for longer</p>
          <p>This means more income for investment groups who own single-fampy homes</p>
          <p>This situation is especially potent in Utah with rapid growth</p>
      </div>
        <img src={image} alt="utah"></img><br/><br/>
      </div>
        <div class="rates"><br/>
          <h3>Rates will increase or stablize, and prices will continue to stay steady (protecting the equity position). Quality rental applications will increase. Buying during the dip now provides the best of both worlds. </h3>
          <h2>14%</h2>
          <h3>Rent Increase*</h3>
          <p>Rent spikes during the recession and during the boom.</p>
          <h2>10%</h2>
          <h3>Property Appreciation*</h3>
          <p>Bounce back from this dip is likely to increase property values.</p>
          <h2>COST</h2>
          <h3>As a Hedge vs Taxes*</h3>
          <p>Dividents show loss now, but income when property values return.</p><br/>
        </div>
        <br/>
        <h1>The Omada Difference</h1><br/>
        <img src={image2} class='qanda'></img>
        <br/><br/><hr/><br/>
        <img src={image3} class="qanda"></img><br/><br/>
    {/* Section for TEAM */}
    <div class='teamcolor'>
      <h1 id="team" class="titlestyle">The Team</h1>
      <h2 class='makeitbold'>Experience Makes A Difference</h2>
      <h3>Founded by the leading real estate team in Utah for the last 20 years.</h3>
      <ul>
        <li>Over 10,000 property transactions</li>
        <li>Best-equipped to indentify income-generating properties at the right price.</li>
      </ul>
      <h2 class='different'>- More Convenient -</h2>
      <h2 class='different'>- More Profitable -</h2>
      <p>Investing with OMADA is simpler, more convenient, and potentially more profitable compared to buying investment property directly. It’s a great option for those who want to invest in real estate but don't have the time, money, or expertise to manage properties on their own.</p>
      <p>Investing in the fund provides diversification and reduces risk as your money is spread across multiple properties. And it's more accessible and affordable than buying an individual investment property.</p>
      <p>Would it make sense to have a passive investment that doesn’t require much time or effort–and where you receive regular payouts based on your percentage of the fund?</p><br/>
    </div>
      <br/><img src={image4} class="qanda"></img><br/><br/>
      {/* Section for PROFIT */}
      <div class="rates">
        <h1 id="profit" class='titlestyle'>The Profit</h1>
        <p class='text'>OMADA invests in real estate for regular people to get a good return on their investment. You invest (buy shares) in OMADA, and they pay you quarterly dividends based on the percentage of the investment that is yours.</p>
        <div>
          <div class='split-container1'>
            <div class="text">
              <h2 class='why-invest'>How You Get Paid:</h2>
            </div>
            {/* Card component here so I can use the ternary operator in component for this section */}
            <CardComponent/>
          </div>
        </div>
      </div>
      <br/>
      <h2 class="q-and-a-title">Q & A</h2>
      <img src={image5} className="qanda"></img>
      </div>
    </>
  );
};

export default HeroSection;
