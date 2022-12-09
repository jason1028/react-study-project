import React from "react";
import { Outlet } from "react-router";

// conponents
import Navigation from "../components/navigation";

export default function Home(params) {
    return (
        <div>
            <Navigation/>
            <div className=""></div>
            <Outlet/>
        </div>
    );
}