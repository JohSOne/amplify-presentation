/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBarMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="223px"
      height="unset"
      justifyContent="flex-end"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0.26)"
      {...getOverrideProps(overrides, "NavBarMobile")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="40px"
        height="33px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="12:00"
        {...getOverrideProps(overrides, "12:00")}
      ></Text>
      <Button
        width="unset"
        height="33px"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="Button"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
