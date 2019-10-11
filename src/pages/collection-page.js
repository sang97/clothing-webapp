import React from "react";
import { connect } from "react-redux";
import { selectShopCollectionWithUrlParam } from "../redux/shop/shop-selector";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from "./styles/collection-page-styles";

import CollectionItem from "../components/shop/collection-item";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectShopCollectionWithUrlParam(props.match.params.collectionId)(
    state
  )
});

export default connect(mapStateToProps)(CollectionPage);
