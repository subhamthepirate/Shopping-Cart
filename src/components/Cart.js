import React from 'react'
import { Navbar,Container,Row, Card, Button, CardGroup } from "react-bootstrap"
import {useState,useEffect} from 'react'
import { Link,useLocation } from "react-router-dom"
//import { InfinitySpin } from  'react-loader-spinner'
import { FaShoppingCart,FaCartArrowDown,FaDollarSign } from 'react-icons/fa';


  
function Cart() {
  
  const [states, setStates] = useState([]);
  const [noitems, setnoitems] = useState(-1);
  const location = useLocation()
  let filter
  let totalvalue=0
  
  useEffect(() => {
    if(location.state)
    {setStates(location.state)
    setnoitems(location.state.length)}
    });
  console.log(filter)
  const sub = ((e)=>{
    console.log(e.id);
    
   let abcd = location.state;
   abcd.map((a,index)=>{
      {console.log(a.id )}
      if(abcd[index].id == e.id)
      {abcd.splice(index, 1)}
    })
    setStates(abcd)
    setnoitems(states.length);
    document.getElementById("cartvalue").innerText = noitems;
  })
return (
  <div>
  <Navbar expand="lg" variant="light" bg="light" sticky="top" >
  <Container>
    <Navbar.Brand href="#">Shopping Kart</Navbar.Brand>
    <Link to={{pathname:"/"}}><Button variant="primary">Home</Button></Link>
    <span>
    <Link to={{pathname:"/cart" }}><FaShoppingCart /><sup id="cartvalue">{noitems}</sup></Link>
    </span>
  </Container>
  </Navbar>
  {noitems?
  <Row xs={2} md={2} className="g-6">
      { states.map((category) =>
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
          <Button variant="primary" onClick={()=>sub(category)}><FaCartArrowDown/></Button>
          </Card.Body>
          <Card.Footer>
              <small className="text-muted">{category.category}</small>
          </Card.Footer>
          </Card>
      </CardGroup>
  )}
  
    </Row>
  :
  <p>No items to show</p>
      // <InfinitySpin
      // height="100"
      // width="100"
      // color='grey'
      // ariaLabel='loading' />
}
<h3>Total value of the cart : {totalvalue}</h3>
</div>
  )
}

export default Cart