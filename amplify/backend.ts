import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import {CfnMap} from "aws-cdk-lib/aws-location";
import {Policy, PolicyStatement} from "aws-cdk-lib/aws-iam";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});
// Geo Resource
const geoStack = backend.createStack("geo-stack");
/*
// create a location services map
const map = new CfnMap(geoStack, "Map", {
  mapName: "PoiMap",
  description: "Map",
  configuration: {
    style: "VectorEsriLightGrayCanvas",
  },
  pricingPlan: "RequestBasedUsage",
  tags: [
    {
      key: "name",
      value: "PoiMap",
    },
  ],
});
*/
// create an IAM policy to allow interacting with geo resource
const myGeoPolicy = new Policy(geoStack, "GeoPolicy", {
  policyName: "JMGeoPolicy",
  statements: [
    new PolicyStatement({
      actions: [
        "geo:GetMapTile",
        "geo:GetMapSprites",
        "geo:GetMapGlyphs",
        "geo:GetMapStyleDescriptor",
      ],
      resources: ["arn:aws:geo:us-east-2:631103944286:map/PoiMap"],
    }),
  ],
});

// apply the policy to the authenticated and unauthenticated roles
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(myGeoPolicy);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(myGeoPolicy);

// patch the map resource to the expected output configuration
backend.addOutput({
  geo: {
    aws_region: "us-east-2",
    maps: {
      items: {
        ["PoiMap"]: {
          style: "VectorEsriLightGrayCanvas",
        },
      },
      default: "PoiMap",
    },
  },
});