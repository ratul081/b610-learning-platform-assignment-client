import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Login now!</h1>
          <p className="py-6">Log in to view your dashboard.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <div className='space-y-2'>
                <a className="label-text-alt link link-hover text-sm">Forgot password?</a>
                <p>Haven't register? <Link to='/register'>Register Now!!</Link></p>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;