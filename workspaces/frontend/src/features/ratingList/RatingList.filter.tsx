import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

type Props = {
    value: string;
    onFilterChange: (value: string) => void;
}

export const RatingListFilter = ({value, onFilterChange}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onFilterChange(e.target.value);
    return <div>
        <Form.Control placeholder="Filter by username" onChange={handleChange} value={value}/>
    </div>;
}