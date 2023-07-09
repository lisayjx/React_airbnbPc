import { getEntire } from '@/services/modules/entire';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//网络请求
export const fetchEntireDataAction = createAsyncThunk('fetchData', (payload=0, { dispatch, getState }) => {
    // 修改currentPage
    dispatch(changeCurrentPageAction(payload))


    // 拿到当前页码 做偏移
    // const currentPage = getState().entire.currentPage
    const offset = payload * 20

    // 发送网络请求前
    dispatch(changeIsLoadingAction(true))


    //获取数据（发送网络请求）
    getEntire(offset).then(res => {
        dispatch(changeRoomListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))

        // 网络请求结束后
        dispatch(changeIsLoadingAction(false))
    })
})



const entireSlice = createSlice({
    name: 'entire',
    initialState: {
        currentPage: 0, //当前页码
        totalCount: 0,    //总数据个数
        roomList: [], //房间列表
        isLoading:false  //是否在网络请求加载数据

    },
    reducers: {
        changeCurrentPageAction(state, { payload }) {
            state.currentPage = payload
        },
        changeTotalCountAction(state, { payload }) {
            state.totalCount = payload
        },
        changeRoomListAction(state, { payload }) {
            state.roomList = payload
        },
        changeIsLoadingAction(state, { payload }) {
            state.isLoading = payload
        },
    }
})
export const { changeCurrentPageAction, changeTotalCountAction, changeRoomListAction,changeIsLoadingAction } = entireSlice.actions
export default entireSlice.reducer
