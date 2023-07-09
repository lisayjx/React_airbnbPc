import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomItemSwiperWrapper } from './style'

import { Rate, Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IndicatorView from '@/base-ui/indicator-view';
import classNames from 'classnames';


const RoomItemSwiper = memo((props) => {

    const { itemData, itemWidth = '25%' ,clickItem} = props
    const sliderRef = useRef()


    // 获取到 当前选择的索引
    const [selectIndex, setSelectIndex] = useState(0)

    // 修改指示器 
    function changeIndicator(isPrev) {
        let newIndex = isPrev ? selectIndex - 1 : selectIndex + 1
        if (newIndex < 0) newIndex = itemData.picture_urls.length - 1  //如果再没有上一张了，就到最后一张
        if (newIndex > itemData.picture_urls.length - 1) newIndex = 0

        setSelectIndex(newIndex)
    }
 

    // 点击 左右 按钮 切换轮播图
    function clickSwiperBtn(isLeft) {
        // 左侧按钮
        if (isLeft) {
            sliderRef.current.prev()
        } else {
            // 右侧按钮
            sliderRef.current.next()
        }
        changeIndicator(isLeft)
    }

    // 点击 item
    function clickItemhandle(){
    //    调用外部传来的函数
    clickItem && clickItem(itemData) 
    }
    return (
        <RoomItemSwiperWrapper
            verifyColor={itemData.verify_info.text_color || '#39576a'}
            itemWidth={itemWidth}
            onClick={clickItemhandle}>
            <div className="inner">

                {/* <div className="cover">
                    <img src={itemData.picture_url} alt="" />
                </div> */}

                {/* 轮播图 */}
                <div className="swiper">
                    {/*1.按钮 */}
                    <div onClick={e => clickSwiperBtn(true)} className="control leftBtn"> <IconArrowLeft width={24} height={24} /> </div>
                    <div onClick={e => clickSwiperBtn(false)} className="control rightBtn"><IconArrowRight width={24} height={24}></IconArrowRight></div>
                    {/* 2.指示器组件 */}
                    <div className="indicator">
                        <IndicatorView selectIndex={selectIndex}>
                            {
                               itemData?.picture_urls?.map((item, index) => {
                                  return   (
                                <div className='item' key={item}>
                                    <span className={classNames("dot", {active: selectIndex === index})}></span>
                                </div>
                                  )
                                })
                            }
                        </IndicatorView>
                    </div>
                    {/* 3.轮播图 */}
                    <Carousel dots={false} ref={sliderRef}>
                        {
                            itemData?.picture_urls?.map((url, index) => {
                                return (
                                    <div className="cover" key={index}>
                                        <img src={url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>

                <div className="desc">{itemData.verify_info.messages.join("-")}</div>
                <div className="name">{itemData.name}</div>
                <div className="price">￥{itemData.price}/晚</div>

                <div className="bottom">
                    <Rate allowHalf disabled defaultValue={itemData.star_rating ?? 5} style={{ color: 'green', fontSize: '10px' }} />
                    <span className='count'>{itemData.reviews_count}</span>
                    {itemData.bottom_info && <span className='fd'>·{itemData.bottom_info.content}</span>}
                </div>
            </div>
        </RoomItemSwiperWrapper>

    )
})

RoomItemSwiper.propTypes = {
    itemData: PropTypes.object,
    itemWidth: PropTypes.string
}

export default RoomItemSwiper