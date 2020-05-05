import { combineReducers } from 'redux'

import menuReducer from './menu/menu.reducer'
import directoryReducer from './directory/directory.reducer'

export default combineReducers({
    menu: menuReducer,
    directory: directoryReducer
})