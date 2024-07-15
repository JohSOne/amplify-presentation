import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Poi } from "./graphql/types";
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
export declare type PoiUpdateFormInputValues = {
    aboveTitle?: string;
    title?: string;
    contentText?: string;
    coordinates?: string;
    image?: string;
};
export declare type PoiUpdateFormValidationValues = {
    aboveTitle?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    contentText?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PoiUpdateFormOverridesProps = {
    PoiUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    aboveTitle?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    contentText?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PoiUpdateFormProps = React.PropsWithChildren<{
    overrides?: PoiUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    poi?: Poi;
    onSubmit?: (fields: PoiUpdateFormInputValues) => PoiUpdateFormInputValues;
    onSuccess?: (fields: PoiUpdateFormInputValues) => void;
    onError?: (fields: PoiUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PoiUpdateFormInputValues) => PoiUpdateFormInputValues;
    onValidate?: PoiUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PoiUpdateForm(props: PoiUpdateFormProps): React.ReactElement;
