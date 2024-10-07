import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples() {
  const [topic, setTopic] = useState("nothing");
  function handleSelect(selectedButton) {
    setTopic(selectedButton);
    // console.log(setSelectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
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
    </Section>
  );
}
