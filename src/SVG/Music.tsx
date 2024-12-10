import React from 'react';

interface GitProps {
    fillColor: string; // Specifica che fillColor deve essere una stringa
}

const Music: React.FC<GitProps> = ({ fillColor }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="2.5rem" width="2.5rem"
            fill={fillColor}>
              <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/>
        </svg>
    );

}
export default Music;
