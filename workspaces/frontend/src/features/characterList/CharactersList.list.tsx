import { useMemo } from "react";
import style from "./CharactersList.module.css";
import { CharacterCard, PlaceholderCard } from "./CharactersList.card";

type Props = {
    charactersUrls: string[];
    isFetching: boolean;
}

export const CharactersList = ({charactersUrls, isFetching}: Props) => {
    const placeholdersCards = useMemo(() => Array.from({length: 10}, (_, index) => <PlaceholderCard key={index}/>), [])
    return <section className={style.grid}>
        {isFetching ? 
            placeholdersCards : 
            charactersUrls.map((characterUrl, index) => <CharacterCard key={index} characterUrl={characterUrl}/>)
        }
    </section>;
};