import SubmenuActionTypes from './submenu.types'

export const toggleSubmenu = () => ({
    type: SubmenuActionTypes.TOGGLE_SUBMENU
})

export const closeSubmenu = () => ({
    type: SubmenuActionTypes.CLOSE_SUBMENU
})