import React,{useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [x, setx] = useState(window.location.pathname.slice(0, -1))

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  <div className="all">
    <div className="pagination-style">
      {/* <ul className='pagination'> */}
      
        {pageNumbers.map(number => (
        //   <li key={number} className='page-item'>
            <a key={number} onClick={() => paginate(number)} href={`${x}${number}`} className='page-link'>
              {number}..
            </a>
        //   </li>
        ))}
      {/* </ul> */}
    </div>
  </div>
  );
};

export default Pagination;