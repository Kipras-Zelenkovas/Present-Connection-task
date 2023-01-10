import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [hidden, setHidden] = useState(true);

    const links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Add Book",
            link: "/addBook",
        },
    ];
    return (
        <div className="bg-smoked shadow-md shadow-navy">
            <div
                className="md:hidden rounded-lg px-3 py-3 pl-12 shadow-md text-lg text-white font-medium hover:bg-white hover:text-smoked cursor-pointer"
                onClick={() => setHidden(!hidden)}
            >
                Navigation
            </div>
            <div
                className={`md:flex ${
                    hidden ? "hidden" : ""
                } p-4 shadow-md justify-center`}
            >
                {links.map((item, index) => {
                    return (
                        <Link
                            to={item.link}
                            key={index}
                            className="md:shadow-none shadow-sm text-center block rounded-lg px-5 py-2 text-white font-medium hover:bg-white hover:text-smoked"
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
