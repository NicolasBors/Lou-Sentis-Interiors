import { combineReducers } from 'redux'

import menuReducer from './menu/menu.reducer'
import submenuReducer from './submenu/submenu.reducer'

export default combineReducers({
    menu: menuReducer,
    submenu: submenuReducer
})