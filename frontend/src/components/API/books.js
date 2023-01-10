import axios from "axios";

const BACKEND_URL = "https://localhost:7253/api/";

export const getBooks = (setData, page) => {
    axios
        .get(BACKEND_URL + "Book?Page=" + page)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getBook = (id, setData) => {
    axios
        .get(BACKEND_URL + "Book/" + id)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const addBook = (values) => {
    axios
        .post(BACKEND_URL + "Book", {
            author: values.author,
            name: values.name,
            overview: values.overview,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
