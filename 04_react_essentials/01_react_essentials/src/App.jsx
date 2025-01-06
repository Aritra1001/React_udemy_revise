import React, { useState } from "react";
import Header from "./components/header/Header";
import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/tabButton/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState("components");

  const handleTabClick = (selectedButton) => {
    console.log(selectedButton);
    setSelectedTab(selectedButton);
  };

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
            <TabButton onClick={() => handleTabClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleTabClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleTabClick("states")}>
              States
            </TabButton>
            <TabButton onClick={() => handleTabClick("props")}>Props</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab]?.title}</h3>
            <p>{EXAMPLES[selectedTab]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab]?.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
