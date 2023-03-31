import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaRedoAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div> 
<div align='center'>

<Button variant="light"> <FaRedoAlt /> Load More</Button>{' '}
</div>
<br /> <br />

         <Card className="text-center">
     
      <Card.Body>
        <Card.Title>Quick Links</Card.Title>
        <br />
        <Card.Title> <b> About XLRI | All Programs | Key Benefits | Contact Us </b></Card.Title>
        <br /> <br />
        <Card.Text>
          Follow Us On
        </Card.Text>
        <Card.Text>
         <FaLinkedin /> | <FaInstagram /> | <FaFacebookSquare />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">© 2023 XLRI - Xavier School of Management. All rights reserved. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Terms & Conditions 
</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer