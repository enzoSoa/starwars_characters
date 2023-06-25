import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Character, CharactersDTO } from "../types";

const baseUrl = 'https://swapi.dev/api/';

export const swapiApi = createApi({
    reducerPath: "swapiApi",
    baseQuery: fetchBaseQuery({}),
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersDTO, number>({
            query: page => `${baseUrl}people/?page=${page}`
        }),
        getCharactersByUrl: builder.query<Character, string>({
            query: url => url
        }),
    }),
})

export const { useGetCharactersQuery, useGetCharactersByUrlQuery } = swapiApi;