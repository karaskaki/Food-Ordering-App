import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIANCE,
  issuerBaseURL: process.env.AUTH0_ISUSER_BASE_URL,
  tokenSigningAlg: "RS256",
});
