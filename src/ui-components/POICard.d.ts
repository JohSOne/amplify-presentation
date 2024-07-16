/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type POICardOverridesProps = {
    POICard?: PrimitiveOverrideProps<FlexProps>;
    imgContainer?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    aboveTitle?: PrimitiveOverrideProps<TextProps>;
    editButton?: PrimitiveOverrideProps<ButtonProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    Features?: PrimitiveOverrideProps<ViewProps>;
    contentText?: PrimitiveOverrideProps<TextProps>;
    Buttons?: PrimitiveOverrideProps<FlexProps>;
    deleteButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type POICardProps = React.PropsWithChildren<Partial<FlexProps> & {
    variation?: "default";
} & {
    overrides?: POICardOverridesProps | undefined | null;
}>;
export default function POICard(props: POICardProps): React.ReactElement;
