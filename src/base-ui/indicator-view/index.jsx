import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const IndicatorView = memo((props) => {
  const { selectIndex } = props
  const dotRef = useRef()

  // 等组件内容渲染完毕
  useEffect(() => {
    // 获取selectIndex 要滚动的距离
    // 1.找到当前项
    const currentItem = dotRef.current.children[selectIndex]
    // 2.计算滚动距离
    let distance = (currentItem.offsetLeft + currentItem.clientWidth * 0.5) - (dotRef.current.clientWidth * 0.5)


    // 3.不能滚动的情况
    if (distance < 0) distance = 0
    const contentScroll = dotRef.current.scrollWidth//滚动的距离 
    const totalDistance = contentScroll - dotRef.current.clientWidth
    if (distance > totalDistance) distance = totalDistance

    //4.改变位置
    dotRef.current.style.transform = `translateX(${-distance}px)`

  }, [selectIndex])

  return (
    <IndicatorWrapper >

      <div className="i-content" ref={dotRef}>
        {
          props.children
        }
      </div>

    </IndicatorWrapper>
  )
})

IndicatorView.propTypes = {
  selectIndex: PropTypes.number
}

export default IndicatorView