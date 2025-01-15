import React, { useState } from "react";
import Header from "./components/header/Header";
import CoreConcept from "./components/CoreConcept";
import Example from "./components/Example";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Example/>
      </main>
    </div>
  );
}

export default App;
