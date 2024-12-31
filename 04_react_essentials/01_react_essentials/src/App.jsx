import React from "react";
import Header from "./components/header/Header";
import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              image={CORE_CONCEPTS[0]?.image}
              title={CORE_CONCEPTS[0]?.title}
              description={CORE_CONCEPTS[0]?.description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
