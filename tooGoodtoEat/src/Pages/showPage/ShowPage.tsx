import Search from "./search/Search.tsx";
import Orders from "./orders/Orders.tsx";
import Favorite from "./favorite/Favorite.tsx";
import Account from "./account/Account.tsx";
import {useState} from "react";
import Footer from "./Footer.tsx";

const ShowPage = () => {
    const [page, setPage] = useState("");
    const renderPage = (page: string) => {
        switch (page) {
            case "search":
                return <Search/>
            case "orders":
                return <Orders/>
            case "favorite":
                return <Favorite/>
            case "account":
                return <Account/>
            default:
                return <Search/>
        }
    }
    return (
        <div className="flex min-h-screen flex-col">
            <h1 className={"text-purple-400 text-3xl text-center"}>To Go To Eat</h1>
            <div className="grow">
                {renderPage(page)}
            </div>
            <Footer setPage={setPage}/>

        </div>
    );
};

export default ShowPage;