import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Navbar from './component/Shared/Navbar';
import Service from './component/Pages/Home/Service';
import Login from './component/Login/Login';
import Signup from './component/Shared/Signup';
import Blog from './component/Pages/Blog';
import RequirAuth from './component/Shared/RequirAuth';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<RequirAuth> <Blog /> </RequirAuth>}></Route>
        <Route path="/home" element={<Home />}></Route>



        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

      </Routes>



    </div>


  );
}

export default App;
