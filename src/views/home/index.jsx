import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './childComponents/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './childComponents/home-section-v1'
import HomeSectionV2 from './childComponents/home-section-v2'
import { isEmptyObj } from '@/utils/is-empty-object'

const Home = memo(() => {
  // 从redux里获取goodPrice数据  
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo } = useSelector(state => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo
    }
  }, shallowEqual)


  // 派发dispatch发起网络请求(home页的所有请求)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())

  }, [dispatch])


  return (
    <HomeWrapper>

      {/* 轮播图 */}
      <HomeBanner />
      {/* 内容 */}
      <div className="content">

        {/* 3.热门目的地（折扣）区域 ，dest_list["成都"]这里是对象.key不是数组*/}
        {isEmptyObj(discountInfo) && <HomeSectionV2 homeSectionInfoV2={discountInfo}></HomeSectionV2>}

        {/* 1.高性价比区域 */}
        {isEmptyObj(goodPriceInfo) && <HomeSectionV1 homeSectionInfoV1={goodPriceInfo}></HomeSectionV1>}

        {/* 2.高评分区域 */}
        {isEmptyObj(highScoreInfo) && <HomeSectionV1 homeSectionInfoV1={highScoreInfo}></HomeSectionV1>}

        {/* 4.热门推荐 */}
        {isEmptyObj(hotRecommendInfo) && <HomeSectionV2 homeSectionInfoV2={hotRecommendInfo}></HomeSectionV2>}
      </div>






    </HomeWrapper>
  )
})

export default Home