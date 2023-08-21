"use client";

import { useEffect, useState } from "react";

const DetectTouch = () => {

    useEffect(() => {
        const check = () => "ontouchstart" in window;

        return check()
    }, []);
};


export default DetectTouch;
