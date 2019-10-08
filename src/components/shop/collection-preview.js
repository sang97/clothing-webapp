import React from "react";

import "../../styles/styles.scss";
import CollectionItem from "./collection-item";

const CollectionPreview = props => {
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps}/>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;