import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const HeaderRight = memo(() => {
    /** 显示状态 */
    const [showPanel, setShowPanel] = useState(false)


    /*** 副作用*/
  // 点击window就隐藏面板
  useEffect(() => {
    function clickWindowHandle(e){
      setShowPanel(false)
    }
    window.addEventListener('click',clickWindowHandle,true) 
    // 取消监听
    return ()=>{
      window.removeEventListener('click',clickWindowHandle,true)
    }
  },[]) //执行一次


  /*** 事件处理*/
  // 点击菜单就显示面板
 function profileClickHandle(){
  setShowPanel(true)
 }


  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconProfileMenu />
        <IconProfileAvatar />
        <div className="count"></div>

        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className=" item register">注册</div>
                <div className=" item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开源体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }

      </div>
    </HeaderRightWrapper>


  )
})

export default HeaderRight