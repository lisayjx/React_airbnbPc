import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => {

  const navigate=useNavigate()
  
  function clickLogo(){
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
      {/* logo */}
      <div className="logo" onClick={clickLogo}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>

  )
})

export default HeaderLeft