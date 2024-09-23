import type { DataTablePageEvent } from "primevue/datatable"
import { onMounted, toRefs } from "vue"
export type ApolloFetchOptions = {
    clientId: string,
    limit?: number
}

export type ApolloFetch = {
    query: object,
    filterQuery: object | null,
    limit: number,
    options: ApolloFetchOptions
}

export default function usePagination(fetch: (query: object, filerQuery: object | null, options: object) => Promise<void>, config: ApolloFetch, refetch: (filterQuery: object | null) => Promise<void>) {
    const { query, options, filterQuery } = toRefs(config)
    const limit = options.value.limit ?? 10
    onMounted(async () => {
        await fetch(query, { limit, ...filterQuery.value }, options.value)
    })

    const getPage = async (pageEvent: DataTablePageEvent) => {
        const { page, filters } = pageEvent
        await (refetch as any).value({
            ...(filterQuery.value ?? {}),
            ...filters,
            page,
            limit,
        })
    }

    return { getPage }
}