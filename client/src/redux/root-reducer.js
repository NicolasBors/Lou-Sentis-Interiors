import { combineReducers } from 'redux'

import menuReducer from './menu/menu.reducer'
import directoryReducer from './directory/directory.reducer'
import linksReducer from './links/links.reducer'

export default combineReducers({
    menu: menuReducer,
    directory: directoryReducer,
    links: linksReducer
})