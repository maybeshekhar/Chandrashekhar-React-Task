import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import Cardsss from './Cardsss';


const Contents = () => {
  return (


    
    <div className='container'>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
             <Button variant="outline-dark"><FaSearch /></Button>
            </Form>

        <br /> <br />
   
   <Cardsss />
   

     </div>
  )
}

export default Contents