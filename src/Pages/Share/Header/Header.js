import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext, ThemeContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const { setTheme } = useContext(ThemeContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logout success');
      })
      .catch(err => { 
        toast.error("Could not log out please wait!!")
        console.error(err) })
  }

  const handleThemeToggle = () => {
    setTheme((current) => !current);
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 ">
            <NavLink to='/'>Home</NavLink>
            <Link to='/courses'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/login'>Login</Link>
            <button>
              <input onClick={handleThemeToggle} type="checkbox" className="toggle" />
            </button>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          <img className='w-14 h-14' src="https://i.postimg.cc/rwGvRDWm/Colorful-and-Cute-Kindergarten-Logo-removebg-preview.png" alt="" srcSet="" />
          <span className='mb-2'>Triad</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 md:text-xl text-sm lg:gap-24 md:gap-8 gap-3">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-600" : ""
            }
            to='/'>Home</NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-600" : ""
            } to='/courses'>Courses</NavLink>
          <NavLink to='/faq'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-600" : ""
            }>FAQ</NavLink>
          <NavLink to='/blog'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-600" : ""
            }>Blog</NavLink>
          {
            user?.uid ? <>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-600" : ""
                } to="/check_out/:id">Gold plus</NavLink>
            </> : <>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-orange-600" : ""
                } to="/check_out/:id">Get premium acces</NavLink>
            </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <button>
            <input onClick={handleThemeToggle} type="checkbox" className="toggle lg:block hidden" />
          </button>
          {
            user?.uid ?
              <>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={(user?.photoURL)? (user?.photoURL):'https://i.postimg.cc/kXm44xCH/1b96ad1f07feee81fa83c877a1e350ce.png'} alt='' />
                    </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <p className='text-2xl font-bold'>
                        {user?.displayName}
                      </p>
                    </li>
                    <li>
                      <Link to='/profile' className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li><Link>Settings</Link></li>
                    <li><button onClick={handleLogOut} >Logout</button></li>
                  </ul>
                </div>
                <button onClick={handleLogOut} >Logout</button>
              </>
              :
              <>
                <Link to='/login' className='btn normal-case btn-md'>Login</Link>
                <Link to='/register' className='btn normal-case btn-md'>Register</Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;