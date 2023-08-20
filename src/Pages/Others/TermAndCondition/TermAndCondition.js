import React from 'react';
import { Link } from 'react-router-dom';

const TermAndCondition = () => {
  return (
    <div className='text-center m-12 space-y-6'>
      <h3 className='text-5xl'>Here is out condition</h3>
      <p className='text-3xl'>Go back to <Link to='/register' >Register</Link> </p>
    </div>
  );
};

export default TermAndCondition;