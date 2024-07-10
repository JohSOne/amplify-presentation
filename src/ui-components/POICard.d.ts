/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product.38821931"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product.38821932"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    Rating38821935?: PrimitiveOverrideProps<FlexProps>;
    Rating38821936?: PrimitiveOverrideProps<RatingProps>;
    Reviews?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type POICardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: POICardOverridesProps | undefined | null;
}>;
export default function POICard(props: POICardProps): React.ReactElement;
