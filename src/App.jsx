import "./App.css";

import { Header, Container, Hero } from "./components/index";

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
