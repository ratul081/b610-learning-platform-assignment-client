import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const addedCourse = useLoaderData()
  console.log("🚀 ~ file: CheckOut.js:6 ~ CheckOut ~ addedCourse:", addedCourse)
  return (
    <div>
      <div className=" grid grid-cols-3 m-24">
        <div className='col-span-2'>
          <div className="space-y-6">
            <p className='text-3xl font-bold'>Delivery Information</p>
            <div className="grid grid-cols-2 gap-16 m-24">
              <div className='space-y-2'>
                <p className='text-lg font-semibold'>Name</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <p className='text-lg font-semibold'>Email</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <p className='text-lg font-semibold'>State</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <p className='text-lg font-semibold'>Address</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className='space-y-2'>
                <p className='text-lg font-semibold'>Mobile Number</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <p className='text-lg font-semibold' >City</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <div className='flex justify-evenly gap-4 w-3/4'>
                  <div className=''>
                    <p className='text-lg font-semibold'>ZIP</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                    <p className='text-lg font-semibold'>State</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='space-y-6'>
            <p className='text-3xl font-bold'>Order Summary</p>
            <div className='flex'>
              <img className='rounded w-24 h-16 object-fill' src={addedCourse?.image_url} alt="" />
              <div className='mx-6'>
                <p className='text-xl font-semibold'>{addedCourse.title}</p>
                <p>Done by {addedCourse.total_students} students</p>
              </div>
            </div>
          </div>
          <div className='my-24'>
            <div className='flex justify-between' >
              <p>Subtotal</p>
              <p>$0</p>
            </div>
            <div className='flex justify-between' >
              <p>Shipping</p>
              <p>$0</p>
            </div>
            <div className="divider"></div>
            <div className='flex justify-between' >
              <p>Total</p>
              <p>$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;