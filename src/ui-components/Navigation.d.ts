/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationOverridesProps = {
    Navigation?: PrimitiveOverrideProps<FlexProps>;
    navContainer?: PrimitiveOverrideProps<FlexProps>;
    "Amplify Mark"?: PrimitiveOverrideProps<ViewProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    newButton?: PrimitiveOverrideProps<ButtonProps>;
    titleContainer?: PrimitiveOverrideProps<FlexProps>;
    siteTitle?: PrimitiveOverrideProps<TextProps>;
    logOutButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    variation?: "default" | "mobile";
} & {
    overrides?: NavigationOverridesProps | undefined | null;
}>;
export default function Navigation(props: NavigationProps): React.ReactElement;
