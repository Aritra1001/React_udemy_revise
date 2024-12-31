import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

export default function Header() {
  const startingWordArr = ["Fundamental", "Core", "Important"];

  const genRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const startingWord = startingWordArr[genRandomInt(2)];
  // console.log(Math.random());

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {startingWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
