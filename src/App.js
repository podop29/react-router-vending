import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Cheese from './cheese'
import Apple from './apple'
import Soda from './soda'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<VendingMachine/>}/>
        <Route exact path='/cheese' element={<Cheese/>}/>
        <Route exact path='/apple' element={<Apple/>}/>
        <Route exact path='/soda' element={<Soda/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
