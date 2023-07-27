import React, { useState, useEffect } from 'react';
import { Row, Card} from 'react-bootstrap'

const CardComponent = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992); // Adjust the breakpoint as per your requirement
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events and update the state accordingly
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <div className='card-container'>
        <Row xs={1} className='g4 justify-content-center align-items-center'>
              <Card className='me-2' style={{ width: '13rem',height: '16rem' }}>
              <Card.Body>
                <Card.Title>1.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                Rents collected are paid out on a quarterly basis after expenses.* Projected Return: 4 - 6% annually
                </Card.Text>
              </Card.Body>
            </Card>
              <Card className='me-2' style={{ width: '13rem', height: '16rem' }}>
              <Card.Body>
                <Card.Title>2.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                Equity projections calculated at 3% appreciation per year. Paid out at the sale of the home 7-10 after purchase. Projected Annual Return: 4 - 7%
                </Card.Text>
              </Card.Body>
            </Card>
              <Card className='me-2' style={{ width: '13rem', height: '16rem' }}>
              <Card.Body>
                <Card.Title>3.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                After rents and equities are realized: Projected Annual Return: 7-10%
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
        </div>

      ) : (
        <div>
        {/* Card content in a regular block layout on mobile */}
        <div className="card-content">
          <p>1. Rents collected are paid out on a quarterly basis after expenses (Projected return is 4% - 6% annually and preferred return is 4%)
This is pro-rated as a percentage owned (i.e., if you own 10% of the fund, you will receive 10% of the net rent proceeds)</p>
<p>2. Equity projections are calculated at 3% appreciation per year
Will be paid out at the sale of the home 7-10 after purchase
Projected to be 4% - 7% annual return and the preferred return is 4%</p>
<p>3. After rents and equity are realized, the return is projected to be 7% - 10% annually with an 8% preferred return
</p>
        </div>
      </div>)}


    </>
  );
};

export default CardComponent;
