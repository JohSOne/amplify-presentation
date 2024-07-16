/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavigationProps } from "./Navigation";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
import { POICardProps } from "./POICard";
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
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<FlexProps>;
    Navigation?: NavigationProps;
    MainContainer?: PrimitiveOverrideProps<FlexProps>;
    LeftContainer?: PrimitiveOverrideProps<FlexProps>;
    MapsImage?: PrimitiveOverrideProps<ImageProps>;
    RightContainer?: PrimitiveOverrideProps<FlexProps>;
    POICard48461353?: POICardProps;
    POICard48461368?: POICardProps;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<FlexProps> & {
    leftContainer?: React.ReactNode;
    rightContainer?: React.ReactNode;
} & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
