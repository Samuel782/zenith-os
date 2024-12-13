import React from 'react';

interface GitProps {
    fillColor: string; // Specifica che fillColor deve essere una stringa
}

const Settings: React.FC<GitProps> = ({ fillColor }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="1.5rem" width="1.5rem"
            fill={fillColor}>
            <path
                d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H240v640Zm80-80h320v-80H320v80Zm160-160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-120q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0-40Z" />

        </svg>
    );

}
export default Settings;