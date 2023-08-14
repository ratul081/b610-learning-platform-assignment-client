import React from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <div>
      <div className='flex lg:flex-row lg:text-start flex-col justify-between m-12 text-center'>
        <div className='lg:w-1/2'>
          <h1 className='text-3xl lg:text-5xl font-semibold my-4'>Explore your favorite course</h1>
          <p className='text-sm lg:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus aspernatur quis est, tempore vero iure voluptatum molestiae iste obcaecati sapiente dicta nobis! Recusandae culpa at architecto nemo qui numquam perspiciatis.</p>
        </div>
        <div className='flex justify-center items-center'>
          <Link className="btn btn-success m-4 lg:text-lg text-sm">Browse All</Link>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-6 mx-4 lg:mx-12'>
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://i.postimg.cc/fyj1Nnpm/My-project-3.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Course;