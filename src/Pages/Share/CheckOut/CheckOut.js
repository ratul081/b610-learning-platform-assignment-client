import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const CheckOut = () => {
  const { user } = useContext(AuthContext)
  const addedCourse = useLoaderData()
  console.log("🚀 ~ file: CheckOut.js:6 ~ CheckOut ~ addedCourse:", addedCourse)
  return (
    <div>
      <div className="lg:grid grid-cols-3 m-12 lg:m-24">
        <div className='lg:col-span-2'>
          <div className="space-y-6">
            <p className='text-3xl font-bold'>Delivery Information</p>
            <div className="lg:grid grid-cols-2 gap-16 lg:m-24">
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
                <div className='lg:flex justify-evenly gap-4 w-3/4'>
                  <div>
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
            <div className='lg:ms-24 ms-4'>
              <button className='text-xl btn btn-success normal-case'>Save Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className='space-y-6 my-12'>
            <p className='text-3xl font-bold'>Order Summary</p>
            <div className='flex'>
              <div>
                <img className='rounded w-28 h-20 object-fill' src={
                  addedCourse._id ? `
                ${addedCourse?.image_url}
              ` : "https://i.postimg.cc/prcHy63H/istockphoto-500508876-612x612.jpg"
                } alt="" />
              </div>
              <div className='mx-6 grid place-items-center'>
                <p className='text-xl font-semibold'>
                  <span className={addedCourse._id ? '' : "hidden"}>
                    {
                      user?.uid ? `${addedCourse.title}` : "VIP Membership"
                    }
                  </span>
                  <span className={!addedCourse._id ? '' : "hidden"}>
                    {
                      addedCourse._id ? `${addedCourse.title}`
                        :
                        "VIP Membership"
                    }
                  </span>
                </p>
                <p>Done by
                  <span className={addedCourse._id ? '' : "hidden"}>
                    {
                      user?.uid ? ` ${addedCourse.total_students} ` : " 800+ "
                    }
                  </span>
                  <span className={!addedCourse._id ? '' : "hidden"}>
                    {
                      addedCourse._id ? ` ${addedCourse.total_students} `
                        :
                        " 800+ "
                    }
                  </span>
                  students</p>
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
      <div>
      </div>
    </div>
  );
};

export default CheckOut;