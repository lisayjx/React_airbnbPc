
import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import DetailPicture from './child-components/detail-picture'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo((props) => {
  const dispatch=useDispatch()
  // 获取redux里的 数据
  const {detailData} =useSelector((state)=>{
    return {
      detailData:state.detail.detailData
    }
  })
  useEffect(()=>{
     //  派发固定定位
     dispatch(changeHeaderConfigAction({isFixed:false}))
  },[dispatch])
  return (
    <DetailWrapper>
       {/* 图片组件 */}
       <DetailPicture detailData={detailData}></DetailPicture>
    </DetailWrapper>
  )
})


export default Detail