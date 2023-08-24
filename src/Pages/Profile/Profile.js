import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext)
  console.log("🚀 ~ file: Profile.js:6 ~ Profile ~ user:", user)
  const {
    displayName,
    email,
    emailVerified,
    metadata,
    photoURL,
    uid,
    isAnonymous

  }=user
  const {creationTime,
    lastSignInTime,}=metadata
  return (
    <div className='min-h-screen m-12 space-y-6'>
      <p className='text-6xl'>Here your profile</p>
      <div className='grid place-items-center'>
      <img className='rounded my-12' src={photoURL} alt="" />
      <div className='text-2xl space-y-4'>
      <p>
        <span className='font-semibold'>Name:</span> {displayName}
      </p>
      <p>
        <span className='font-semibold'>Email: </span>{email}
      </p>
      <p>
        <span className='font-semibold'>Id No: </span>{uid}
      </p>
      <p>
        <span className='font-semibold'>Email status: </span>{emailVerified ? 'verified' : 'unverified'}
      </p>
      <p>
        <span className='font-semibold'>Anonymous: </span>{ isAnonymous ? 'Yes' : 'No'}
      </p>
      <p>
        <span className='font-semibold'>Created on: </span>{creationTime}
      </p>
      <p>
        <span className='font-semibold'>Last sing in: </span>{lastSignInTime}
      </p>
      </div>
      </div>
    </div>
  );
};

export default Profile;