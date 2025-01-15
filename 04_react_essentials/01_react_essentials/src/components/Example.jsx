import React, {useState} from "react";
import TabButton from "./tabButton/TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";

const Example = () => {

    const [selectedTab, setSelectedTab] = useState(null);

    const handleTabClick = (selectedButton) => {
      setSelectedTab(selectedButton);
    };


  // another alternative for rendering contents condtionally
  // let topicContent = <p>Please select a topic</p>;
  // if (selectedTab) {
  //   topicContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTab]?.title}</h3>
  //       <p>{EXAMPLES[selectedTab]?.description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTab]?.code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <>
      <Section id="examples" title="Examples">
        <menu>
          <TabButton
            isSelected={selectedTab == "components"}
            onClick={() => handleTabClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTab == "jsx"}
            onClick={() => handleTabClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTab == "states"}
            onClick={() => handleTabClick("states")}
          >
            States
          </TabButton>
          <TabButton
            isSelected={selectedTab == "props"}
            onClick={() => handleTabClick("props")}
          >
            Props
          </TabButton>
        </menu>
        {/* {topicContent} */}
        {!selectedTab && <p>Please select a topic</p>}
        {selectedTab && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab]?.title}</h3>
            <p>{EXAMPLES[selectedTab]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab]?.code}</code>
            </pre>
          </div>
        )}
      </Section>
    </>
  );
};

export default Example;
