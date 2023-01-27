import React from 'react';
import './Pagination.css';


const Pagination = () => {

  const numberOfPages = 5;
  const currentPage = 1;


  return (
    <nav className='pagination'>
      <div>{'<'}</div>
      {
        showPageNumbers(currentPage,numberOfPages)
      }
      <div>{'>'}</div>
    </nav>
  )
}

const showPageNumbers = (currentPage,numberOfPages)=>{
  return (
    Array.from(Array(numberOfPages),(e,i)=>{
      return(
        <div className={i+1===currentPage ? 'active' : null}>
          {i+1}
        </div>
      )
    })
  )
}

export default Pagination;