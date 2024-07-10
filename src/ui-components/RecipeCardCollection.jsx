/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import RecipeCard from "./RecipeCard";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function RecipeCardCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "RecipeCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <RecipeCard
          width="auto"
          margin="0px 0px 0 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></RecipeCard>
      )}
    </Collection>
  );
}
