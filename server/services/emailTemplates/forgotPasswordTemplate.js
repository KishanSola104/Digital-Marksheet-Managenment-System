const forgotPasswordTemplate = ({
    employeeName,
    password,
}) => {

    return `
        <h2>Password Reset</h2>

        <p>Hello ${employeeName},</p>

        <p>
            Your password has been reset successfully.
        </p>

        <p>
            New Password :
            <strong>${password}</strong>
        </p>

        <p>
            Please keep it secure.
        </p>
    `;
};

module.exports = forgotPasswordTemplate;

