import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
    const { tabsName = [], tabClick } = props
    const [currentIndex, setCurrentIndex] = useState(0)

    // 点击tab
    function handleItemClick(index, name) {
        setCurrentIndex(index)
        //  父亲传过来的函数,把index和name给他
        tabClick(index, name)
    }



    return (

        <SectionTabsWrapper>

            <ScrollView>
                {/* 插槽内容，插入到 滚动条组件里 */}

                {
                    tabsName?.map((item, index) => {
                        return (
                            <div
                                className={classNames("item", { active: index === currentIndex })}
                                key={item}
                                onClick={e => handleItemClick(index, item)}>{item}
                            </div>
                        )
                    })
                }


            </ScrollView>
        </SectionTabsWrapper>


    )
})

SectionTabs.propTypes = {
    tabsName: PropTypes.array
}

export default SectionTabs