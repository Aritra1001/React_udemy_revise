import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

function Header() {
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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
