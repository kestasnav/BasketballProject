import { connectSearchBox } from 'react-instantsearch-dom';
import Image from 'next/image';
import SearchIcon from './search.svg';
  
function Search ({ currentRefinement, isSearchStalled, refine }) {
  
  return (
      <div className='search'>
      <form noValidate action="" role="search">
        <input
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          placeholder={"  Search"}
          
          title='Search bar'
        
          
      />
      <Image className='img'
          src={SearchIcon}
          alt="search" 
          width="25px"
          heigth="25px"
          />
        
       </form>
       </div>
  )
}
  
export default Search