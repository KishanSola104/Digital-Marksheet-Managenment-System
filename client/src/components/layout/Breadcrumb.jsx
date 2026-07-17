import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();

    const pathnames = location.pathname
        .split("/")
        .filter(Boolean);

    return (
        <nav className="flex items-center text-sm">

            <Link
                to="/"
                className="flex items-center gap-2 text-slate-500 transition-colors hover:text-blue-600"
            >
                <Home size={16} />
            </Link>

            {pathnames.map((value, index) => {

                const to = "/" + pathnames.slice(0, index + 1).join("/");

                const isLast = index === pathnames.length - 1;

                const label = value
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

                return (
                    <div
                        key={to}
                        className="flex items-center"
                    >
                        <ChevronRight
                            size={16}
                            className="mx-2 text-slate-400"
                        />

                        {
                            isLast ? (
                                <span className="font-medium text-slate-800">
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    to={to}
                                    className="text-slate-500 transition-colors hover:text-blue-600"
                                >
                                    {label}
                                </Link>
                            )
                        }
                    </div>
                );
            })}
        </nav>
    );
}

export default Breadcrumb;