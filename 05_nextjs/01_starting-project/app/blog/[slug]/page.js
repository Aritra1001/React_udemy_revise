import React from 'react'

const page = ({params}) => {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>{params.slug}</p>
    </main>
  )
}

export default page