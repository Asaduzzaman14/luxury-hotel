import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Navbar from './component/Shared/Navbar';
import Services from './component/Pages/Home/Services';
import Login from './component/Login/Login';
import Signup from './component/Shared/Signup';
import Blog from './component/Pages/Blog';
import RequirAuth from './component/Shared/RequirAuth';
import Dashboard from './component/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<RequirAuth> <Blog /> </RequirAuth>}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/dashborad" element={<Dashboard>



        </Dashboard>}></Route>



        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

      </Routes>



    </div>


  );
}

export default App;
