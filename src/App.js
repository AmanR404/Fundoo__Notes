import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import SmallBox from './Components/Box/SmallBox';
import Aside from './Components/Aside/Aside'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
    <Route exact path='/Signin' element={ <Signin/>} />
    <Route exact path='/' element={ <Signup/>} />
    <Route exact path='/dashboard' element={  <div id='appcomponent'>
                                                  <Aside/>
                                                  <SmallBox/>
                                                </div>} />  
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
