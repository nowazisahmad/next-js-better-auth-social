import { Suspense } from 'react';
import ResetPasswordForm from './resset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h2>Reset Password</h2>
            <Suspense fallback="loading">
                <ResetPasswordForm/>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;