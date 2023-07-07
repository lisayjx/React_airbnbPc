import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const {homeSectionInfoV1} =props
  return (
    <HomeSectionV1Wrapper>
         {/* 头部标题 */}
         <SectionHeader title={homeSectionInfoV1.title} subTitle={homeSectionInfoV1.subtitle}></SectionHeader>
          {/* 列表组件 */}
          <SectionRooms roomList={homeSectionInfoV1.list}></SectionRooms>
          {/* 尾部 */}
          <SectionFooter></SectionFooter>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
   homeSectionInfo:PropTypes.object,

}

export default HomeSectionV1