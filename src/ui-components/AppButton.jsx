/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, View } from "@aws-amplify/ui-react";
export default function AppButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="96px"
      height="96px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(242,205,205,0.76)"
      {...getOverrideProps(overrides, "AppButton")}
      {...rest}
    >
      <Image
        width="96px"
        height="96px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "todo")}
      ></Image>
    </View>
  );
}
