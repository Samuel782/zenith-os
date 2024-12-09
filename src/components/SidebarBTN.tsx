import React from "react";
import "./SidebarBTN.css";

interface SidebarBTNProps {
    icon: React.ReactNode; // L'SVG passato come attributo
    onClick?: () => void; // Funzione opzionale per il click
    className?: string; // Classi CSS aggiuntive
    iconColor?: string; // Colore dell'icona
}

const SidebarBTN: React.FC<SidebarBTNProps> = ({ icon, onClick, className, iconColor }) => {
    return (
        <div className={`sidebar-btn-container ${className}`}>
            <button onClick={onClick} className="sidebar-btn" style={{ color: iconColor }}>
                {icon}
            </button>
        </div>
    );
};

export default SidebarBTN;