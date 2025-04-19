// Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar"; // or however your path is

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="mt-4">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
