import {useAppDispatch} from "../../app/hooks.ts";
import {setPage} from "../../features/render/globalRenderSlice.ts";



const LogInForm = () => {
    const dispatch = useAppDispatch();

    const handleClick=()=>{
       setTimeout(()=>dispatch(setPage("showPage")),150)
    }


    return (
        <div className={"inputForm"}>

            <label> Log In:
                <input className={"inputFormItem"} type={"text"} required/>
            </label >
            <label> Password:
                <input className={"inputFormItem"} type={"text"} required/>
            </label>
            <button className={"loginButton"} onClick={handleClick}> Log In</button>
        </div>
    );
};

export default LogInForm;