import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'

import { Rate } from 'antd';
 

const RoomItem = memo((props) => {
    const { itemData, itemWidth='25%'} = props
    return (
        <RoomItemWrapper
         verifyColor={itemData.verify_info.text_color || '#39576a'}
         itemWidth={itemWidth}>
          <div className="inner">

            <div className="cover">
                <img src={itemData.picture_url} alt="" />
            </div>

            <div className="desc">{itemData.verify_info.messages.join("-")}</div>
            <div className="name">{itemData.name}</div>
            <div className="price">￥{itemData.price}/晚</div>

            <div className="bottom">
                <Rate allowHalf disabled defaultValue={itemData.star_rating ?? 5} style={{color:'green',fontSize:'10px' }} />
                <span className='count'>{itemData.reviews_count}</span>
               { itemData.bottom_info && <span className='fd'>·{itemData.bottom_info.content}</span> }
            </div>
          </div>
        </RoomItemWrapper>

    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth:PropTypes.string
}

export default RoomItem