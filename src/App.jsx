import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import Core_Concept from "./components/Core_Cocepts/Core_Concept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [topic, setTopic] = useState("nothing");
  function handleSelect(selectedButton) {
    setTopic(selectedButton);
    // console.log(setSelectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <Core_Concept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={topic === "components"} // for purpose of  Dynamically styling the buttons selected
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={topic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === "state"}
              onSelect={() => handleSelect("state")}
            >
              States
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>{EXAMPLES[topic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
