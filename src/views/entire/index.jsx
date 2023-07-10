import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './child-components/entire-filter'
import EntireList from './child-components/entire-list'
import EntirePagination from './child-components/entire-pagination'
import { useDispatch } from 'react-redux'
import {   fetchEntireDataAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo((props) => {
  const dispatch = useDispatch()


  // 副作用（组件挂载完毕执行）
  useEffect(() => {
    // 所有的网络请求都在这里
    dispatch(fetchEntireDataAction())
     //  派发固定定位
     dispatch(changeHeaderConfigAction({isFixed:true}))
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireList></EntireList>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})



export default Entire