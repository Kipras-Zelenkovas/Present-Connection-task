import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "../..";
import { getBook } from "../API/books";

export const Book = () => {
    const query = useQuery();

    const [data, setData] = useState([]);

    useEffect(() => {
        getBook(query.get("id"), setData);
    }, []);

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-2xl mb-2">{data.author}</div>
                <div class="font-bold text-l mb-2">{data.name}</div>
                <div class="text-m mb-2">{data.overview}</div>
            </div>
        </div>
    );
};
