import SubmenuActionTypes from './submenu.types'

const INITIAL_STATE = {
    visible: false
}

const submenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SubmenuActionTypes.TOGGLE_SUBMENU:
            return {
                ...state,
                visible: !state.visible
            }
        case SubmenuActionTypes.CLOSE_SUBMENU:
            return {
                ...state,
                visible: false
            }
        default:
            return state
    }
}

export default submenuReducer
