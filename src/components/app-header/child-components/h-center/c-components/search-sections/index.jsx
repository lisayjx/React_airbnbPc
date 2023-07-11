import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchSectionsWrapper } from './style'

const SearchSections = memo((props) => {
  const { searchInfo } = props
  return (
    <SearchSectionsWrapper>
      {
        searchInfo?.map((item, index) => {
          return (
            <div className="info" key={index}>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          )
        })
      }
    </SearchSectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfo:PropTypes.array
}

export default SearchSections