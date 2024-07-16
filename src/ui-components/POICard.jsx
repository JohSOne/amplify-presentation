/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function POICard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        image: {},
        imgContainer: {},
        aboveTitle: {},
        editButton: {},
        Frame: {},
        title: {},
        Title: {},
        contentText: {},
        Features: {},
        deleteButton: {},
        Buttons: {},
        "Card Area": {},
        POICard: {},
      },
      variantValues: { variation: "default" },
    },
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
      display="flex"
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "imgContainer")}
      >
        <Image
          width="195px"
          height="165px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="5px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 5px 5px 5px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Title")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-end"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame")}
          >
            <Text
              fontFamily="Inter"
              fontSize="10px"
              fontWeight="400"
              color="rgba(38,119,200,1)"
              lineHeight="15px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Category"
              {...getOverrideProps(overrides, "aboveTitle")}
            ></Text>
            <Button
              width="unset"
              height="unset"
              padding="3px 6px 3px 6px"
              shrink="0"
              size="small"
              isDisabled={false}
              variation="link"
              children="Edit"
              {...getOverrideProps(overrides, "editButton")}
            ></Button>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="800"
            color="rgba(13,26,38,1)"
            lineHeight="15px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Title"
            {...getOverrideProps(overrides, "title")}
          ></Text>
        </Flex>
        <View
          width="unset"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
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
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="210px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(overrides, "contentText")}
          ></Text>
        </View>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Buttons")}
        >
          <Button
            width="unset"
            height="unset"
            padding="3px 6px 3px 6px"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="warning"
            children="Delete"
            {...getOverrideProps(overrides, "deleteButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
