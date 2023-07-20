import React from 'react';
import './styles.css'
import image from './photos/utah.png'
import image2 from './photos/icons.png'
import image3 from './photos/investtimeline.png'
import image4 from './photos/howitworks.png'
import photo from './photos/letter.png'
import image5 from './photos/qna.png'

const HeroSection = () => {
  return (
    <>
    <div className="component-below">
      <h1>Omada Capital Management</h1>
      <h1>Need to put a photo of a house here</h1>
      <img src={photo}></img>
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
      <h2>Experience Makes A Difference</h2>
      <h3>Founded by the leading real estate team in Utah for the last 20 years.</h3>
      <ul>
        <li>Over 10,000 property transactions</li>
        <li>Best-equipped to indentify income-generating properties at the right price.</li>
      </ul>
      <h2>More Convenient</h2>
      <h2>More Profitable</h2>
      <p>Investing with OMADA is simpler, more convenient, and potentially more profitable compared to buying investment property directly. It’s a great option for those who want to invest in real estate but don't have the time, money, or expertise to manage properties on their own.</p>
      <p>Investing in the fund provides diversification and reduces risk as your money is spread across multiple properties. And it's more accessible and affordable than buying an individual investment property.</p>
      <p>Would it make sense to have a passive investment that doesn’t require much time or effort–and where you receive regular payouts based on your percentage of the fund?</p>
      <img src={image4}></img>
      <h1>THE PROFIT</h1>
      <h2>How You Get Paid</h2>
      <p>OMADA invests in real estate for regular people to get a good return on their investment. You invest (buy shares) in OMADA, and they pay you quarterly dividends based on the percentage of the investment that is yours.</p>
      <h3>1.</h3>
      <p>Rents collected are paid out on a quarterly basis after expenses.*</p>
      <p>Projected Return: 4 - 6% annually</p>
      <h3>2.</h3>
      <p>Equity projections calculated at 3% appreciation per year.</p>
      <p>Paid out at the sale of the home 7-10 after purchase</p>
      <p>Projected Annual Return: 4 - 7%</p>
      <h3>3.</h3>
      <p>After rents and equities are realized: </p>
      <p>Projected Annual Return: 7-10%</p>
      <img src={image5}></img>
      </div>
    </>
  );
};

export default HeroSection;
