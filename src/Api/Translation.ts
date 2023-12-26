import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  TranslationRequestParams,
  TranslationResponse,
} from 'Types/Translation'

export const translationApi = createApi({
  reducerPath: 'translationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mymemory.translated.net/',
  }),
  endpoints: (builder) => ({
    getTranslation: builder.query<
      TranslationResponse,
      TranslationRequestParams
    >({
      query: ({ langfrom, langto, q }) =>
        `get?langpair=${langfrom}|${langto}&q=${q}`,
    }),
  }),
})

export const { useGetTranslationQuery } = translationApi
