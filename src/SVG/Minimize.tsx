import React from 'react';

interface GitProps {
    fillColor: string; // Specifica che fillColor deve essere una stringa
}

const Settings: React.FC<GitProps> = ({ fillColor }) => {
    return (

        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2931 19.1593C12.5176 20.4612 10.6322 20.4612 9.85667 19.1593L0.753724 3.87828C-0.0404339 2.54514 0.920196 0.854726 2.47196 0.854726L20.6778 0.854726C22.2296 0.854726 23.1902 2.54514 22.3961 3.87828L13.2931 19.1593Z" fill="#548252" />
        </svg>

    );

}
export default Settings;
