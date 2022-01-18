import SignUpForm from "../../../components/pages/auth/signup/SignUpForm";
import LayoutAuth from "../../../layouts/LayoutAuth";
import PageTitle from "../../../widgets/PageTitle";

export default function Signup(){
    return (
        <LayoutAuth>
            <PageTitle title="Create Account" />
            <SignUpForm />
        </LayoutAuth>
    )
}