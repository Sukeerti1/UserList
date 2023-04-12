import { configureStore } from "@reduxjs/toolkit"
import  userReducer  from "../features/user/userSlice"
//import counterReducer from "../features/counter/counterSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        // counter: counterReducer
    }
})

export default store