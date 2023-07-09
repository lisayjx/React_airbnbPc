
import React, { memo } from 'react'
import { DetailPictureWrapper } from './style'

const DetailPicture = memo((props) => {
    const { detailData } = props
    return (
        <DetailPictureWrapper>
            <div className="top">
                {/*左 */}
                <div className="left">
                    <div className='item' >
                        <img src={detailData?.picture_urls[0]} alt="" />
                        <div className='cover'></div>
                    </div>
                </div>
                {/* 右 */}
                <div className="right">
                    {
                        detailData?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className='item' key={item}  >
                                    <img src={item} alt="" />
                                    <div className='cover'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className='show-btn'  >查看照片</div>
        </DetailPictureWrapper>
    )
})


export default DetailPicture