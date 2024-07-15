import * as React from "react";
import {BadgeProps, ButtonProps, FlexProps, TextProps} from "@aws-amplify/ui-react";
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
export declare type AddPOIDialogOverridesProps = {
    CloseButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPOIDialogProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddPOIDialogOverridesProps | undefined | null;
}>;
export default function AddPOIDialog(props: AddPOIDialogProps): React.ReactElement;