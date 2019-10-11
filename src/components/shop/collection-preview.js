import React from "react";

import { withRouter } from "react-router-dom";

import CollectionItem from "./collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./styles/collection-preview-styles";

const CollectionPreview = props => {
  const { title, items, history, match, routeName } = props;
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items.slice(0, 4).map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
