import React, {useState, useEffect} from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';


const Cardsss = () => {
   
    const [data,setData] = useState([])

    const getData = () => {
        fetch('data.json',{headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((response)=> {
            return response.json()
        }).then((myjson) => {
           
            setData(myjson)
        })
    }

    useEffect(() => {
        getData()
    }, [])
   return (
    <div> 
    {
        data && data.length > 0 && data.map((the) => {
            return (
             <div>

      <Row>
      <Col  key={the.sid} >

      
<Card className='flex-fill' style={{ width: '18rem'}}>
<Card.Img variant="top" src="https://xlri.edu/images/xol-2022/XOH22002.jpg" />
<Card.Body align='center' >
<Card.Title > <b>{the.name}</b> </Card.Title>
<Card.Text>
  {the.email}
</Card.Text>
<a href={the.linkedin_profile}><FaLinkedin /></a>
</Card.Body>
</Card>
</Col>
      <Col  key={the.sid} >

      
<Card className='flex-fill' style={{ width: '18rem'}}>
<Card.Img variant="top" src="https://xlri.edu/images/xol-2022/XOH22002.jpg" />
<Card.Body align='center' >
<Card.Title > <b>{the.name}</b> </Card.Title>
<Card.Text>
  {the.email}
</Card.Text>
{/* <Button variant="primary">Go somewhere</Button> */}
<a href={the.linkedin_profile}><FaLinkedin /></a>
</Card.Body>
</Card>
</Col>
      <Col  key={the.sid} >

      
<Card className='flex-fill' style={{ width: '18rem'}}>
<Card.Img variant="top" src="https://xlri.edu/images/xol-2022/XOH22002.jpg" />
<Card.Body align='center' >
<Card.Title > <b>{the.name}</b> </Card.Title>
<Card.Text>
  {the.email}
</Card.Text>
{/* <Button variant="primary">Go somewhere</Button> */}
<a href={the.linkedin_profile}><FaLinkedin /></a>
</Card.Body>
</Card>
</Col>
</Row>
  <br /> <br />
             </div>

             
            )
        })
    }

    </div>
  )
}

export default Cardsss