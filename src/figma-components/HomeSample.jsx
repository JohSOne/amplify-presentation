import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image } from '@aws-amplify/ui-react';
import Navigation from './Navigation';
import POICard from './POICard';

export default function HomeSample(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="0"
    direction="column"
    width="1859px"
    height="1134px"
    justifyContent="flex-start"
    alignItems="flex-start"
    overflow="hidden"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "HomeSample")}
    {...rest}
  >
    <Navigation
      variation="default"
      {...getOverrideProps(overrides, "Navigation")}
    />
    <Flex
      gap="0"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      grow="1"
      shrink="1"
      basis="0"
      alignSelf="stretch"
      position="relative"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MainContainer")}
    >
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "LeftContainer")}
      >
        <Image
          display="block"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          objectFit="cover"
          alt=""
          {...getOverrideProps(overrides, "MapsImage")}
        />
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "RightContainer")}
      >
        <POICard
          variation="default"
          {...getOverrideProps(overrides, "card48461353")}
        />
        <POICard
          variation="default"
          {...getOverrideProps(overrides, "card48461368")}
        />
      </Flex>
    </Flex>
  </Flex>
  )
}
