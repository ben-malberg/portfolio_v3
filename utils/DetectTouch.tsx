"use client";

import { useEffect, useState } from "react";

const DetectTouch = () => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch("ontouchstart" in window);
    }, []);

    return isTouch;
};


export default DetectTouch;
