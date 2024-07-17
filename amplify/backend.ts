import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import {Policy, PolicyStatement} from "aws-cdk-lib/aws-iam";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// patch the map resource to the expected output configuration
backend.addOutput({
  geo: {
    aws_region: "us-east-2",
    maps: {
      items: {
        ["myMap"]: {
          style: "VectorEsriNavigation",
        },
      },
      default: "myMap",
    },
  },
});