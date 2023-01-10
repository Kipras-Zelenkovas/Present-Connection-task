import logo from "./logo.svg";
import "./App.css";
import { Table } from "./components/Books/Table/Table";
import { Routes, Route } from "react-router-dom";
import { Book } from "./components/Books/Book";
import { AddBook } from "./components/Books/AddBook";
import { NavBar } from "./components/NavBar";

function App() {
    return (
        <div className="w-screen h-screen">
            <NavBar />
            <Routes>
                <Route path="/" element={<Table />} />
                <Route path="/book" element={<Book />} />
                <Route path="/addBook" element={<AddBook />} />
            </Routes>
        </div>
    );
}

export default App;
