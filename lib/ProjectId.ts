// export const CurrentProjectId = "cmlm4uflq0000asu5p4a84d3c";
// export const APP_URL = "http://localhost:5000";

export const CurrentProjectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";
export const APP_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

export const currentURL = process.env.NEXT_PUBLIC_CURRENT_URL ?? "";
