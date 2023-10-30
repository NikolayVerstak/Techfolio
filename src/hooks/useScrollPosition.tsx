import { useEffect, useState } from "react";

const useScrollPosition = ({ scrollPosition }: { scrollPosition: number }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // check if the user starts scrolling to add a background for the humburger navbar button
            setIsScrolled(window.scrollY >= scrollPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return isScrolled;
};

export default useScrollPosition;
