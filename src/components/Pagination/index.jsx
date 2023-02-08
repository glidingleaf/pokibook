import './Pagination.css';
import showPageNumbers from './showPageNumbers.jsx';


const Pagination = ({currentPage,setCurrentPage}) => {

  const numberOfPages = 5;
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



export default Pagination;