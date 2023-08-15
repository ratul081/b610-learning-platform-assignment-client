import LeftSidebar from './LeftSidebar';
import { Outlet } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      <div className="w-3/4 justify-center mx-12 mt-24 space-y-6">
        <p className="text-7xl text-red-600 font-bold">Courses</p>
        <p>We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab facilities where high-end computers with the required configuration are ready to facilitate your learning. After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you confident throughout the learning journey with .</p>
      </div>
      <div className='flex my-12'>
        <div className="w-full">
          <LeftSidebar></LeftSidebar>
        </div>
          <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Courses;