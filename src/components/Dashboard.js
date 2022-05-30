import React, { useState,useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';
import { InfinitySpin } from  'react-loader-spinner'

export default function Dashboard(props) {
  const [states, setStates] = useState([]);
  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products/categories")
    .then((data) => {
    setStates(data.data);
    console.log(states);
    })
    .catch((error) => {
    console.log(error);
    })
 },[]);
 console.log(states)
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  //console.log(states)
  const listItems = states.map((category,index) =>
    <Card>
      <Card.Body>
        <Link to={{pathname:"/products" ,state: category }}><h2 className="text-center mb-4">{category}</h2></Link>
      </Card.Body>
    </Card>
  );

  return (
    <div style={{maxwidth: 100 + '%'}}>
    {states.length?
    <p>
    {listItems}</p>
    :
      <p><InfinitySpin
      height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
    /></p>
      }
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  )}