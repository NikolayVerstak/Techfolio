import { useState } from "react";

const useProjectIndex = (initialIndex = 0) => {
    const [index, setIndex] = useState(initialIndex);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const getProjectNumber = (index: number, projectsLength: number) => {
        if (index === 0) {
            return "first-project";
        } else if (index === projectsLength - 1) {
            return "last-project";
        } else {
            return "middle-project";
        }
    };

    return {
        index,
        handleSelect,
        getProjectNumber,
    };
};

export default useProjectIndex;
