import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FullCourseDetails = () => {
  const courseData = useLoaderData()
  console.log("🚀 ~ file: FullCourseDetails.js:6 ~ FullCourseDetails ~ courseData:", courseData)
  const { title, overview, total_students, image_url, details, rating } = courseData;
  return (
    <div>
      <div className='flex mt-24 justify-evenly'>
        <div className='w-2/5 space-y-6'>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='text-xl'>{overview}</p>
          <div className='space-x-6'>
            <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg normal-case">Enrol Now</Link>
            <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg normal-case">Join Free seminar</Link>
          </div>
          <div className="grid grid-cols-5">
            <p><span className='font-semibold'>Rating:</span> {rating.number}</p>
            <p></p>
            <p><span className='font-semibold'>Total enrolled:</span> {total_students}</p>
          </div>
        </div>
        <div className='w-2/6 p-12'>
          <img className='rounded-lg' src={image_url} alt="" srcSet="" />
        </div>
      </div>
      <div className="space-y-6 m-12">
        <p className="text-5xl font-semibold ">Course Overview</p>
        <p className="text-lg">{details}</p>
      </div>
      <div className="text-center my-24 space-y-6">
        <p className="text-5xl font-bold">Admission Is Going on</p>
        <p className="text-lg">Enroll to course now, take one step ahead towards a competent career</p>
        <div className="space-x-6">
          <Link className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg normal-case">Browse courses</Link>
          <Link className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg normal-case">Join dree seminar</Link>
        </div>
      </div>
    </div>
  );
};


export default FullCourseDetails;