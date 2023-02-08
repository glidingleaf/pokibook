
 const toCamelCaps = (str)=>{
  
  return (
    str
    .replaceAll('-',' ')
    .replaceAll('_',' ')
    .split(' ')
    .map((word)=>word[0].toUpperCase()+word.substr(1))
    .toString()
    .replaceAll(',',' ')
  )
  
 }
 export default toCamelCaps;