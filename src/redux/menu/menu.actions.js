import MenuActionTypes from './menu.types'

export const toggleMenu = () => ({
    type: MenuActionTypes.TOGGLE_MENU
})

export const closeMenu = () => ({
    type: MenuActionTypes.CLOSE_MENU
})