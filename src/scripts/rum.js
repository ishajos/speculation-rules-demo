import { AwsRum, TTIPlugin } from "aws-rum-web";

// Replace these constants
const ENDPOINT_URL = "";
const APPLICATION_ID = "";
const APPLICATION_REGION = "";
const IDENTITY_POOL_ID = "";

try {
  const config = {
    sessionSampleRate: 1,
    sessionEventLimit: 0,
    identityPoolId: IDENTITY_POOL_ID,
    endpoint: ENDPOINT_URL,
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: true,
    eventPluginsToLoad: [new TTIPlugin()],
    signing: true, // If you have a public resource policy and wish to send unsigned requests please set this to false
  };

  const APPLICATION_VERSION = "1.0.0";

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

