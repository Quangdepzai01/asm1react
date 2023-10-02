import React from 'react'
import SearchPopup from './SearchPopul/SearchPopul';
import SearchList from './SearchList/SearchList'; 

const SearchPage = props => {
  return (
    <div className="row p-1">
        <div className={`col-3 fitHeigh`}>
          {/* //phan ben trai */}
          <SearchPopup />
        </div>
        <div className="col-9">
          {/* //phan ben phai */}
          <SearchList />
        </div>
      </div>
  )
}

export default SearchPage;