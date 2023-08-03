"use client";

import React from "react";
import { useReducer } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

const initialState = {
    showStates: [false, false, false],
};

interface bannersStatus {
    showStates: boolean[];
}

interface actionObject {
    type: string;
    index: number;
}

const reducer = (state: bannersStatus, action: actionObject) => {
    const { index } = action;
    const showStates = [...state.showStates];
    const updatedShowStates = showStates.map((_, idx) => {
        return idx === index ? !showStates[index] : false;
    });

    return {
        showStates: updatedShowStates,
    };
};

const BannerToggler = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleToggle = (index: number) => {
        dispatch({ type: "TOGGLE", index });
    };

    return (
        <>
            <div className="compensateShift">
                <Navbar />
                <Banner
                    bannerName="BIO"
                    bannerSlug="cactus-banner"
                    bannerShown={state.showStates[0]}
                    handleToggleBanner={() => handleToggle(0)}
                />
                <Banner
                    bannerName="WORK"
                    bannerSlug="straw-banner"
                    bannerShown={state.showStates[1]}
                    handleToggleBanner={() => handleToggle(1)}
                />
                <Banner
                    bannerName="CONTACT"
                    bannerSlug="tree-banner"
                    bannerShown={state.showStates[2]}
                    handleToggleBanner={() => handleToggle(2)}
                />
            </div>
        </>
    );
};

export default BannerToggler;
