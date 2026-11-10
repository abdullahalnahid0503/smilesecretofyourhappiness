/// <reference types="vite/client" />

const isNode = typeof window === "undefined";

const isClearAccessTokenRequested = () =>
  !isNode &&
  new URLSearchParams(window.location.search).get("clear_access_token") ===
    "true";

const clearStoredAccessToken = () => {
  if (isNode) return;

  window.localStorage.removeItem("base44_access_token");
  window.localStorage.removeItem("token");
};

// Base44's exported app-params.js references getAccessToken(),
// but the function is not included in this export.
// For local development, safely retrieve the token from localStorage.
const getAccessToken = () => {
  if (isNode) return null;

  return (
    window.localStorage.getItem("base44_access_token") ||
    window.localStorage.getItem("token") ||
    null
  );
};

const getAppParams = () => {
  if (isClearAccessTokenRequested()) {
    clearStoredAccessToken();
  }

  return {
    appId: import.meta.env.VITE_BASE44_APP_ID,
    token: getAccessToken(),
    functionsVersion: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
    appBaseUrl: import.meta.env.VITE_BASE44_APP_BASE_URL,
  };
};

export const appParams = {
  ...getAppParams(),
};
