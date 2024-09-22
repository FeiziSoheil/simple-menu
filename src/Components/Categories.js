import React, { useState,useEffect } from "react";
import menu from '../data'

const Categories = ({mainCategory,setMainCategory}) => {

  const [category, setCategory] = useState();
  console.log(category);
  

  useEffect(() => {
    let categoryArr = menu.map(categoryItem => {return categoryItem.category});
    console.log(categoryArr);
    let categorySet = new Set(categoryArr);

    setCategory([...categorySet]);
    
 

  }, []);


  return (
    <div className="btn-container">
      <button
        type="button"
        // highlight class  for highlight main category
        className={` ${mainCategory==='all' ? 'highlight filter-btn' : 'filter-btn'}`}
        onClick={() => setMainCategory('all')}

      >
        All
      </button>
      {category&& category.map((item) =>(
        <button type="button"
        key={item}
        onClick={() => setMainCategory(item)}
        className={` ${mainCategory===item ? 'highlight filter-btn' : 'filter-btn'}`} >{item}</button>
      ))  }
    </div>
  );
};

export default Categories;
