import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const dataSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDatas: builder.query({
      query: (page) => `/data?page=${page}`,
      providesTags: (result = [], error, arg) => [
        ...result.map(({ id }) => ({ type: "Data", id })),
        { type: "Data", id: "LIST" },
      ],
    }),
    getData: builder.query({
      query: (id) => `/data/${id}`,
      providesTags: (result = [], error, arg) => [{ type: "Data", id: arg.id }],
    }),
    addNewData: builder.mutation({
      query: (initialData) => ({
        url: "/data",
        method: "POST",
        body: initialData,
      }),
      invalidatesTags: ["Data"],
    }),
    updateData: builder.mutation({
      query: (post) => ({
        url: `/data/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Data"],
    }),
    deleteData: builder.mutation({
      query: (id) => ({
        url: `/data/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Data"],
    }),
  }),
});

export const {
  useGetDatasQuery,
  useGetDataQuery,
  useAddNewDataMutation,
  useUpdateDataMutation,
} = dataSlice;
