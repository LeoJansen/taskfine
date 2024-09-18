import { Navbar } from "./_components/navbar";
import React from "react";

const DashboardLayout = ({
    children
} : {    children: React.ReactNode})=>{
        return(
            <div className="h-full w-full">
                <Navbar/>
                {children}
            </div>
        )

    };


export default DashboardLayout;
