"use client";

import React from "react";
import { useEffect, useState } from "react";
import Bio from "../components/Bio";
import Work from "../components/Work";
import Contact from "../components/Contact";

const BannerToggler = () => {
    const [showBio, setShowBio] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        if (showBio) {
            setShowWork(false);
            setShowContact(false);
        }
        if (showWork) {
            setShowBio(false);
            setShowContact(false);
        }
        if (showContact) {
            setShowBio(false);
            setShowWork(false);
        }
    }, [setShowBio, setShowWork, setShowContact]);

    return (
        <>
            <Bio
                setShowBio={setShowBio}
                showBio={showBio}
                setShowWork={setShowWork}
                setShowContact={setShowContact}
            />
            <Work
                setShowBio={setShowBio}
                setShowWork={setShowWork}
                showWork={showWork}
                setShowContact={setShowContact}
            />
            <Contact
                setShowBio={setShowBio}
                setShowWork={setShowWork}
                setShowContact={setShowContact}
                showContact={showContact}
            />
        </>
    );
};

export default BannerToggler;
