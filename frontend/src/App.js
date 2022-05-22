import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Income/Event/Home";

import AddEvent from "./Components/Income/Event/AddEvents";
import DisplayEvent from "./Components/Income/Event/Displayevent";
import EditEvent from "./Components/Income/Event/Editevent";

function App() {
  return (
    <Router>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/displayevent" element={<DisplayEvent />} />
            <Route path="/editevent/:id" element={<EditEvent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
