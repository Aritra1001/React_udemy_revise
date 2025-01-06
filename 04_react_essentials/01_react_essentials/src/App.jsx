import React from "react";
import Header from "./components/header/Header";
import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/tabButton/TabButton";

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton >Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>States</TabButton>
            <TabButton>Props</TabButton>
          </menu>
          Some Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
