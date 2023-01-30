import "./App.css";

import { Container } from "./components/index.js";
import { GamingLibrary, Header, Hero, MostPopular } from "./sections/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary />
      </Container>
    </div>
  );
}

export default App;
