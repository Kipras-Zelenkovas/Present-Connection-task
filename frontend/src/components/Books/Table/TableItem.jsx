import { useNavigate } from "react-router-dom";

export const TableItem = ({ item }) => {
    const navigation = useNavigate();

    return (
        <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer"
            onClick={() => navigation("/Book?id=" + item.id)}
        >
            <td className="px-6 py-4">{item.author}</td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4 truncate max-w-xxs">{item.overview}</td>
        </tr>
    );
};
