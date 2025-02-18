import SignIn from "./sigIn/SignIn.tsx";
import LogIn from "./logIn/LogIn.tsx";
import {useState} from "react";

const Accounting = () => {
    const [page, setPage] = useState("logIn");

    const render=(page: string) => {
        switch (page) {
            case "logIn":
                return <LogIn setPage={setPage} />;
            case "signIn":
                return <SignIn setPage={setPage} />;

        }
    }


    return (
        <div>
            {render(page)}
        </div>
    );
};

export default Accounting;