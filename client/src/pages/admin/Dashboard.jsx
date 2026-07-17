import PageHeader from "../../components/common/PageHeader";

function Dashboard() {
    return (
        <>
            <PageHeader
                title="Administrator Dashboard"
                description="Welcome to the Administrator Dashboard."
            />

            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800">
                    Welcome Administrator 👋
                </h2>

                <p className="mt-2 text-slate-500">
                    You have successfully logged in as an <strong>Administrator</strong>.
                </p>

                <p className="mt-4 text-slate-600">
                    If you can see this page with the Administrator sidebar,
                    role-based authentication and routing are working correctly.
                </p>
            </div>
        </>
    );
}

export default Dashboard;