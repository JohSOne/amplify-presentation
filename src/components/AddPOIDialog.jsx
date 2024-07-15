import {PoiCreateForm} from "../../ui-components";
import {Button, Card, Flex, Heading} from "@aws-amplify/ui-react";
import {IconClose} from "@aws-amplify/ui-react/internal";
import { getOverrideProps } from "../ui-components/utils.js";

export default function AddPOIDialog(props) {
    const { overrides, ...rest } = props;
    return (
        <Card variation={"elevated"}
              direction={"column"}
              width={500}
              gap={"unset"}
              position={"fixed"}
              style={{zIndex: "1", transform: "translate(-50%, -50%)"}}
              top={"50%"}
              left={"50%"}>
            <Flex padding={"0 20px"}
                  alignItems={"center"}>
                <Heading level={4}
                         width={"100%"}>
                    Add New Poi
                </Heading>
                <Button variation={"warning"}
                        {...getOverrideProps(overrides, "CloseButton")}>
                    <IconClose/>
                </Button>
            </Flex>
            <PoiCreateForm />
        </Card>
    );
}