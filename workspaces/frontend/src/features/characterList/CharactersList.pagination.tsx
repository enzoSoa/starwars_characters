import { useMemo } from "react";
import { Pagination } from "react-bootstrap";

type Props = {
    numberOfPages: number;
    currentPage: number;
    onNumberClick: (numberClicked: number) => void;
}

export const CharactersListPagination = ({numberOfPages, currentPage, onNumberClick}: Props) => {
    const numbers = useMemo(() => Array.from({length:numberOfPages}, (_, i) => i+1), [numberOfPages]);

    return <Pagination>
        {numbers.map(number => 
            <Pagination.Item key={number} active={number === currentPage} onClick={() => onNumberClick(number)}>
                {number}
            </Pagination.Item>
        )}
    </Pagination>;
};