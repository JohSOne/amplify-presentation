/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading, SearchField, View } from "@aws-amplify/ui-react";
import RecipeCard from "./RecipeCard";
export default function RecipeApp(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1301px"
      height="744px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RecipeApp")}
      {...rest}
    >
      <SearchField
        width="300px"
        height="unset"
        position="absolute"
        top="22px"
        left="983px"
        label="Label"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="34px"
        left="36px"
        level="1"
        children="Heading"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="125px"
        left="36px"
        padding="14px 8px 14px 8px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <RecipeCard
          display="flex"
          gap="0"
          direction="column"
          width="320px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="11px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(252,252,252,1)"
          {...getOverrideProps(overrides, "RecipeCard38707767")}
        ></RecipeCard>
        <RecipeCard
          display="flex"
          gap="0"
          direction="column"
          width="320px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="11px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(252,252,252,1)"
          {...getOverrideProps(overrides, "RecipeCard38707753")}
        ></RecipeCard>
        <RecipeCard
          display="flex"
          gap="0"
          direction="column"
          width="320px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="11px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(252,252,252,1)"
          {...getOverrideProps(overrides, "RecipeCard38707760")}
        ></RecipeCard>
      </Flex>
    </View>
  );
}
