/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPoi } from "./graphql/queries";
import { updatePoi } from "./graphql/mutations";
const client = generateClient();
export default function PoiUpdateForm(props) {
  const {
    id: idProp,
    poi: poiModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    aboveTitle: "",
    title: "",
    contentText: "",
    coordinates: "",
    image: "",
  };
  const [aboveTitle, setAboveTitle] = React.useState(initialValues.aboveTitle);
  const [title, setTitle] = React.useState(initialValues.title);
  const [contentText, setContentText] = React.useState(
    initialValues.contentText
  );
  const [coordinates, setCoordinates] = React.useState(
    initialValues.coordinates
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = poiRecord
      ? { ...initialValues, ...poiRecord }
      : initialValues;
    setAboveTitle(cleanValues.aboveTitle);
    setTitle(cleanValues.title);
    setContentText(cleanValues.contentText);
    setCoordinates(cleanValues.coordinates);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [poiRecord, setPoiRecord] = React.useState(poiModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPoi.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPoi
        : poiModelProp;
      setPoiRecord(record);
    };
    queryData();
  }, [idProp, poiModelProp]);
  React.useEffect(resetStateValues, [poiRecord]);
  const validations = {
    aboveTitle: [],
    title: [],
    contentText: [],
    coordinates: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          aboveTitle: aboveTitle ?? null,
          title: title ?? null,
          contentText: contentText ?? null,
          coordinates: coordinates ?? null,
          image: image ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePoi.replaceAll("__typename", ""),
            variables: {
              input: {
                id: poiRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PoiUpdateForm")}
      {...rest}
    >
      <TextField
        label="Above title"
        isRequired={false}
        isReadOnly={false}
        value={aboveTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              aboveTitle: value,
              title,
              contentText,
              coordinates,
              image,
            };
            const result = onChange(modelFields);
            value = result?.aboveTitle ?? value;
          }
          if (errors.aboveTitle?.hasError) {
            runValidationTasks("aboveTitle", value);
          }
          setAboveTitle(value);
        }}
        onBlur={() => runValidationTasks("aboveTitle", aboveTitle)}
        errorMessage={errors.aboveTitle?.errorMessage}
        hasError={errors.aboveTitle?.hasError}
        {...getOverrideProps(overrides, "aboveTitle")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              aboveTitle,
              title: value,
              contentText,
              coordinates,
              image,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content text"
        isRequired={false}
        isReadOnly={false}
        value={contentText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              aboveTitle,
              title,
              contentText: value,
              coordinates,
              image,
            };
            const result = onChange(modelFields);
            value = result?.contentText ?? value;
          }
          if (errors.contentText?.hasError) {
            runValidationTasks("contentText", value);
          }
          setContentText(value);
        }}
        onBlur={() => runValidationTasks("contentText", contentText)}
        errorMessage={errors.contentText?.errorMessage}
        hasError={errors.contentText?.hasError}
        {...getOverrideProps(overrides, "contentText")}
      ></TextField>
      <TextField
        label="Coordinates"
        isRequired={false}
        isReadOnly={false}
        value={coordinates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              aboveTitle,
              title,
              contentText,
              coordinates: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.coordinates ?? value;
          }
          if (errors.coordinates?.hasError) {
            runValidationTasks("coordinates", value);
          }
          setCoordinates(value);
        }}
        onBlur={() => runValidationTasks("coordinates", coordinates)}
        errorMessage={errors.coordinates?.errorMessage}
        hasError={errors.coordinates?.hasError}
        {...getOverrideProps(overrides, "coordinates")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              aboveTitle,
              title,
              contentText,
              coordinates,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || poiModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || poiModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
