import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="flex text-center lg:text-start flex-col-reverse lg:flex-row justify-between mt-2 lg:mt-10 mb-2 text">
          <div className="lg:w-2/4 lg:mx-12 mx-2">
            <div className=" lg:text-6xl text-4xl my-6 lg:my-20">
              <p>Grow your Skill</p>
              <p>with experts</p>
            </div>
            <div className="lg:space-y-6 space-y-2">
              <p className="text-sm lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                distinctio repudiandae porro iusto mollitia, dolor quibusdam
                vitae autem. Neque exercitationem illum aliquid eligendi
                consectetur sunt et hic esse magni id!
              </p>
              <div className="lg:text-xl text-lg space-x-5 lg:space-x-8">
                <Link className="btn btn-success">Success</Link>
                <Link
                  to="/courses"
                  className="uno-underline hover:underline font-semibold">
                  Explore courses
                </Link>
              </div>
              <div>
                <div className="card card-side bg-base-100 shadow-xl mt-4">
                  <img
                    className="lg:w-3/12 w-4/12"
                    src="https://i.postimg.cc/gJ3MJXqZ/business-person-taking-an-ok-pose-svgrepo-com.png"
                    alt="Movie"
                  />
                  <div className="card-body lg:text-lg text-sm py-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate iste quos odio vitae distinctio doloremque
                      alias accusantium suscipit blanditiis dolores quia, illum
                      atque, porro corrupti quas ipsam minima nisi eum?
                    </p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://i.postimg.cc/fyj1Nnpm/My-project-3.png"
                alt=""
                
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex lg:flex-row lg:text-start flex-col justify-between m-12 text-center">
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-semibold my-4">
              Explore your favorite course
            </h1>
            <p className="text-sm lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              aspernatur quis est, tempore vero iure voluptatum molestiae iste
              obcaecati sapiente dicta nobis! Recusandae culpa at architecto
              nemo qui numquam perspiciatis.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/courses"
              className="btn btn-success m-4 lg:text-lg text-sm">
              Browse All
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mx-4 lg:mx-12">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div 
            key={idx}
            className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.postimg.cc/fyj1Nnpm/My-project-3.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
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
      <div className="flex flex-col lg:flex-row lg:justify-evenly m-12">
        <div className="">
          <img
            src="https://i.postimg.cc/sxTmM8hL/Untitled-1.png"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex flex-col lg:justify-center text-center lg:text-start my-4 space-y-4">
          <div className="text-3xl">Best platform to grow</div>
          <div className="text-sm lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            eos enim voluptate dolore consequuntur? Quam ratione rerum eum
            tempora deleniti distinctio accusamus, vel, eligendi hic ut saepe
            quibusdam ducimus repudiandae?
          </div>
          <div className="m-2">
            <Link className="btn btn-success">learn more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
