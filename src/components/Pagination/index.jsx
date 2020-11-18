import React from 'react'
import './pagination.css';
const Pagination = ({ 
  moviePerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for(let i= 1; i <= Math.ceil(totalPosts /moviePerPage); i++){
    pageNumbers.push(i);
  }
  
  const nextPage = (e) => {
    e.preventDefault();
    if(currentPage === pageNumbers.length){
      return 
    }
    setCurrentPage(currentPage + 1);
  }
  const previousPage = (e) => {
    e.preventDefault();
    if(currentPage === 1 ){
      return
    }
    setCurrentPage(currentPage - 1);
  }
  return (
    <nav className='navigation'>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <a className='page-link' href="!#" onClick={(e)=> previousPage(e)} >Previous</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}href="!#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className='page-item'>
          <a className='page-link' href="!#" onClick={(e)=> nextPage(e)}>Next</a>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination;