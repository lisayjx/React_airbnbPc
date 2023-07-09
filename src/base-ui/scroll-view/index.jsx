// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [showRightBtn, setShowRightBtn] = useState(false)
    const [showLeftBtn, setShowLeftBtn] = useState(false)
    // const [totalDistance, setTotalDistance] = useState(0)
    const totalDistanceRef = useRef()//记录totalDistanceRef值，不随页面刷新
    const [posIndex, setPosIndex] = useState(0)
    const scrollContentRef = useRef()
    const scrollRef = useRef()
    // 副作用
    useEffect(() => {

        // 如果 滚动内容距离-clientWidth >0 就意味着超出了 可以显示 右侧按钮 
        const scrollWidth = scrollContentRef.current.scrollWidth  //一共可以滚动的距离
        const clientWidth = scrollContentRef.current.clientWidth//本身占据宽度
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        // setTotalDistance(totalDistance)
        setShowRightBtn(totalDistanceRef.current > 0)

    }, [props.children])  //如果props.children更新就重新渲染

    // 事件处理函数
    // 滚动的函数 
    function scrollHandle(newPosIndex) {
        // 获取item
        const itemEl = scrollRef.current.children[newPosIndex]
        // 获取每个item 的offsetLeft
        const itemOffset = itemEl.offsetLeft
        // // 设置 scroll的 translateX
        scrollRef.current.style.transform = `translateX(-${itemOffset}px)`
        setPosIndex(newPosIndex)
        // 是否继续显示右侧按钮
        setShowRightBtn(totalDistanceRef.current > itemOffset)
        // 是否显示 左侧按钮 ，itemOffset有值就显示
        setShowLeftBtn(itemOffset > 0)

    }
    function rightClickHandle() {
        const newPosIndex = posIndex + 1
        scrollHandle(newPosIndex)
    }
    function leftClickHandle() {
        const newPosIndex = posIndex - 1
        scrollHandle(newPosIndex)
    }

    return (
        <ScrollViewWrapper>
            {/* 左边按钮 */}
            {showLeftBtn && <div className="control left" onClick={leftClickHandle}><IconArrowLeft></IconArrowLeft></div>}
            {/* 右边按钮 */}
            {showRightBtn && <div className="control right" onClick={rightClickHandle}><IconArrowRight></IconArrowRight></div>}


            {/* 插槽里的内容 由插入者决定 */}
            <div className="slot" ref={scrollContentRef}>
                <div className="content" ref={scrollRef}> {props.children}</div>
            </div>
        </ScrollViewWrapper>
    )
})

// ScrollView.propTypes = {}

export default ScrollView