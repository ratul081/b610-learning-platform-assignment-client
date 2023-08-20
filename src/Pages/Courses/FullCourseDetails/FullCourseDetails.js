import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsFillPrinterFill } from "react-icons/bs";
import { toast } from 'react-hot-toast';
import { useReactToPrint } from "react-to-print";

const FullCourseDetails = () => {
  const pdfContent = useRef()
  const courseData = useLoaderData()
  const { _id, title, overview, total_students, image_url, details, rating } = courseData;
  
  const generatePDF= useReactToPrint({
    content: ()=>pdfContent.current,
    documentTitle:"Course_Details",
    onAfterPrint:()=>toast.success("File saved")
});

  return (
    <div ref={pdfContent} >
      <div class="relative">
        <div class="absolute right-10 text-4xl ">
          <button onClick={generatePDF}><BsFillPrinterFill/></button>
        </div>
      </div>
      <div className='mt-24'>
      <h1 className='text-5xl font-bold m-12'>{title}</h1>
        <div className='flex justify-evenly'>
          <div className='w-2/5 space-y-4'>
            <p className='text-xl'>{overview}</p>
            <div className='space-x-6'>
              <Link to={`/check_out/${_id}`} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg normal-case">Enrol Now</Link>
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
            <Link to={`/check_out/${_id}`} className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg normal-case">Join Our premium plans</Link>
            <Link className="btn btn-outline btn-error sm:btn-sm md:btn-md lg:btn-lg normal-case">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FullCourseDetails;