import { createSelector } from 'reselect'

const selectSubmenu = state => state.submenu

export const selectSubmenuVisible = createSelector(
    [selectSubmenu],
    submenu => submenu.visible
)