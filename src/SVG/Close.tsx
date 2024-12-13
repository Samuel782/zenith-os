import React from 'react';

interface GitProps {
    fillColor: string; // Specifica che fillColor deve essere una stringa
}

const Settings: React.FC<GitProps> = ({ fillColor }) => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">

            <ellipse cx="11.9199" cy="13.7427" rx="11.56" ry="11.3008" fill="#825253" />
            <path d="M7.37109 19L11.0723 14L7.37109 9H9.25586L12.0098 12.7402L14.7734 9H16.6289L12.918 14L16.6289 19H14.7734L12.0098 15.2598L9.25586 19H7.37109Z" fill="white" />

        </svg>
    );

}
export default Settings;
