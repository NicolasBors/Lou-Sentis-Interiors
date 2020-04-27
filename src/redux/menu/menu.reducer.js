import MenuActionTypes from './menu.types'

const INITIAL_STATE = {
    visible: false
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU:
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return state
    }
}

export default menuReducer
