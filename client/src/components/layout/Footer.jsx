function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-white px-6 py-4">

            <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-slate-500 md:flex-row">

                <p>
                    © {currentYear} Digital Marksheet Management System.
                    All Rights Reserved.
                </p>

                <p>
                    Designed & Developed by{" "}
                    <span className="font-medium text-slate-700">
                        Kishan
                    </span>
                    {" | "}
                    <span className="font-medium text-slate-700">
                        Krunal
                    </span>
                    {" | "}
                    <span className="font-medium text-slate-700">
                        Vansh
                    </span>
                </p>

            </div>

        </footer>
    );
}

export default Footer;