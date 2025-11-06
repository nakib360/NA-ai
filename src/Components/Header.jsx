import { Moon, PanelRight, Sun } from "lucide-react";
import whiteNA from "../assets/na-ai-logo white.svg"
import NA from "../assets/na-ai-logo.svg"
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Header = ({ theme, setTheme }) => {
    const [isShadow, setIsShadow] = useState(false);
    const [scrollValue, setScrollValue] = useState(0);
    const { scrollY } = useScroll();
    useEffect(() => {
        return scrollY.onChange(latest => {
            setScrollValue(latest);
        })
    }, [scrollY]);

    useEffect(() => {
        if (scrollValue === 0) {
            setIsShadow(false);
        } else {
            setIsShadow(true);
        }
    }, [scrollValue])
    return (
        <header className={`flex justify-between items-center bg-background p-5 ${isShadow ? "shadow-lg shadow-secondary" : ""}`}>
            <img className="w-12" src={theme === "dark" ? whiteNA : NA} alt="" />

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