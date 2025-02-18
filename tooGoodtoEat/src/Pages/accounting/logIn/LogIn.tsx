import LogInForm from "../../../Widjests/forms/LogInForm.tsx";

interface Props {
    setPage: (page: string) => void;
}

const LogIn = ({setPage}:Props) => {
    return (
        <div>
            <LogInForm/>
            <p>
            Log In
            if you don't sing in,you may{'\u00A0'}
            <span className={"text-blue-400 cursor-pointer"}
                  onClick={() => {
                      setPage("signIn")
                  }}
            >Sign in </span>
            </p>
        </div>
    );
};

export default LogIn;