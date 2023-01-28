import "./App.css";

import { Container } from "./components/index.js";
import { Header, Hero } from "./sections/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Hero />
      </Container>
    </div>
  );
}

export default App;
