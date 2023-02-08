const showPageNumbers = (currentPage,numberOfPages,setCurrentPage)=>{

  return (

    Array.from(Array(numberOfPages),(e,i)=>{

      let p = i + (currentPage - (currentPage%numberOfPages));

      return(
        <div 
          key={p+1} 
          className={p+1===currentPage ? 'active' : null}
          onClick={()=>setCurrentPage(p+1)}
        >
          {p+1}
        </div>
      )
    })

  ) 
}

export default showPageNumbers;