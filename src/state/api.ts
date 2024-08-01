import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { red } from "tailwindcss/colors";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    reducerPath: "api",
    tagTypes: [],
    endpoints: () => ({}),
});

export const { } = api;