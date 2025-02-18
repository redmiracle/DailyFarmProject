import ShowPage from "./Pages/showPage/ShowPage.tsx";
import Accounting from "./Pages/accounting/Accounting.tsx";

function App() {

    const page = "accounting"
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
