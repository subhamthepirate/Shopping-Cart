import React from 'react'
import { Navbar,Container,Row, Card, Button, CardGroup } from "react-bootstrap"
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { Audio } from  'react-loader-spinner'
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
    const [states, setStates] = useState([]);
    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/carts")
        .then((data) => {
        setStates(data.data);
        console.log(states);
        })
        .catch((error) => {
        console.log(error);
        })
     },[]);
console.log(states)
return (
    <div>
        <Navbar expand="lg" variant="light" bg="light" sticky="top" >
        <Container>
          <Navbar.Brand href="#">Shopping Kart</Navbar.Brand>
          <span>
          <Link to="/cart"><FaShoppingCart /></Link>
          </span>
        </Container>
        </Navbar>
        {states.length?
        <Row xs={2} md={2} className="g-6">
            { states.map((category,index) =>
              
            <CardGroup>
                <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" src={category.image} width="20px" length="20px"/>
                <Card.Body>
                    {console.log(category)}
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <Card.Text><h5>Ratings </h5> {category.rating.rate}</Card.Text>
                <Card.Text><h5>Price:</h5>{category.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{category.category}</small>
                </Card.Footer>
                </Card>
            </CardGroup>
          )}
          </Row>
        :
            <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading' />
      }
    </div>
  )
}

export default Cart