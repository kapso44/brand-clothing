import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import './shop.scss'

const Shop = ({match}) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)

export default Shop