import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: '',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
