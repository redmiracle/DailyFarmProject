import ShowPage from "./Componets/showPage/ShowPage.tsx";
import Footer from "./Componets/Footer.tsx";
import {useState} from "react";

function App() {
    const [page, setPage] = useState("");

  return (
      <div className="flex min-h-screen flex-col">
      <ShowPage page={page}/>
      <Footer setPage={setPage}/>
      </div>
  )
}

export default App
