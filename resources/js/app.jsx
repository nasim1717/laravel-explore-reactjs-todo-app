import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routers />
    </BrowserRouter>
);
