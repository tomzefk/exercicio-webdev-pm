import { createSlice } from '@reduxjs/toolkit'

// Get data from backend
const INITIAL_STATE = {
    userInfo: {
        email: "pm@premium-minds.com",
        password: "password",
        phone: "+351 912345678"
    },
    userType: ["dev", "arch"]
}

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: INITIAL_STATE,
    reducers: {
        toggle_type: (state, action) => {
            switch (action.payload.func) {
                case "active":
                    state.userType.push(action.payload.id)
                    break;
                case "inactive":
                    state.userType.splice(state.userType.indexOf(action.payload.id), 1)
            }
        },
        update: (state, action) => {
            state.userInfo[action.payload.id] = action.payload.value
        },
        reset: (state) => {
            return { ...INITIAL_STATE }
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggle_type, update, reset } = userSettingsSlice.actions

export default userSettingsSlice.reducer