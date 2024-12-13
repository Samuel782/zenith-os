import React from "react";

import theme from "@/theme";
import SidebarBTN from "@/components/SidebarBTN";
//SVG Icons
import Git from "@/SVG/Git";
import Phone from "@/SVG/Phone";
import Folder from "@/SVG/Folder";
import Camera from "@/SVG/Camera";
import Calendar from "@/SVG/Calendar";
import Book from "@/SVG/Book";
import ShoppingCart from "@/SVG/ShoppingCart";
import Edit from "@/SVG/Edit";
import Music from "@/SVG/Music";
import Menu from "@/SVG/Menu";
import RecycleBin from "@/SVG/RecycleBin";
import "./sidebar.css";




export default function Sidebar({ onToggleFileExplorer }: { onToggleFileExplorer: () => void }) {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container" style={{ backgroundColor: theme.defaultTheme.primary }}>
                <SidebarBTN
                    icon={<Phone fillColor={theme.defaultTheme.primary} />}
                />

                <SidebarBTN
                    icon={
                        <Folder fillColor={theme.defaultTheme.primary} /> // Cambia il colore dell'icona se cliccata
                        }
                />


                <SidebarBTN
                    icon={<Git fillColor={theme.defaultTheme.primary} />}
                />
                <SidebarBTN
                    icon={<Camera fillColor={theme.defaultTheme.primary} />}
                />
                <SidebarBTN
                    icon={<Calendar fillColor={theme.defaultTheme.primary} />}
                    onClick={onToggleFileExplorer} // Passa la funzione onClick
                />
                <SidebarBTN
                    icon={<Book fillColor={theme.defaultTheme.primary} />}
                />
                <SidebarBTN
                    icon={<ShoppingCart fillColor={theme.defaultTheme.primary} />}
                />
                <SidebarBTN
                    icon={<Edit fillColor={theme.defaultTheme.primary} />}
                />
                <SidebarBTN
                    icon={<Music fillColor={theme.defaultTheme.primary} />}
                />
                <SidebarBTN
                    icon={<Menu fillColor={theme.defaultTheme.primary} />}
                />

                <SidebarBTN
                    icon={<RecycleBin fillColor={theme.defaultTheme.primary} />}
                />
            </div>
        </div>
    );
}