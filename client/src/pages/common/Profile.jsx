import PageHeader from "../../components/common/PageHeader";
import { getCurrentUser } from "../../services/authService";

function Profile() {

    const user = getCurrentUser();

    return (
        <>
            <PageHeader
                title="My Profile"
                description="View your profile information."
            />

            <div className="rounded-xl bg-white p-8 shadow-sm">

                <div className="grid grid-cols-2 gap-6">

                    <div>
                        <label className="text-sm text-slate-500">
                            Full Name
                        </label>

                        <p className="font-semibold">
                            {user?.name}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-slate-500">
                            Employee ID
                        </label>

                        <p className="font-semibold">
                            {user?.employee_id}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-slate-500">
                            Email
                        </label>

                        <p className="font-semibold">
                            {user?.email}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-slate-500">
                            Role
                        </label>

                        <p className="font-semibold">
                            {user?.designation}
                        </p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Profile;