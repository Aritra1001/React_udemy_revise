import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
// useNavigate hook is used to navigate programmatically
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  }

  return (
    <>
    <h1>My Home Page</h1>
    <p>go to <Link to='/products'>my products page</Link></p>
    <button onClick={navigateHandler}>Navigate</button>
    </>
  )
}

export default HomePage