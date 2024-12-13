import React from "react";
import theme from "@/theme";


import Logo from "@/SVG/Logo";
import Settings from "@/SVG/Settings";
import Battery from "@/SVG/Battery";
import Bluetooth from "@/SVG/Bluetooth";


import "./Topbar.css";

let currentApp = "ZenithOS";
if(currentApp.length>15){
    currentApp.slice(0,15);
}


export default function Sidebar() {
    return (
        <div className="topbar-wrapper">
            <div className="topbar-container" style={{ backgroundColor: theme.defaultTheme.primary }}>
                <div className="left">
                    <div className="topbar-element">
                        <Logo fillColor="#fff" />
                    </div>
                    <div className="topbar-element" style={{ width: "auto" }}>
                        {currentApp}
                    </div>

                    <div className="topbar-element">
                        File
                    </div>
                    <div className="topbar-element">
                        Edit
                    </div>
                    <div className="topbar-element">
                        Search
                    </div>
                </div>

                <div className="right">

                    <div className="topbar-element">
                        <Bluetooth fillColor="#fff" />
                    </div>
                    <div className="topbar-element">
                        <Battery fillColor="#fff" />
                    </div>
                    <div className="topbar-element">
                        <Settings fillColor="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}