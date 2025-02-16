import Search from "./search/Search.tsx";

interface Props {
    page: string;
}

const ShowPage = ({page}:Props) => {

    return (
        <div className="grow">
            <h1 className={"text-blue-400 text-3xl"}>Hello</h1>
        </div>
    );
};

export default ShowPage;