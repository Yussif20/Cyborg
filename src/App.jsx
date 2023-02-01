import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "./components/index.js";
import { Footer, Header } from "./sections/index.js";
import { Home, Browse } from "./Pages/index.js";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
