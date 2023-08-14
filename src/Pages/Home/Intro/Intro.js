import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  return (
    <div className='hero'>
      <div className='flex text-center lg:text-start flex-col-reverse lg:flex-row justify-between mt-2 lg:mt-10 mb-2 text'>
        <div className='lg:w-2/4 lg:mx-12 mx-2'>
          <div className=' lg:text-6xl text-4xl my-6 lg:my-20'>
            <p>Grow your Skill</p>
            <p>with experts</p>
          </div>
          <div className='lg:space-y-6 space-y-2' >
            <p className='text-sm lg:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio repudiandae porro iusto mollitia, dolor quibusdam vitae autem. Neque exercitationem illum aliquid eligendi consectetur sunt et hic esse magni id!
            </p>
            <div className='lg:text-xl text-lg space-x-5 lg:space-x-8'>
              <Link className="btn btn-success">Success</Link>
              <Link className='uno-underline hover:underline font-semibold'>Explore courses</Link>
            </div>
            <div>
              <div className="card card-side bg-base-100 shadow-xl mt-4">
                <img className='lg:w-3/12 w-4/12' src="https://i.postimg.cc/gJ3MJXqZ/business-person-taking-an-ok-pose-svgrepo-com.png" alt="Movie" />
                <div className="card-body lg:text-lg text-sm py-4">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste quos odio vitae distinctio doloremque alias accusantium suscipit blanditiis dolores quia, illum atque, porro corrupti quas ipsam minima nisi eum?</p>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://i.postimg.cc/fyj1Nnpm/My-project-3.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;