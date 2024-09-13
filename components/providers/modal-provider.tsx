"use client"

import { useEffect, useState } from "react";
import { CardModal } from "../modals";



export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    };

    return (
        <>
            <CardModal />
        </>
    )

}