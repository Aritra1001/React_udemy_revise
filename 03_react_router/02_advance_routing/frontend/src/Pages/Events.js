import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const DUMMY_EVENTS = [
    {
      id: "E1",
      title: "Event 1",
    },
    {
      id: "E2",
      title: "Event 2",
    },
    {
      id: "E3",
      title: "Event 3",
    },
  ];

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((eve) => {
          return (
            <li key={eve.id}>
              <Link to={eve.id}>{eve.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Events;
