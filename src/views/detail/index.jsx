
import React, { memo } from 'react'
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import DetailPicture from './child-components/detail-picture'

const Detail = memo((props) => {
  // 获取redux里的 数据
  const {detailData} =useSelector((state)=>{
    return {
      detailData:state.detail.detailData
    }
  })
  return (
    <DetailWrapper>
       {/* 图片组件 */}
       <DetailPicture detailData={detailData}></DetailPicture>
    </DetailWrapper>
  )
})


export default Detail