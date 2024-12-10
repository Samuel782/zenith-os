import React from 'react';

interface GitProps {
    fillColor: string; // Specifica che fillColor deve essere una stringa
}

const Menu: React.FC<GitProps> = ({ fillColor }) => {
    return (
        <svg height="2.5rem" width="2.5rem" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          
            <rect x="6.22241" y="6.22217" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="21.7778" y="6.22217" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="37.3335" y="6.22217" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="6.22241" y="21.7776" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="21.7778" y="21.7776" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="37.3335" y="21.7776" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="6.22241" y="37.3333" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="21.7778" y="37.3333" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
            <rect x="37.3335" y="37.3333" width="12.4444" height="12.4444" rx="2"  fill={fillColor} />
        </svg>
    );

}
export default Menu;
