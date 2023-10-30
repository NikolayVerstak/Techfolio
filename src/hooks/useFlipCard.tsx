import { useState, useEffect } from "react";

const useFlipCard = (isActive = false) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const rotationDegree = isFlipped ? 180 : 0;

    useEffect(() => {
        if (!isActive) {
            setIsFlipped(false);
        }
    }, [isActive]);

    const handleDetailsClick = () => {
        setIsFlipped(!isFlipped);
    };

    return {
        isFlipped,
        rotationDegree,
        handleDetailsClick,
    };
};

export default useFlipCard;
