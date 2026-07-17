import PageHeader from "../../components/common/PageHeader";

function Dashboard() {
    return (
        <>
            <PageHeader
                title="Subject Teacher Dashboard"
                description="Welcome to the Subject Teacher Dashboard."
            />

            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800">
                    Welcome Subject Teacher 👋
                </h2>

                <p className="mt-2 text-slate-500">
                    You have successfully logged in as a <strong>Subject Teacher</strong>.
                </p>

                <p className="mt-4 text-slate-600">
                    If you can see this page with the Subject Teacher sidebar,
                    role-based authentication and routing are working correctly.
                </p>
            </div>
        </>
    );
}

export default Dashboard;