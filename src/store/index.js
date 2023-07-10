import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireSlice from './modules/entire'
import detailSlice from './modules/detail'
import mainSlice from './modules/main'

const store=configureStore({
    reducer:{
        home:homeReducer,
        entire:entireSlice,
        detail:detailSlice,
        main:mainSlice,
    }
})

export default store