import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const languageReducer = createSlice({
    name: 'language',
    initialState : {
        language:"english"
    },
    reducers : {
        setLanguageAction : (state, action) => {
            let lang= action.payload
            return {
                language:lang
            }
        },
    }
})

export const { setLanguageAction } = languageReducer.actions;

export default languageReducer.reducer;