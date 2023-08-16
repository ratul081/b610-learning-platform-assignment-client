import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {
        console.log('logout success');
      })
    .catch(err => { console.error(err) })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 ">
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link>FAQ</Link>
            <Link>Blog</Link>
            <Link>Login</Link>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Home edu</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 md:text-xl text-sm lg:gap-24 md:gap-8 gap-3">
          <Link to='/'>Home</Link>
          <Link to='/courses'>Courses</Link>
          <Link>FAQ</Link>
          <Link>Blog</Link>
          <Link to="/login">Login</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <button>
            <input type="checkbox" className="toggle" />
          </button>

          {
            user?.uid ?
              <>
                <p className='text-center m-2'>
                  {user?.displayName}
                </p>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} alt='' />
                    </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <Link className="justify-between">
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
                <Link to='/login' className='btn normal-case btn-md' >Login</Link>
                <Link to='/register' className='btn normal-case btn-md' >Register</Link>
              </>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;