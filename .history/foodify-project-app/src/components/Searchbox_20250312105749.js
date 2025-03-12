import React from 'react'

const Searchbox = () => {
  return (
    <div>
      <div className="header_search">
              <input className="header_input" type= 'text' placeholder='Search...'/>
              <button className='search-button'><FaSearch /></button>
            </div>
    </div>
  )
}

export default Searchbox
