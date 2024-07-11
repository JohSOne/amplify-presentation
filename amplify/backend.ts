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

/* If the resource is already created, just add the output file information*/
/*

const geoStack = backend.createStack("geo-stack");

// create a location services map
const map = new CfnMap(geoStack, "Map", {
  mapName: "myMap",
  description: "Map",
  configuration: {
    style: "VectorEsriNavigation",
  },
  pricingPlan: "RequestBasedUsage",
  tags: [
    {
      key: "name",
      value: "myMap",
    },
  ],
});
*/
/*// create an IAM policy to allow interacting with geo resource
const jmGeoPolicy = new Policy(geoStack, "GeoPolicy", {
  policyName: "JMGeoPolicy",
  statements: [
    new PolicyStatement({
      actions: [
        "geo:GetMapTile",
        "geo:GetMapSprites",
        "geo:GetMapGlyphs",
        "geo:GetMapStyleDescriptor",
      ],
      resources: [map.attrArn],
    }),
  ],
});*/

// apply the policy to the authenticated and unauthenticated roles
/*backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(jmGeoPolicy);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(jmGeoPolicy);*/


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