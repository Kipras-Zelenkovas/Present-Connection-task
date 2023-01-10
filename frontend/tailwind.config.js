/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/Books/Table/Table.jsx",
        "./src/components/Books/Table/TableFooter.jsx",
        "./src/components/Books/Table/TableHead.jsx",
        "./src/components/Books/Table/TableItem.jsx",
        "./src/components/Books/Book.jsx",
        "./src/components/Books/AddBook.jsx",
        "./src/components/NavBar.jsx",
    ],
    theme: {
        maxWidth: {
            xxs: "4rem",
        },
        extend: {
            colors: {
                white: "#FAF8FF",
                smoked: "#494554",
                navy: "#298895",
            },
        },
    },
    plugins: [],
};
