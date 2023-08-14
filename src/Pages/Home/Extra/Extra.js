import React from 'react';
import { Link } from 'react-router-dom';

const Extra = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-evenly m-12'>
      <div className=''>
        <img src="https://i.postimg.cc/sxTmM8hL/Untitled-1.png" alt="" srcset="" />
      </div>
      <div className='lg:w-1/2 flex flex-col lg:justify-center text-center lg:text-start my-4 space-y-4'>
        <div className="text-3xl">
          Best platform to grow
        </div>
        <div className="text-sm lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos enim voluptate dolore consequuntur? Quam ratione rerum eum tempora deleniti distinctio accusamus, vel, eligendi hic ut saepe quibusdam ducimus repudiandae?
        </div>
        <div className='m-2'>
          <Link className="btn btn-success">learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Extra;