import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHotRecommend } from '@/services/modules/home'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 网络请求
export const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, { dispatch, getState }) => {
    // 获取高性价比
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    //   获取 高分好评
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    // 获取 热门目的地（折扣）
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHotRecommend().then(res=>{
        dispatch(changeHotRecommendInfoAction(res))
    })

})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},  //高性价比
        highScoreInfo: {},    //高分好评
        discountInfo: {} ,  //热门目的地（折扣）数据
        hotRecommendInfo :{}  //热门推荐
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeHotRecommendInfoAction(state, { payload }) {
            state.hotRecommendInfo = payload
        },
    },
    // extraReducers: {
    //     [fetchHomeDataAction.fulfilled](state, { payload }) {
    //         state.goodPriceInfo = payload
    //     }
    // }
})
export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommendInfoAction
} = homeSlice.actions
export default homeSlice.reducer
