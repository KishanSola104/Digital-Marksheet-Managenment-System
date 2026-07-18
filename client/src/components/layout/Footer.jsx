function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-col items-center gap-2 text-center">

                {/* Row 1 */}

                <p className="text-sm text-slate-600">
                    © {currentYear}{" "}
                    <span className="font-semibold text-slate-800">
                        Digital Marksheet Management System (DMMS)
                    </span>
                    . All Rights Reserved.
                </p>

                {/* Row 2 */}

                <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">

                    <span>Powered by</span>

                    <a
                        href="https://shreejiitsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 transition hover:text-blue-800 hover:underline"
                    >
                        Shreeji IT Solutions PVT. LTD.
                    </a>

                    <span className="text-slate-300">|</span>

                    <span>Developed by</span>

                    <a
                        href="https://linkedin.com/in/kishan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-700 transition hover:text-blue-700 hover:underline"
                    >
                        Kishan
                    </a>

                    <span className="text-slate-300">•</span>

                    <a
                        href="https://linkedin.com/in/krunal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-700 transition hover:text-blue-700 hover:underline"
                    >
                        Krunal
                    </a>

                    <span className="text-slate-300">•</span>

                    <a
                        href="https://linkedin.com/in/vansh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-700 transition hover:text-blue-700 hover:underline"
                    >
                        Vansh
                    </a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;