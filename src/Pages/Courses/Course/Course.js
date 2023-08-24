import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Course = () => {
  const coursesData = useLoaderData();
  return (
    <div className='lg:w-3/4  grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-4 mb-12'>
      {
        coursesData.map(courseData => <CourseDetails
          key={courseData._id}
          courseData={courseData}
        ></CourseDetails>)
      }
    </div>
)};

export default Course;