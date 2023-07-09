import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
    const { longForInfo } = props
    return (

        <HomeLongForWrapper>
            {/* 头部组件 section-header */}
            <SectionHeader title={longForInfo.title} subTitle={longForInfo.subtitle}></SectionHeader>


            <div className="longfor-list">
                <ScrollView>
                    {
                        longForInfo?.list?.map((item, index) => {
                            return <LongForItem itemData={item} key={index}></LongForItem>
                        })
                    }
                </ScrollView>
            </div>

        </HomeLongForWrapper>


    )
})

HomeLongFor.propTypes = {
    longForInfo: PropTypes.object
}

export default HomeLongFor