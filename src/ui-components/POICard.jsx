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
import { Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function POICard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        image: {},
        aboveTitle: {},
        editButton: {},
        Frame: {},
        title: {},
        Title: {},
        Divider: {},
        contentText: {},
        Features: {},
        deleteButton: {},
        Buttons: {},
        "Card Area": {},
        POICard: {},
      },
      variantValues: { variation: "default" },
    },
    {
      overrides: {
        image: { width: "133px", height: "113.5px" },
        aboveTitle: {
          lineHeight: "17px",
          width: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
          children: "Mountain",
        },
        editButton: {},
        Frame: { width: "123px", shrink: "0" },
        title: { children: "Title" },
        Title: { height: "unset" },
        Divider: {},
        contentText: { height: "48px" },
        Features: { height: "50px" },
        deleteButton: {},
        Buttons: {},
        "Card Area": { width: "133px", height: "unset" },
        POICard: {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
      },
      variantValues: { variation: "mobile" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "POICard")}
      {...rest}
    >
      <Image
        width="200px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="4px"
        direction="column"
        width="200px"
        height="150px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 5px 0px 5px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
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
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
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
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="159px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Information about this product"
              {...getOverrideProps(overrides, "aboveTitle")}
            ></Text>
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="edit"
              {...getOverrideProps(overrides, "editButton")}
            ></MyIcon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
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
            children="Classic Long Sleeve T-Shirt"
            {...getOverrideProps(overrides, "title")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="60px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Features")}
        >
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(overrides, "contentText")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Buttons")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="delete"
            {...getOverrideProps(overrides, "deleteButton")}
          ></MyIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
