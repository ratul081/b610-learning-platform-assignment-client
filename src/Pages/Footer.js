import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='flex flex-col text-center justify-center bg-black text-white pt-8'>
      <p className='text-3xl'>Edu mail</p>
      <p className='text-center m-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perspiciatis laborum eum, soluta quis sequi</p>
      <div className='flex flex-col lg:flex-row justify-center items-center text-sm lg:space-x-8 space-y-2 lg:text-lg'>
        <Link>Home</Link>
        <Link>Service</Link>
        <Link>About</Link>
        <Link>Courses</Link>
        <Link>Admission</Link>
      </div>
      <div className='flex lg:flex-row flex-col justify-center items-center space-y-6  lg:justify-around text-lg lg:text-xl my-6'>
        <p>Lorem ipsum, dolor sit amet odio </p>
        <div className='text-white flex space-x-6 lg:text-3xl text-2xl'>
          <Link><BsFacebook /></Link> 
          <Link><BsTwitter /></Link> 
          <Link><BsInstagram /></Link> 
        </div>
        <div className='flex text-center space-x-6 text-sm'>
          <p>Teams & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;