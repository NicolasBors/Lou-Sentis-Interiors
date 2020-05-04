import { createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)

export const selectDirectorySubsections = createSelector(
    [selectDirectory],
    directory => directory.subSections
)