import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.e_mail.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success('Please verify your email address.')
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
      });
  }

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }

    updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
  }

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => { })
      .catch(error => console.error(error));
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter your Full name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input type="name" name='e_mail' placeholder="Enter your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Enter your photo URL" className="input input-bordered" />
              </div>
              <div className='form-control my-2'>
                <label className="label cursor-pointer space-x-2">
                  <input onClick={handleAccepted} type="checkbox" className="checkbox" />
                  <p>Accept
                    <Link to='/terms_and_conditions'> terms & conditions</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-3">
                <button disabled={!accepted} className="btn btn-primary">Register</button>
              </div>
              <p className='m-3 text-white'>
                {error}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;