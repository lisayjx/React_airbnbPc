import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './child-components/h-left'
import HeaderCenter from './child-components/h-center'
import HeaderRight from './child-components/h-right'


const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader