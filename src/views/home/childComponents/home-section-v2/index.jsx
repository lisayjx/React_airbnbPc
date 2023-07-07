import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'


const HomeSectionV2 = memo((props) => {
    // 从props获取数据
    const { homeSectionInfoV2 = {} } = props

    // 定义state
    const firstKey = Object.keys(homeSectionInfoV2.dest_list ?? {})[0] ?? ''
    const [name, setName] = useState(firstKey)
    const tabsName = homeSectionInfoV2.dest_address?.map(item => item.name)

    // 事件处理函数

    // 点击tab
    const handleTabClick = useCallback(function (index, name) {
        //  动态设置 地名
        setName(name)
    }, [])//没依赖任何东西所以空数组

    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={homeSectionInfoV2.title} subTitle={homeSectionInfoV2.subtitle}></SectionHeader>
            <SectionTabs tabsName={tabsName} tabClick={handleTabClick}></SectionTabs>
            <SectionRooms itemWidth='33.33%' roomList={homeSectionInfoV2.dest_list?.[name]}></SectionRooms>
            {/* 尾部 */}
            <SectionFooter tabName={name}></SectionFooter>
        </HomeSectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    discountInfo: PropTypes.object
}

export default HomeSectionV2