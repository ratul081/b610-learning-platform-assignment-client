import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://b610-learning-platform-assignment-server-ratul-44.vercel.app/course-categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div className=' mt-8 lg:mt-12 space-y-2 lg:space-y-6'>
      {
        categories.map(category =>
          <div key={category.id}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 text-lg lg:text-xl m-6" : "text-lg lg:text-xl m-6"
              }
              to={`category/${category.id}`}>{category.name}</NavLink>
          </div>
        )
      }
    </div>

  );
};

export default LeftSidebar;