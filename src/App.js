
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
     <Router>
    <div className="App">
        <div className="container d-flex align-items-center flex-column">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
