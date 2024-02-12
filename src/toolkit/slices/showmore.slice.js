import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    showMoreOption: sessionStorage.getItem('showMoreOption'),
}

export const showmoreSlice = createSlice({
    name: 'showmore',
    initialState,
    reducers: {
        enableShowMore: (state) => {
            state.showMoreOption = "showmore"
            sessionStorage.setItem('showMoreOption', 'showmore');
        },
        enableShowLess: (state) => {
            state.showMoreOption = "showless"
            sessionStorage.setItem('showMoreOption', 'showless');
        },
        disableShowMoreOption: (state) => {
            state.showMoreOption = ""
            sessionStorage.removeItem('showMoreOption');
        },
    },
})

export const { enableShowMore, enableShowLess, disableShowMoreOption } = showmoreSlice.actions

export default showmoreSlice.reducer