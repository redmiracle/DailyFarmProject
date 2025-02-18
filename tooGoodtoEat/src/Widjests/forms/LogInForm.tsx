
const LogInForm = () => {
    return (
        <div className={"inputForm"}>

            <label> Log In:
                <input className={"inputFormItem"} type={"text"} required/>
            </label >
            <label> Password:
                <input className={"inputFormItem"} type={"text"} required/>
            </label>
            <button> Log In</button>
        </div>
    );
};

export default LogInForm;