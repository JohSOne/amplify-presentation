import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image, Text, Button } from '@aws-amplify/ui-react';


export default function POICard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
  {
    "variantValues": {
      "variation": "default"
    },
    "overrides": {
      "image": {},
      "imgContainer": {},
      "aboveTitle": {},
      "editButton": {},
      "Frame": {},
      "title": {},
      "Title": {},
      "contentText": {},
      "Features": {},
      "deleteButton": {},
      "Buttons": {},
      "Card Area": {},
      "POICard": {}
    }
  }
];
  
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );

  return (
  <Flex
    gap="10px"
    direction="row"
    width="400px"
    height="170px"
    justifyContent="flex-start"
    alignItems="center"
    overflow="hidden"
    position="relative"
    boxShadow="0px 4px 12px rgba(0.05000000074505806, 0.10000000149011612, 0.15000000596046448, 0.25)"
    borderRadius="10px"
    padding="0px 10px 0px 10px"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "POICard")}
    {...rest}
  >
    <Flex
      gap="0"
      direction="row"
      width="150px"
      height="150px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      shrink="0"
      position="relative"
      borderRadius="10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "imgContainer")}
    >
      <Image
        width="195px"
        height="165px"
        display="block"
        shrink="0"
        position="relative"
        borderRadius="10px"
        objectFit="cover"
        alt=""
        {...getOverrideProps(overrides, "image")}
      />
    </Flex>
    <Flex
      gap="5px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      grow="1"
      shrink="1"
      basis="0"
      alignSelf="stretch"
      position="relative"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Card Area")}
    >
      <Flex
        gap="0"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Title")}
      >
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 5px 0px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="15px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
            {...getOverrideProps(overrides, "aboveTitle")}
          >
            Category
          </Text>
          <Button
            padding="3px 6px 3px 6px"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            {...getOverrideProps(overrides, "editButton")}
          >
            Edit
          </Button>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="800"
          color="rgba(13,26,38,1)"
          lineHeight="15px"
          textAlign="left"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "title")}
        >
          Title
        </Text>
      </Flex>
      <Flex
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Features")}
      >
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="15px"
          textAlign="left"
          display="block"
          letterSpacing="0px"
          width="210px"
          position="absolute"
          top="0px"
          left="0px"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "contentText")}
        >
          Information about this product.
        </Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 5px 5px 0px"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Button
          padding="3px 6px 3px 6px"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="link"
          {...getOverrideProps(overrides, "deleteButton")}
        >
          Delete
        </Button>
      </Flex>
    </Flex>
  </Flex>
  )
}
