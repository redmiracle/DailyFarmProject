import ShowPage from "./Pages/showPage/ShowPage.tsx";
import Accounting from "./Pages/accounting/Accounting.tsx";
import {useAppSelector} from "./app/hooks.ts";

function App() {

    const page = useAppSelector(state => state.render.page);
    const renderPage = (page: string) => {
        switch (page) {
            case "accounting":
                return <Accounting/>;
            case "showPage":
                return <ShowPage/>;
            case "error":
                console.error(page);
        }
    }

    return (
        <div>
            {renderPage(page)}
        </div>
    )

}

export default App
