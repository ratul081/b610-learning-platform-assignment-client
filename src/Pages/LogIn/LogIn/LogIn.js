import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {
  const { singIn, providerLogin, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState('')

  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSingIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error))
  }

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.e_mail.value
    const password = form.password.value
    singIn(email, password)
      .then(result => {
        const user = result.user;
        console.log("🚀 ~ file: LogIn.js:20 ~ handleLogin ~ user:", user)
        setError('')
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message)
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Login now!</h1>
          <p className="py-6">Log in to view your dashboard.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input type="text" name='e_mail' placeholder="Enter your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <div className='space-y-2'>
                    <Link to='/password_reset' className="label-text-alt link link-hover text-sm">Forgot password?</Link>
                    <p>Haven't register? <Link to='/register'>Register Now!!</Link></p>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className='m-3 text-white'>
                {error}
              </p>
              <div className='text-center text-lg'>
                <p>Or</p>
                <p>continue with</p>
              </div>
            </form>
            <div className="btn-group btn-group-vertical space-y-3">
              <button onClick={handleGoogleSingIn} className="btn"><BsGoogle />Google</button>
              <button className="btn"><BsGithub />Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;