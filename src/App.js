
// import '././css/Style.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./views/Main/Main";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
