import React from "react";
import "./SidebarBTN.css";
import theme from "@/theme";

interface SidebarBTNProps {
    icon: React.ReactNode; // L'SVG passato come attributo
    onClick?: () => void; // Funzione opzionale per il click
    className?: string; // Classi CSS aggiuntive
    iconColor?: string; // Colore dell'icona
}

const SidebarBTN: React.FC<SidebarBTNProps> = ({ icon, onClick, className, iconColor }) => {
    return (
        <div className={`sidebar-btn-container ${className}`}>
            <button onClick={onClick} className="sidebar-btn" style={{ backgroundColor: theme.defaultTheme.secondary }}>
                {icon}
            </button>
        </div>
    );
};

export default SidebarBTN;