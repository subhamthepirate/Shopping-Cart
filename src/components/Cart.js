import React from 'react'
import { Navbar,Container,Row, Card, Button, CardGroup } from "react-bootstrap"
import {useState} from 'react'
import { Link,useLocation } from "react-router-dom"
import { InfinitySpin } from  'react-loader-spinner'
import { FaShoppingCart,FaCartPlus,FaStar,FaDollarSign } from 'react-icons/fa';

function Cart() {
  let totalvalue=0;
    const [states, setStates] = useState([]);
    const location = useLocation()
  const filter = location.state
  console.log(filter)
return (
  <div>
  <Navbar expand="lg" variant="light" bg="light" sticky="top" >
  <Container>
    <Navbar.Brand href="#">Shopping Kart</Navbar.Brand>
    <span>
    <Link to={{pathname:"/cart" }}><FaShoppingCart /><sup id="cartvalue">{filter.length}</sup></Link>
    </span>
  </Container>
  </Navbar>
  {filter.length?
  <Row xs={2} md={2} className="g-6">
      { filter.map((category,index) =>
          <CardGroup style={{padding: 10 + 'px'}}>
            {
            console.log(totalvalue+=category.price)}
          {null}
          <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src={category.image} width="20px" length="20px"/>
          <Card.Body>
              {console.log(category)}
          <Card.Title>{category.title}</Card.Title>
          <Card.Text><h5>Price:</h5>{category.price} <FaDollarSign/></Card.Text>
          <Button variant="primary">+</Button>
          </Card.Body>
          <Card.Footer>
              <small className="text-muted">{category.category}</small>
          </Card.Footer>
          </Card>
      </CardGroup>
  )}
  
    </Row>
  :
      <InfinitySpin
      height="100"
      width="100"
      color='grey'
      ariaLabel='loading' />
}
<h3>Total value of the cart : {totalvalue}</h3>
</div>
  )
}

export default Cart