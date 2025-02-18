import {useState} from "react";
import {chevronLeftIcon, chevronRightIcon} from "../../icons/icons.tsx";

const SignInForm = () => {

    const [stage, setStage] = useState(1)

    const renderPage = (stage: number) => {
        switch (stage) {
            case 1:
                return (
                    <div className={"flex flex-col"}>
                        <label> First Name
                            <input className={"block"} type={"text"}/>
                        </label>
                        <label> last Name
                            <input className={"block"} type={"text"}/>
                        </label>
                        <label className={"inputFormItem"}> birth date
                            <input className={"block"} type={"date"}/>
                        </label>
                        <label> gender
                            <select className={"block"}>
                                <option>man</option>
                                <option>women</option>
                            </select>
                        </label>
                        <div onClick={() => setStage(prev =>prev+1 )}>
                            {chevronRightIcon()}
                        </div>

                    </div>
                )
            case 2:
                return (
                    <div className={"flex flex-col"}>
                        <label>Phone number
                            <input className={"block"} type={"phone"}/>
                        </label>
                        <label> Country
                            <select className={"block"}>
                                <option>Israel</option>
                                <option>France</option>
                            </select>
                        </label>
                        <div>
                            <div onClick={()=>setStage(prev =>prev-1 )}>{chevronLeftIcon()}</div>
                            <div onClick={()=>setStage(prev =>prev+1 )}>{chevronRightIcon()}</div>
                        </div>

                    </div>

                )
            case 3:
                return (
                    <div className={"flex flex-col"}>
                        <div onClick={() => setStage(prev => prev - 1)}>{chevronLeftIcon()}</div>
                        <label> Log In:
                            <input className={"block"}/>
                        </label>
                        <label> Password:
                            <input className={"block"} type={"text"}/>
                        </label>
                        <button> Sing In</button>
                    </div>
                )
        }


    }


    return (
        <div className="border-2 border-green-500 w-1/2 rounded-lg ">
            {renderPage(stage)}

        </div>
    );
};

export default SignInForm;