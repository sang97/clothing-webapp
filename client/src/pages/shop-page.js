import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../redux/shop/shop-actions";

import CollectionOverviewContainer from "../components/shop/collection-overview-container";
import CollectionPageContainer from "../components/shop/collection-page-container";

const ShopPage = props => {
  const { fetchCollectionsStartAsync, match } = props;

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
