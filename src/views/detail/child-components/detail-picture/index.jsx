
import React, { memo, useState } from 'react'
import { DetailPictureWrapper } from './style'
import PicBrowser from '@/base-ui/pic-browser'

const DetailPicture = memo((props) => {
    const { detailData } = props
    const [showPicBrowser, setShowPicBrowser] = useState(false)  //图片浏览器的显示与隐藏关

    // 点击查看图片
    function openPictureBrowser() {
        setShowPicBrowser(true)
    }
    function handleClosePic(isClosePic) {
        setShowPicBrowser(isClosePic)
    }
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

            <div className='show-btn' onClick={openPictureBrowser}>查看照片</div>

            {/* 图片浏览器组件 */}
            {showPicBrowser && <PicBrowser closePicHandle={handleClosePic} picUrls={detailData.picture_urls}></PicBrowser>}
        </DetailPictureWrapper>
    )
})


export default DetailPicture