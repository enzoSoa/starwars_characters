import { useMemo, useState } from "react"
import { useGetCharactersQuery } from "../../api"
import { CharactersList } from "./CharactersList.list"
import { CharactersListPagination } from "./CharactersList.pagination"

type Props = {
    peoplesUrls?: string[]; 
}

export const CharactersListComponent = ({peoplesUrls}: Props) => {
    const [page,setPage] = useState(1)
    const {data, isFetching, isError} = useGetCharactersQuery(page)

    const {peoplesCount, peoplesData} = useMemo(() => peoplesUrls ? 
        {peoplesCount: peoplesUrls.length, peoplesData: peoplesUrls.slice((page-1)*10, page*10)} :
        {peoplesCount: data?.count, peoplesData: data?.results.map(({url}) => url)},
    [data, peoplesUrls, page])
    
    return <>
        {!isError ? <CharactersList charactersUrls={peoplesData ?? []} isFetching={isFetching}/> : <p>uh oh there's a problem...</p>}
        <CharactersListPagination numberOfPages={peoplesCount ? Math.round(peoplesCount/10) : 1} currentPage={page} onNumberClick={setPage}/>
    </>
}