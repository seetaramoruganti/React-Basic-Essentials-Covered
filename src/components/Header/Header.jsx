import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const content = ["Fundamental", "Core", "Crucial"];

function RandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  let presentMood = content[RandomNumber(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {presentMood} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
