import { createSelector } from 'reselect'

const selectMenu = state => state.menu

export const selectMenuVisible = createSelector(
    [selectMenu],
    menu => menu.visible
)