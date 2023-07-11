import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchTabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const {searchTitles,handleClickTabs} =props


  function clickTabs(index){
    // 把index给父亲
   if(handleClickTabs) handleClickTabs(index)
  }
  return (
    <SearchTabsWrapper>
 
        {
          searchTitles?.map((item,index) => {
            return <div onClick={e=>clickTabs(index)} className="title" key={index}>{item.title}</div>
          })
        }
    

    </SearchTabsWrapper>
  )
})

SearchTabs.propTypes = {
  searchTitles:PropTypes.array
}

export default SearchTabs