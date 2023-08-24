import React from 'react';
import { useLoaderData } from 'react-router-dom';
import  CourseDetails from '../CourseDetails/CourseDetails'
const Category = () => {
  const coursesData =useLoaderData();
  return (
    <div className='lg:w-3/4 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-12'>
      {
        coursesData.map(courseData => <CourseDetails
          key={courseData._id}
          courseData={courseData}
        ></CourseDetails>)
      }
    </div>
  );
};

export default Category;