import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {

    const params = useParams();

  return (
    <>
        <h1>EventDetails Page</h1>
        <p>{params.eventId}</p>
    </>
  )
}

export default EventDetail