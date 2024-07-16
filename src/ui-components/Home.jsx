/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Navigation from "./Navigation";
import { Flex } from "@aws-amplify/ui-react";
export default function Home(props) {
  const { rightContainer, leftContainer, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1460px"
      height="1088px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Home")}
      {...rest}
    >
      <Navigation
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
        padding="16px 32px 16px 32px"
        backgroundColor="rgba(255,255,255,1)"
        variation="default"
        {...getOverrideProps(overrides, "Navigation")}
      ></Navigation>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContainer")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="1040px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          children={leftContainer}
          {...getOverrideProps(overrides, "LeftContainer")}
        ></Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="1000px"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="5px 10px 5px 10px"
          children={rightContainer}
          {...getOverrideProps(overrides, "RightContainer")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
