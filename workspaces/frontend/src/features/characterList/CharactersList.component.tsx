import { useMemo, useState } from "react"
import { useGetCharactersQuery } from "../../api"
import { Stack } from "react-bootstrap"
import { CharactersList } from "./CharactersList.list"
import { CharactersListPagination } from "./CharactersList.pagination"

export const CharactersListComponent = () => {
    const [page,setPage] = useState(1)
    const {data, isFetching, isError} = useGetCharactersQuery(page)

    const {peoplesCount, peoplesData} = useMemo(() => 
        ({peoplesCount: data?.count, peoplesData: data?.results.map(({url}) => url)}),
    [data])
    
    return <Stack gap={1} style={{alignItems: "center"}}>
        {!isError ? <CharactersList charactersUrls={peoplesData ?? []} isFetching={isFetching}/> : <p>uh oh there's a problem...</p>}
        <CharactersListPagination numberOfPages={peoplesCount ? Math.round(peoplesCount/10) : 1} currentPage={page} onNumberClick={setPage}/>
    </Stack>
}