import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Intro.css";

const Home = () => {
  const coursesData = useLoaderData()
  console.log("🚀 ~ file: Home.js:7 ~ Home ~ courseData:", coursesData)



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
                With a vision to turn manpower into assets, Home Edu Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.
              </p>
              <div className="lg:text-xl text-lg space-x-5 lg:space-x-8">
                <Link className="btn btn-success normal-case">Enrol Now</Link>
                <Link
                  to="/courses"
                  className="uno-underline hover:underline font-semibold">
                  Explore courses
                </Link>
              </div>
              <div>
                <div className="card card-side bg-base-100 shadow-xl mt-8">
                  <img
                    className="lg:w-3/12 w-4/12"
                    src="https://i.postimg.cc/gJ3MJXqZ/business-person-taking-an-ok-pose-svgrepo-com.png"
                    alt="Movie"
                  />
                  <div className="card-body lg:text-lg text-sm py-4">
                    The bright presence of our students in the marketplace inspires us, motivates us to engage more people with our vision to make a better future. During the last 14 years, hundreds of thousands people learned and grew their expertise with us. Bringing economic stability to their own life, many students created job opportunities for others. We always appreciate this wonderful journey of our keen learners.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://i.postimg.cc/fyj1Nnpm/My-project-3.png"
                alt="Your project"
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
            <p className="text-sm lg:text-xl text-justify">
              We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time.
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
          {coursesData.map((course) => (
            <div
              key={course._id}
              className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={course.image_url}
                  className="rounded-xl"
                  alt=""
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{course.title}</h2>
                <div className="card-actions">
                  <Link to={`/check_out/${course._id}`} className="btn btn-primary normal-case">Buy Now</Link>
                  <Link to={`/courses/${course._id}`} className="btn btn-primary normal-case">See more</Link>
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
            alt="Your"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col lg:justify-center text-center lg:text-start my-4 space-y-4">
          <div className="text-3xl">Best platform to grow</div>
          <div className="text-sm lg:text-lg">
            Home Edu and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24 hours service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.
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
