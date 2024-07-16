import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PoiCreateFormInputValues = {
    aboveTitle?: string;
    title?: string;
    contentText?: string;
    coordinates?: string;
    image?: string;
};
export declare type PoiCreateFormValidationValues = {
    aboveTitle?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    contentText?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PoiCreateFormOverridesProps = {
    PoiCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    aboveTitle?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    contentText?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PoiCreateFormProps = React.PropsWithChildren<{
    overrides?: PoiCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PoiCreateFormInputValues) => PoiCreateFormInputValues;
    onSuccess?: (fields: PoiCreateFormInputValues) => void;
    onError?: (fields: PoiCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PoiCreateFormInputValues) => PoiCreateFormInputValues;
    onValidate?: PoiCreateFormValidationValues;
} & React.CSSProperties>;
export default function PoiCreateForm(props: PoiCreateFormProps): React.ReactElement;
