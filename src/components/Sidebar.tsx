import React from "react";

import SidebarBTN from "@/components/sidebarBTN";
import Git from "@/SVG/Git";

import "./sidebar.css";


export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <SidebarBTN
                icon={<Git fillColor={"#32748"} />}
            />
            <SidebarBTN
                icon={<Git fillColor={"#0000000"} />}
            />
            <SidebarBTN
                icon={<Git fillColor={"#0000000"} />}
            />
        </div>
    );

}