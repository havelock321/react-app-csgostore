import React from "react";
import SHOPDATA from "./shop.data";
import CSGODATA from "./shop.dataCSGO";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: CSGODATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionsProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
