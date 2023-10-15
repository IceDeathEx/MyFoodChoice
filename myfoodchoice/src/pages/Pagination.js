import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  <div>
    <div className="pagination-style">
      {/* <ul className='pagination'> */}
      
        {pageNumbers.map(number => (
        //   <li key={number} className='page-item'>
            <a key={number} onClick={() => paginate(number)} href={`/orderfood/page/${number}`} className='page-link'>
              {number}
            </a>
        //   </li>
        ))}
      {/* </ul> */}
    </div>
  </div>
  );
};

export default Pagination;