import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../components/shop/collection-overview";
import CollectionPage from "./collection-page";

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
