import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import IndicatorView from '../indicator-view'
import classNames from 'classnames'

const PicBrowser = memo((props) => {
    const { picUrls, closePicHandle } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isNext, setIsNext] = useState(false)
    const [showBottomPicList,setShowBottomPicList]=useState(true)

    useEffect(() => {
        // 组件渲染完毕 隐藏滚动条
        window.document.body.style.overflow = 'hidden'

        return () => {//组件卸载 显示滚动条
            window.document.body.style.overflow = 'auto'
        }
    }, [])

    // 事件处理
    function closePic() {
        // 通知父亲关闭图片浏览器,把false传给父亲
        closePicHandle && closePicHandle(false)
    }
    //切换图片
    function changePic(isRight) {
        let newCurrentIndex = isRight ? currentIndex + 1 : currentIndex - 1
        if (newCurrentIndex < 0) newCurrentIndex = picUrls.length - 1
        if (newCurrentIndex > picUrls.length - 1) newCurrentIndex = 0
        setCurrentIndex(newCurrentIndex)

        // 是否是 下一张
        setIsNext(isRight)
    }
    // 指示器上 选中 哪张
    function imgItemClickHandle(index) {
        setCurrentIndex(index)
 
    }
    // 点击 隐藏/展示 下面的 图片列表
    function handleShowBottomPicList(){
        setShowBottomPicList(!showBottomPicList)  //取反
    }

    return (
        <BrowserWrapper isNext={isNext} showBottomPicList={showBottomPicList}>
            <div className="top" >
                <div className="close" onClick={closePic}>
                    <IconArrowLeft width={30} height={30}></IconArrowLeft>
                </div>
            </div>

            <div className="slider">
                <div className="control">
                    <div className="btn left" onClick={e => changePic(false)}><IconArrowLeft width={77} height={77}></IconArrowLeft></div>
                    <div className="btn right" onClick={e => changePic(true)}><IconArrowRight width={77} height={77}></IconArrowRight></div>
                </div>
                <div className="pictures">
                    <SwitchTransition mode='in-out'>
                        <CSSTransition classNames='pic' timeout={200} key={picUrls[currentIndex]}>
                            <img src={picUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    {/* 描述 */}
                    <div className='desc'>
                        <div className='count'>
                            <span>{currentIndex+1}/{picUrls.length}:</span>
                            <span> room Apartment图片 </span>
                        </div>
                        <div className='toggle' onClick={handleShowBottomPicList}>点击隐藏/展示照片列表</div>
                    </div>
                    {/* 图片列表 */}
                    <div className="list">
                        <IndicatorView selectIndex={currentIndex}>
                            {
                                picUrls?.map((item, index) => {
                                    return (
                                        <div
                                            className={classNames("item", { active: index === currentIndex })}
                                            key={item}
                                            onClick={e => imgItemClickHandle(index)}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }

                        </IndicatorView>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PicBrowser.propTypes = {
    picUrls: PropTypes.array
}

export default PicBrowser