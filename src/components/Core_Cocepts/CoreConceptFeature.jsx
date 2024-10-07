import { CORE_CONCEPTS } from "../../data";
import Core_Concept from "./Core_Concept";
import Section from "../Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <Core_Concept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
