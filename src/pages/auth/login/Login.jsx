import LoginForm from "../../../components/auth/login/LoginForm";
import LayoutAuth from "../../../layouts/LayoutAuth";
import PageTitle from "../../../widgets/PageTitle";

export default function Login(){
    return (
        <LayoutAuth>
            <PageTitle title="Sign In" />
            <LoginForm />
        </LayoutAuth>
    )
}