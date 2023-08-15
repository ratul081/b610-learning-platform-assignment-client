import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      <div className='mt-12 space-y-6'>
        {
          categories.map(category =>
            <div key={category.id}>
              <Link to={`category/${category.id}`} className='text-xl m-6'>{category.name}</Link>
            </div>
          )
        }
      </div>
    </div >
  );
};

export default LeftSidebar;