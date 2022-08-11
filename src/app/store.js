import { configureStore } from '@reduxjs/toolkit'

import userSettingsSlice from '../pages/userSettings/js/userSettingsSlice'

export default configureStore({
  reducer: {
    userSettings: userSettingsSlice
  },
})