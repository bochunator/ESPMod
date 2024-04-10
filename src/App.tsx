import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import WorkingArea from "./pages/WorkingArea/WorkingArea";
import SourceCode from "./pages/SourceCode/SourceCode";
import Download from "./pages/Download/Download";
import NoPage from "./pages/NoPage/NoPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="workingarea" element={<WorkingArea />} />
                <Route path="sourcecode" element={<SourceCode />} />
                <Route path="download" element={<Download />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    )
}

export default App
