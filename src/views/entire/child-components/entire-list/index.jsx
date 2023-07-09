
import React, { memo  } from 'react'
import { EntireListWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItemSwiper from '@/components/room-item-swiper'
import { useNavigate } from 'react-router-dom'
import { changeDetailData } from '@/store/modules/detail'

const EntireList = memo((props) => {


  const { roomList, totalCount, isLoading } = useSelector(state => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }
  }, shallowEqual)
  // 点击 room-item-swiper里的item
  const navigate = useNavigate()
  const dispatch=useDispatch()

function handleClickItem(item){
  // 跳转到详情页
  navigate('/detail')
  //  把数据存入redux 
  dispatch(changeDetailData(item))

}
  


  return (
    <EntireListWrapper>
      <h2>共{totalCount}处住所</h2>

      <div className="room-list">
        {
          roomList.map(item => {
            return <RoomItemSwiper clickItem={e => handleClickItem(item)} itemData={item} itemWidth='20%' key={item.id}></RoomItemSwiper>
          })
        }
      </div>

      {/* 蒙版 */}
      {isLoading && <div className="list-cover"></div>}

    </EntireListWrapper>
  )
})



export default EntireList