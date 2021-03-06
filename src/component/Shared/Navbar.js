import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';



const Navbar = () => {

    const [user] = useAuthState(auth)



    const userSignOut = () => {
        signOut(auth)
    }



    const menuItem = <>
        <li><Link className='rounded-lg text-xl' to='/home'>Home</Link></li>
        <li><Link className='rounded-lg text-xl' to='/about'>About</Link></li>
        <li><Link className='rounded-lg text-xl' to='/blog'>Blogs</Link></li>



        <li>
            <Link to='/dashborad' className='btn btn-ghost text-xl'>Dashborad</Link>
        </li>




        {
            user ?
                <li><button onClick={userSignOut} className='btn btn-outline hover:bg-red-600 rounded-lg '>Sign Out</button></li>
                :
                <li><Link className='rounded-lg text-xl' to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar  z-10 bg-primary shadow-xl">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-primary text-white rounded-lg w-52">
                        {menuItem}
                    </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl text-secondary">Luxury<span className='text-white'>Living</span></span>
            </div>

            <div className="navbar-center lg:navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItem}
                </ul>
            </div>

            <div className="lg:navbar-center lg:hidden navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>

    );
};


export default Navbar;