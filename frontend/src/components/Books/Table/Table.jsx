import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "../../../index";
import { getBooks } from "../../API/books";
import { TableFooter } from "./TableFooter";
import { TableHead } from "./TableHead";
import { TableItem } from "./TableItem";

export const Table = () => {
    let query = useQuery();
    let page = query.get("page") !== null ? query.get("page") : 1;

    const [data, setData] = useState([]);

    useEffect(() => {
        getBooks(setData, page);
    }, []);

    return (
        <div className="relative overflow-x-auto w-full mt-8">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHead />
                <tbody>
                    {data.map((item, index) => {
                        return <TableItem item={item} key={index} />;
                    })}
                </tbody>
                <TableFooter page={page} />
            </table>
        </div>
    );
};
