import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "./../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const shopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default shopPage;
