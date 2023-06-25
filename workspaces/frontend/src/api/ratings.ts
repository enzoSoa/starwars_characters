import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PostRatingDTO, Rating, RatingDTO } from "../types";

const baseUrl = 'http://localhost:3000';

export const ratingApi = createApi({
    reducerPath: "ratingApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Rating'],
    endpoints: (builder) => ({
        getRatings: builder.query<RatingDTO, void>({
            query: () => ``,
            providesTags: ['Rating'],
        }),
        postRating: builder.mutation<Rating, PostRatingDTO>({
            query: body => ({url: ``, method: 'POST', body}),
            invalidatesTags: ['Rating'],
        }),
    }),
});

export const { useGetRatingsQuery, usePostRatingMutation } = ratingApi;