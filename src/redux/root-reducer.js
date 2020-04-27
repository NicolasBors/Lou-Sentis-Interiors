import { combineReducers } from 'redux'

import menuReducer from './menu/menu.reducer'

export default combineReducers({
    menu: menuReducer
})