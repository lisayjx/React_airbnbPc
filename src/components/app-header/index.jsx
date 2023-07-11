import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './child-components/h-left'
import HeaderCenter from './child-components/h-center'
import HeaderRight from './child-components/h-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from '@mui/material'


const AppHeader = memo(() => {


  // 获取redux里的 是否固定定位
  const { headerConfig } = useSelector(state => {
    return {
      headerConfig: state.main.headerConfig
    }
  }, shallowEqual)
  const { isFixed, isTopAlpha } = headerConfig

  // 记录 是不是搜索状态
  const [isSearch, setIsSearch] = useState(false)

  //点击搜索
  function handleClickSearch(showSearchInfo) {
    setIsSearch(showSearchInfo)
  }
  // 点击 cover
  function clickCover() {
    setIsSearch(false)
  }


  // 如果 页面滚动超过100 就关闭搜索状态
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0) //之前滚动到的位置
  // 如果不是搜素状态 他俩相等 一直记录
  if (!isSearch) prevY.current = scrollY
  //  如果是搜索状态 当前滚动距离比上一次滚动距离大与100时候 就把搜索状态关闭
  if (isSearch && Math.abs(scrollY - prevY.current) > 100) setIsSearch(false)


  // 透明度 （只有首页并且只有在顶部时候有）
  const isAlpha = isTopAlpha && scrollY === 0


  return (
    <ThemeProvider theme={{isAlpha:isAlpha}} >
      <HeaderWrapper className={classNames({ fixed: isFixed })} isSearch={isSearch} >
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter clickSearch={handleClickSearch} isSearch={isSearch}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>

          <div className="block-area"> </div>
        </div>

        {isSearch && <div className="cover" onClick={clickCover}></div>}


      </HeaderWrapper>
    </ThemeProvider>

  )
})

export default AppHeader