import React from 'react';
import './Pagination.css';


const Pagination = ({currentPage,setCurrentPage}) => {

  // setCurrentPage(6);
  const numberOfPages = 5;
  // console.log(1%5,'test');
  const goToPrevPage = ()=>{
    if(currentPage>1){
      setCurrentPage((page)=>page-1);
    }  
  }
  const goToNextPage = ()=>{
    setCurrentPage((page)=>page+1); 
  }


  return (
    <nav className='pagination'>
      <div onClick={goToPrevPage} className='change-page'>{'<'}</div>
      {
        
        showPageNumbers(currentPage,numberOfPages,setCurrentPage)
      }
      <div onClick={goToNextPage} className='change-page'>{'>'}</div>
    </nav>
  )

}

const showPageNumbers = (currentPage,numberOfPages,setCurrentPage)=>{
  return (
    Array.from(Array(numberOfPages),(e,i)=>{
      let p = 
      i + (currentPage - (currentPage%numberOfPages)) ;
      // console.log(p+1,currentPage);
      return(
        <div key={p+1} 
          className={p+1===currentPage ? 'active' : null}
          onClick={()=>setCurrentPage(p+1)}
        >
          {p+1}
        </div>
      )
    })
  )
}

export default Pagination;