import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Firearms from "./pages/Firearms";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firearms/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
