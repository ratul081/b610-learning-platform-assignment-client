import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='flex flex-col text-center justify-center bg-black text-white pt-12'>
      <p className='text-3xl my-3'>Edu mail</p>
      <p className='text-center my-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perspiciatis laborum eum, soluta quis sequi</p>
      <div className='flex justify-center items-center space-x-6 text-xl'>
        <Link>Home</Link>
        <Link>Service</Link>
        <Link>About</Link>
        <Link>Courses</Link>
        <Link>Admission</Link>
      </div>
      <div className='flex justify-around text-xl my-6'>
        <p>Lorem ipsum, dolor sit amet odio </p>
        <div className='text-white flex space-x-6 text-3xl'>
          <Link><BsFacebook /></Link> 
          <Link><BsTwitter /></Link> 
          <Link><BsInstagram /></Link> 
        </div>
        <div className='flex space-x-4 text-sm'>
          <p>Teams & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;