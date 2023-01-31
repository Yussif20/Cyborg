import "./App.css";

import { Container } from "./components/index.js";
import { Footer, Header } from "./sections/index.js";
import { Home, Browse } from "./Pages/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Home />
        <Browse />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
