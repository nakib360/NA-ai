import { Moon, PanelRight, Sun } from "lucide-react";

const Header = ({ theme, setTheme }) => {
    return (
        <header className={`flex justify-between items-center bg-background p-5 shadow-lg ${window.scrollY !== 0 ? "shadow-secondary" : ""}`}>
            <PanelRight size={20} strokeWidth={2.75} />

            <div className="flex items-center gap-3">
                {/* theme toogle */}
                <div className="cursor-pointer">
                    {theme === "dark" ? <Sun size={20} strokeWidth={2.75} onClick={() => setTheme("")} /> : <Moon size={20} strokeWidth={2.75} onClick={() => setTheme("dark")} />}

                </div>


                <div className="flex items-center gap-3">
                    <p className="text-sm cursor-pointer">Sign in</p>
                    <button className="flex justify-center items-center text-background bg-foreground text-sm px-3 py-2 rounded-sm dark:hover:bg-foreground/90 hover:bg-foreground/70 cursor-pointer">Log in</button>

                </div>
            </div>
        </header>
    );
};

export default Header;