import React from 'react';

const Categories = (props) => {
  return <div className='btn-container'>
    {
      props.btns.map((item, index)=> {
        return(
          <button
          onClick={() => props.funksiya(item)}
          key={index}
          className="filter-btn">
            {item}
          </button>
          
        )
      })
    }
  </div>;
};

export default Categories;
