function PageHeader({
    title,
    description,
    action = null,
}) {
    return (
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center">

            <div>

                <h1 className="text-3xl font-bold text-slate-900">
                    {title}
                </h1>

                {description && (
                    <p className="mt-2 text-slate-500">
                        {description}
                    </p>
                )}

            </div>

            {action && (
                <div className="flex items-center">
                    {action}
                </div>
            )}

        </div>
    );
}

export default PageHeader;