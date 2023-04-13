
import './style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import AnimalList from "./domain/animal/AnimalList";
import Login from "./domain/user/Login";
import Signup from './domain/user/Signup';
import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';
import AdoptionInfo from './domain/adoption/AdoptionInfo';
import AnimolyInfo from './domain/blog/AnimolyInfo';
import RecoveryId from './domain/user/RecoveryId';
import RecoveryPassword from './domain/user/RecoveryPassword';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <FloatingButton/>
        <div>
          <Routes>
              <Route exact path="/" element={<AnimalList/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/idrecovery" element={<RecoveryId/>}/>
              <Route exact path="/passwordrecovery" element={<RecoveryPassword/>}/>


              <Route exact path="/animoly" element={<AnimolyInfo/>}/>

              <Route exact path="/info" element={<AdoptionInfo/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
