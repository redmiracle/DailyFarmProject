import SignInForm from "../../../Widjests/forms/SignInForm.tsx";

interface Props {
    setPage: (page: string) => void;
}

const SignIn = ({setPage}:Props) => {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <div className={"m-auto w-[80%] mt-[20vh]"}>
            <SignInForm/>
            </div>
            <p className={"text-center mb-[38vh]"}>
            if you sing in, you may{'\u00A0'}
            <span className={"text-blue-400 cursor-pointer"}
            onClick={() => {setPage("logIn")}}
            >log in </span>
            </p>
        </div>
    );
};

export default SignIn;