import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ courseData }) => {
  // console.log("🚀 ~ file: CourseDetails.js:5 ~ CourseDetails ~ courseData:", courseData)
  const {_id,title,overview,image_url}=courseData

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="" className=" rounded-xl" />
      </figure>
      <div className="card-body items-center space-y-6 text-center">
        <h2 className="card-title text-xl lg:text-3xl">{title}</h2>
        <p className='sm:text-sm'>{overview}</p>
        <div className="card-actions">
          <Link to={`/courses/${_id}`} className="btn normal-case btn-primary">See more</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;