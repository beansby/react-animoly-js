
import './style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import AnimalList from "./domain/animal/AnimalList";
import Login from "./domain/user/Login";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className='mx-40'>
          <Routes>
              <Route exact path="/" element={<AnimalList/>}/>
              <Route exact path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
