import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Cards.css'
// import './App.css';


function KitchenSinkExample() {
  return (
    <>
    <div className='box' style={{display:'flex',margin:'20px', display: 'grid',
    gridTemplateColumns:'repeat(2,2fr)',alignItems: 'center'}}>
     <div className='card' style={{margin:'10px',width:'45%'}}>
     <Card style={{ width: '18rem',background: 'rgba(0,0,0,0.8)',color:'white' }}>
      <Card.Img variant="top" src="https://www.thomascook.in/images/site-banners/small-tile-dubai.jpg" />
      <Card.Body>
        <Card.Title>Dubai</Card.Title>
        <Card.Text>
        Truly a global city of the future, Dubai is less of a city and more of an experience. And the experience that is Dubai, is best
explored with A2Z India's Dubai tour packages.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h3>Dubai Packages</h3></ListGroup.Item>
        <ListGroup.Item>Starting Price</ListGroup.Item>
        <ListGroup.Item>₹47,999.00</ListGroup.Item>
      </ListGroup>
     
    </Card>
</div>
<div className='card' style={{margin:'10px',width:'45%'}}>
     <Card style={{ width: '18rem',background: 'rgba(0,0,0,0.8)',color:'white' }}>
      <Card.Img variant="top" src="https://www.thomascook.in/images/site-banners/switzerland.jpg" />
      <Card.Body>
        <Card.Title>Switzerland</Card.Title>
        <Card.Text>
        A trip that spells romance, a laid-back or a budget holiday, no matter what you are seeking, A2Z has the required Switzerland tour packages for you
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h4>Switzerland Packages</h4></ListGroup.Item>
        <ListGroup.Item>Starting Price</ListGroup.Item>
        <ListGroup.Item>₹93,400.00</ListGroup.Item>
      </ListGroup>
    </Card>
</div>
<div style={{margin:'10px',width:'50%'}}>
     <Card style={{ width: '18rem',background: 'rgba(0,0,0,0.8)',color:'white' }}>
      <Card.Img variant="top" src="https://www.thomascook.in/images/site-banners/Paris.jpg" />
      <Card.Body>
        <Card.Title>Paris</Card.Title>
        <Card.Text>
        Through your first trip to Paris is going to be all about the Eiffel Tower, there is a lot
in this city of love that you need to explore Paris City.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h3>Paris Packages</h3></ListGroup.Item>
        <ListGroup.Item>Starting Price</ListGroup.Item>
        <ListGroup.Item>₹51,500.00</ListGroup.Item>
      </ListGroup>
      
    </Card>
</div>
<div style={{margin:'10px',width:'50%'}}>
     <Card style={{ width: '18rem',background: 'rgba(0,0,0,0.8)',color:'white' }}>
      <Card.Img variant="top" src="https://www.thomascook.in/images/site-banners/mauritius.jpg" />
      <Card.Body>
        <Card.Title>Mauritius</Card.Title>
        <Card.Text>
        Let A2Z Company plan the ideal vacation to Mauritius City that promises you not just a holiday, but memories that will last a lifetime Forever.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h3>Mauritius Packages</h3></ListGroup.Item>
        <ListGroup.Item>Starting Price</ListGroup.Item>
        <ListGroup.Item>₹30,500.00</ListGroup.Item>
      </ListGroup>
    </Card>
</div>
</div>
    </>
   
    
    
  );
}

export default KitchenSinkExample;