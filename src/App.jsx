import React, { memo } from 'react'
import {useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {


  // 切换页码就 滚到顶部
 useScrollTop()



  return (
    <div className='app'>
      {/* 1.header */}
      <AppHeader></AppHeader>

      {/* 2.中间切换页 */}
      <div className="page">
        {useRoutes(routes)}
      </div>

      {/* 3.footer */}
      <AppFooter></AppFooter>
    </div>
  )
})

export default App
