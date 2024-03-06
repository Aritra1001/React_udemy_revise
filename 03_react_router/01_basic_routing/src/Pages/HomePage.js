import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <h1>My Home Page</h1>
    <p>go to <Link to='/products'>my products page</Link></p>
    </>
  )
}

export default HomePage