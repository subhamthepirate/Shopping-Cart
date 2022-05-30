import React from 'react'
import { Navbar,Container,Row, Card, Button, CardGroup } from "react-bootstrap"
import {useEffect,useState} from 'react'
import { Link,useLocation } from "react-router-dom"
import axios from 'axios'
import { InfinitySpin } from  'react-loader-spinner'
import { FaShoppingCart,FaCartPlus,FaStar,FaDollarSign } from 'react-icons/fa';
import { CartProvider, useCart } from "react-use-cart";

function Products() {
  const location = useLocation()
  const filter = location.state
  console.log(filter)
  const [addItem, setaddItem] = useState([]);
  const [states, setStates] = useState([]);
  
    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products/")
        .then((data) => {
        setStates(data.data);
        console.log(states);
        })
        .catch((error) => {
        console.log(error);
        })
     },[]);
     let addd =[]
    const adding = (val)=>{
      
      addd=addItem
      addd.push(val)
      console.log(addd);
      setaddItem(addd)
      console.log("Length  :"+addd.length)
      document.getElementById("cartvalue").value = addd.length;
    }
    
console.log(states)
  return (
    <div style={{width: 100 + '%'}}>
        <Navbar expand="lg" variant="light" bg="light" sticky="top" >
        <Container>
          <Navbar.Brand href="#">Shopping Kart</Navbar.Brand>
          <span>
          <Link to={{pathname:"/cart" ,state: addItem }}><FaShoppingCart /><sup id="cartvalue">{addd.length}</sup></Link>
          </span>
        </Container>
        </Navbar>
        {states.length?
        <Row xs={3} md={3} className="g-6" style={{width: 100 + '%'}}>
            { states.map((category,index) =>
               (category.category===filter)? 
                <CardGroup style={{padding: 20 + 'px'}}>
                <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" src={category.image} width="20px" length="20px"/>
                <Card.Body>
                    {console.log(category)}
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <Card.Text><h5>Ratings </h5> {category.rating.rate} <FaStar/></Card.Text>
                <Card.Text><h5>Price:</h5>{category.price} <FaDollarSign/></Card.Text>
                <Button variant="primary" onClick={()=>adding(category)}>Add to cart <FaCartPlus/></Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{category.category}</small>
                </Card.Footer>
                </Card>
            </CardGroup>
              :null
        )}
          </Row>
        :
            <InfinitySpin
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading' />
      }
    </div>
  )
}

export default Products