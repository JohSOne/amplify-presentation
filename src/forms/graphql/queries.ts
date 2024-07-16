/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPoi = /* GraphQL */ `
  query GetPoi($id: ID!) {
    getPoi(id: $id) {
      aboveTitle
      contentText
      coordinates
      createdAt
      id
      image
      title
      updatedAt
      __typename
    }
  }
`;
export const listPois = /* GraphQL */ `
  query ListPois(
    $filter: ModelPoiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPois(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        aboveTitle
        contentText
        coordinates
        createdAt
        id
        image
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
