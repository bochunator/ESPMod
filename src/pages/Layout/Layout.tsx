import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <h1>Engineering Thesis</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/workingarea">Working Area</Link>
                    </li>
                    <li>
                        <Link to="/sourcecode">Source Code</Link>
                    </li>
                    <li>
                        <Link to="/download">Download</Link>
                    </li>
                </ul>
            </nav >

            <Outlet />
        </>
    )
};

export default Layout;
