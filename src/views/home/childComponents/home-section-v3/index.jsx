import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionV3 = memo((props) => {
    const { homeSectionInfoV3 } = props
    return (
        <HomeSectionV3Wrapper>
            {/* 头 */}
            <SectionHeader title={homeSectionInfoV3.title} subTitle={homeSectionInfoV3.subtitle}></SectionHeader>
            {/* 内容 */}

            <div className="content">
                <ScrollView>
                    {
                        homeSectionInfoV3.list.map((item,index) => {
                            return <RoomItem itemData={item} itemWidth='20%' key={index}></RoomItem>
                        })
                    }
                </ScrollView>
            </div>





        </HomeSectionV3Wrapper>
    )
})

HomeSectionV3.propTypes = {
    homeSectionInfoV3: PropTypes.object
}

export default HomeSectionV3