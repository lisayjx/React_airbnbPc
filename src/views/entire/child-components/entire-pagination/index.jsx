import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchEntireDataAction } from '@/store/modules/entire'

const EntirePagination = memo(() => {
const {currentPage,totalCount,roomList}=useSelector(state=>{
  return {
    currentPage:state.entire.currentPage,
    totalCount:state.entire.totalCount,
    roomList:state.entire.roomList

  }
})

//点击页码
const dispatch=useDispatch()
  function changePage(page,pageSize){
    window.scrollTo(0,0)  //滚到顶部

    // 更新页码（我们写的页码是从0开始的，但是这里选中的是从1开始的 所以减1）
    // dispatch(changeCurrentPageAction(page-1))
    // 重新 调用网络请求（他会根据新的页码进行请求）
    dispatch(fetchEntireDataAction(page-1)) 

    
  }
//从 x到y个房源
const startCount= 20*currentPage +1
const endCount=(currentPage+1) *20
  return (
   <EntirePaginationWrapper>
      <div className="page">
      <Pagination 
       current={currentPage+1} 
       total={totalCount}  
       pageSize={20}
       showSizeChanger={false}
        onChange={changePage}/>
      </div>
    {/* currentPage: 0 --- 1--20 
    currentPage: 1 --- 21·-40 */}
       {
        !!roomList.length && (
          <div className="desc">第{startCount}--{endCount}个房源,共超过{totalCount}个</div>
        )
       }
   </EntirePaginationWrapper>
  )
})

export default EntirePagination