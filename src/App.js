import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Navbar from './component/Shared/Navbar';
import Service from './component/Pages/Home/Service';
import Login from './component/Login/Login';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

      </Routes>



    </div>


  );
}

export default App;
