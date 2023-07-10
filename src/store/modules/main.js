import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        headerConfig: {
            isFixed:false     //是否是固定定位
        }
    },
    reducers: {
        changeHeaderConfigAction(state, { payload }) {
            state.headerConfig = payload
        }
    }

})
export const {changeHeaderConfigAction}=mainSlice.actions
export default mainSlice.reducer