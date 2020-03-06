import React from 'react'
import { connect } from 'react-redux'
import { selectCollectionIds } from '../../redux/collection/collection.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.scss'

const CollectionPage = ({ match, collections }) => {
const { title, items } = collections
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => 
                        <CollectionItem key={item.id} item={item}/>    
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collections : selectCollectionIds(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)