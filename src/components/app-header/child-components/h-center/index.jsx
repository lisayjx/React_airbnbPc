import React, { memo, useCallback, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-components/search-tabs'
import SearchSections from './c-components/search-sections'
import searchTitles from '@/assets/data/search_titles.json'
import { CSSTransition } from 'react-transition-group'
const HeaderCenter = memo((props) => {
  const { isSearch, clickSearch } = props

  const [currentTabsIndex, setCurrentTabsIndex] = useState(0)


  const clickTabsHandle = useCallback((index) => {
    setCurrentTabsIndex(index)
  }, [])

  function handleClickSearch() {
    // 告诉父亲 开启搜索
    clickSearch(true)
  }
  return (
    // <HeaderCenterWrapper>
    //   {
    //     !isSearch && (
    //       <div className="search-bar" onClick={handleClickSearch}>
    //         <div className="text">搜索房源和体验</div>
    //         <div className="icon">
    //           <IconSearchBar />
    //         </div>
    //       </div>
    //     )
    //   }


    //   {/* 这里放 新的两个组件 */}
    // {
    //   isSearch && (
    //     <div className="searchDetail">
    //     <SearchTabs searchTitles={searchTitles} handleClickTabs={clickTabsHandle}></SearchTabs>
    //     <div className="infos">
    //       <SearchSections searchInfo={searchTitles[currentTabsIndex].searchInfos} ></SearchSections>
    //     </div>
    //   </div>
    //   )
    // }
    // </HeaderCenterWrapper>

    <HeaderCenterWrapper>

      <CSSTransition timeout={250} classNames='bar' in={!isSearch} unmountOnExit={true}>
        <div className="search-bar" onClick={handleClickSearch}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>




      <CSSTransition timeout={250} classNames='detail' in={isSearch} unmountOnExit={true}>
        <div className="searchDetail">
          <SearchTabs searchTitles={searchTitles} handleClickTabs={clickTabsHandle}></SearchTabs>
          <div className="infos">
            <SearchSections searchInfo={searchTitles[currentTabsIndex].searchInfos} ></SearchSections>
          </div>
        </div>
      </CSSTransition>



    </HeaderCenterWrapper>
  )
})

export default HeaderCenter