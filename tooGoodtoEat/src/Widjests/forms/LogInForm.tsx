
const LogInForm = () => {
    return (
        <div className="flex flex-col border-2 border-green-500 w-1/2 rounded-lg ">

            <label className={"inputFormItem"}> Log In:
                <input type={"text"}/>
            </label >
            <label className={"inputFormItem"}> Password:
                <input type={"text"}/>
            </label>
            <button> Log In</button>
        </div>
    );
};

export default LogInForm;