/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, HeadingProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
import { RecipeCardProps } from "./RecipeCard";
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
export declare type RecipeAppOverridesProps = {
    RecipeApp?: PrimitiveOverrideProps<ViewProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    RecipeCard38707767?: RecipeCardProps;
    RecipeCard38707753?: RecipeCardProps;
    RecipeCard38707760?: RecipeCardProps;
} & EscapeHatchProps;
export declare type RecipeAppProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RecipeAppOverridesProps | undefined | null;
}>;
export default function RecipeApp(props: RecipeAppProps): React.ReactElement;
