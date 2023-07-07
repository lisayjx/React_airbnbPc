// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [showRightBtn,setShowRightBtn]=useState(false)
    const scrollContentRef=useRef()



    useEffect(()=>{
    // 如果 滚动内容距离-clientWidth >0 就意味着超出了 可以显示 右侧按钮 
    const scrollWidth=scrollContentRef.current.scrollWidth  //一共可以滚动的距离
    const clientWidth=scrollContentRef.current.clientWidth//本身占据宽度
    const totalDistance=scrollWidth-clientWidth 
    setShowRightBtn(totalDistance>0)
 
    },[props.children])  //如果props.children更新就重新渲染
 
    return (
        <ScrollViewWrapper>
            {/* 左边按钮 */}
            <div className="control left"><IconArrowLeft></IconArrowLeft></div>
            {/* 右边按钮 */}
            {showRightBtn && <div className="control right"><IconArrowRight></IconArrowRight></div>}
            

            {/* 插槽里的内容 由插入者决定 */}
            <div className="slot" ref={scrollContentRef}>
               <div className="content"> {props.children}</div>
            </div>

            
        </ScrollViewWrapper>
    )
})

// ScrollView.propTypes = {}

export default ScrollView