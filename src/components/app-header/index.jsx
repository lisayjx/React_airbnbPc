import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './child-components/h-left'
import HeaderCenter from './child-components/h-center'
import HeaderRight from './child-components/h-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'


const AppHeader = memo(() => {
  // 获取redux里的 是否固定定位
  const {headerConfig}=useSelector(state=>{
    return{
      headerConfig:state.main.headerConfig
    }
  },shallowEqual)
  const {isFixed} =headerConfig
  console.log(isFixed);
  return (
    <HeaderWrapper className={classNames({fixed:isFixed})}>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader