import Cards from "../../../Widjests/cards/Cards.tsx";

const Search = () => {
    return (
        <div className="p-2">
            <h3 className={"text-2xl text-gray-500 border-b pb-1 mt-2"}>For you</h3>
            <div className="mt-5">
                <Cards type={"recCards"}/>
            </div>

            <h3 className={"text-2xl text-gray-500 border-b pb-1 mt-2"}>Best praise</h3>
            <div className="mt-5">
                <Cards type={"saleCards"}/>
            </div>


        </div>


    );
};

export default Search;