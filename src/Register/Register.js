import React, { useContext } from 'react';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {


  const { providerLogin } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSingIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log("🚀 ~ file: Register.js:15 ~ handleGoogleSingIn ~ user:", user)
      })
      .catch(error => console.error(error))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name
    const photoURL = form.photoURL.value   
    const email = form.email
    console.log("🚀 ~ file: Register.js:26 ~ handleSubmit ~ email:", email)
    const password = form.password.value
    
    
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Photo</span>
              </label>
              <input type="text" name='photoURL' placeholder="Enter your photo" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Contact Number</span>
              </label>
              <input type="text" name='email' placeholder="Enter your phone number" className="input input-bordered" />
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className='text-center text-lg'>
              <p>Or</p>
              <p>continue with</p>
            </div>
            <div className="btn-group btn-group-vertical space-y-3">
              <button onClick={handleGoogleSingIn} className="btn"><BsGoogle />Google</button>
              <button className="btn"><BsGithub />Github</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;