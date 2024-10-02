import type { DataTablePageEvent } from "primevue/datatable"
import { onMounted, toRefs } from "vue"
import type { Fetch } from "../types"

export default function usePagination(fetch: (query: object, filerQuery: object | null, options: object) => Promise<void>, config: Fetch, refetch: (filterQuery: object | null) => Promise<void>) {
    const { query, options, filterQuery } = toRefs(config)
    const limit = options.value.limit ?? 10
    const page = options.value.page ?? 1
    const filter = filterQuery?.value ?? {}

    onMounted(async () => {
        await fetch(query, { limit, page, ...filter }, options.value)
    })

    const getPage = async (pageEvent: DataTablePageEvent) => {
        const { page, filters } = pageEvent
        await (refetch as any).value({
            ...filter,
            ...filters,
            page,
            limit,
        })
    }

    return { getPage }
}