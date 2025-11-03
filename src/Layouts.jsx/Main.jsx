import { useState } from "react";
import { Outlet } from "react-router";
import Header from "@/Components/Header";

const Main = () => {
    const [theme, setTheme] = useState("dark");

    return (
        <div className={`relative p-5 min-h-screen text-foreground text-xl ${theme} bg-background transition-all `}>
            <div className="fixed w-full top-0 left-0"> 
                <Header theme={theme} setTheme={setTheme} />
            </div>
            <Outlet />
        </div>
    );
};

export default Main;