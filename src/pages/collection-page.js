import React from "react";
import { connect } from "react-redux";
import { selectShopCollectionWithUrlParam } from "../redux/shop/shop-selector";

import "../styles/styles.scss";

import CollectionItem from "../components/shop/collection-item";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectShopCollectionWithUrlParam(props.match.params.collectionId)(
    state
  )
});

export default connect(mapStateToProps)(CollectionPage);
