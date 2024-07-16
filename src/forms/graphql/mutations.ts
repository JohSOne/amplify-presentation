/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPoi = /* GraphQL */ `
  mutation CreatePoi(
    $condition: ModelPoiConditionInput
    $input: CreatePoiInput!
  ) {
    createPoi(condition: $condition, input: $input) {
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
export const deletePoi = /* GraphQL */ `
  mutation DeletePoi(
    $condition: ModelPoiConditionInput
    $input: DeletePoiInput!
  ) {
    deletePoi(condition: $condition, input: $input) {
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
export const updatePoi = /* GraphQL */ `
  mutation UpdatePoi(
    $condition: ModelPoiConditionInput
    $input: UpdatePoiInput!
  ) {
    updatePoi(condition: $condition, input: $input) {
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
