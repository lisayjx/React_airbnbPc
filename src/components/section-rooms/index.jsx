import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const {roomList=[],itemWidth}=props
  return (
    <SectionRoomsWrapper>
 
            {
              roomList?.slice(0,8).map(item=>{
                return <RoomItem itemWidth={itemWidth} itemData={item} key={item.id}></RoomItem>
              })
            }
 
     </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
    roomList:PropTypes.array,
    itemWidth:PropTypes.string
}

export default SectionRooms