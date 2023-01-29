import "./App.css";

import { Container } from "./components/index.js";
import { Header, Hero, MostPopular } from "./sections/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
    </div>
  );
}

export default App;
