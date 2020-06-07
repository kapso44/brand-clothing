import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { updateCollection } from "../../redux/collection/shop.actions";
import {
  firestore,
  convertSnapshotCollectionToMap,
} from "../../firebase/firebase.utils";
import "./shop.scss";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollection} = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertSnapshotCollectionToMap(snapshot);
      updateCollection(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
