import { createSelector } from 'reselect'

const selectCollection = state => state.collection;

export const selectCollectionItems = createSelector(
    [selectCollection],
    collection => collection
)

export const selectCollectionsForPreview = createSelector(
    [selectCollectionItems],
    collection => Object.keys(collection).map(key => collection[key]) 
)

export const selectCollectionIds = (collectionUrlParam) => createSelector(
    [selectCollection],
    collection => collection[collectionUrlParam]
)