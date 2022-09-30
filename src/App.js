import Home from "./Components/Home";
import Nav from "./Components/Nav";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from "./Components/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/catalog" element={<Shop/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

