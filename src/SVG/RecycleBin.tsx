import React from 'react';

interface GitProps {
    fillColor: string; // Specifica che fillColor deve essere una stringa
}

const Book: React.FC<GitProps> = ({ fillColor }) => {
    return (
        <svg width="2.5rem" height="2.5rem" viewBox="0 0 48 52" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.263364 2.67937C0.0483375 1.45516 0.990258 0.333374 2.23321 0.333374H45.3399C46.5925 0.333374 47.5368 1.47176 47.3054 2.70285L38.3823 50.1739C38.2045 51.1194 37.3788 51.8044 36.4167 51.8044H10.5713C9.60018 51.8044 8.76942 51.1068 8.60142 50.1504L0.263364 2.67937ZM21.9699 21.0102C21.4108 21.9628 20.1948 22.2659 19.254 21.6872L18.4465 21.1905C17.5057 20.6118 17.1962 19.3704 17.7554 18.4178L18.7272 16.762C18.8985 16.4701 19.1478 16.2343 19.4464 16.0817C20.2431 15.6746 21.2184 15.9365 21.7242 16.6933L22.4886 17.8371C22.9248 18.4899 22.9516 19.3376 22.5573 20.0094L21.9699 21.0102ZM20.4162 31.3652C21.5206 31.3849 22.4006 32.2962 22.3817 33.4006L22.3641 34.4339C22.3453 35.5383 21.4347 36.4176 20.3303 36.3979L18.5059 36.3653C18.1555 36.359 17.8144 36.2511 17.5241 36.0546C16.7869 35.5556 16.5219 34.5947 16.8993 33.7892L17.5052 32.4961C17.8396 31.7824 18.5622 31.3321 19.3504 31.3461L20.4162 31.3652ZM29.7259 24.8889C28.775 25.451 28.444 26.6865 28.9866 27.6486L29.5576 28.6611C29.9402 29.3394 30.6772 29.7261 31.4464 29.652L32.7932 29.5222C33.6855 29.4362 34.3827 28.6895 34.4211 27.7786C34.4355 27.4377 34.355 27.1005 34.1888 26.8059L33.2447 25.1319C32.7021 24.1698 31.4914 23.8454 30.5405 24.4075L29.7259 24.8889ZM26.5028 13.0178C26.1582 12.3572 25.4748 11.9429 24.7296 11.9429H22.0814C21.5786 11.9429 21.1176 12.2229 20.8858 12.6691L20.0202 14.3349C19.7587 14.8383 20.2536 15.4 20.7859 15.2038C21.0634 15.1015 21.3746 15.2092 21.5295 15.4611L24.9906 21.0884C25.153 21.3525 25.0283 21.6992 24.7349 21.7993C24.2176 21.9758 24.3445 22.7405 24.891 22.7405H28.2099C28.574 22.7405 28.9113 22.549 29.0979 22.2364L30.8409 19.3166C31.1165 18.8548 30.5367 18.3606 30.1245 18.7059C29.8907 18.9017 29.5358 18.8311 29.3947 18.5608L26.5028 13.0178ZM35.3451 35.117C34.9842 35.757 34.3055 36.1404 33.5775 36.1158L27.4289 35.9077C27.129 35.8975 26.8964 36.167 26.9446 36.4689C27.0314 37.0119 26.3084 37.2564 26.0503 36.7714L24.4676 33.7959C24.2997 33.4802 24.3034 33.1003 24.4775 32.7916L26.1541 29.8188C26.4191 29.3488 27.1305 29.6281 27.0241 30.1604C26.963 30.4659 27.2016 30.7511 27.5082 30.7391L33.9911 30.4847C34.2824 30.4732 34.5253 30.2583 34.5765 29.9667C34.6772 29.394 35.4195 29.2557 35.723 29.753L36.6804 31.322C36.938 31.7443 36.9484 32.2741 36.7075 32.7014L35.3451 35.117ZM10.8645 31.4373C10.4796 32.0704 10.4647 32.8638 10.8256 33.5037L12.188 35.9194C12.429 36.3466 12.8824 36.6023 13.3685 36.585L15.1744 36.5208C15.7469 36.5004 16.0011 35.7731 15.5669 35.3975C15.3458 35.2062 15.2855 34.8834 15.4215 34.6195L18.4476 28.7448C18.5907 28.4669 18.9513 28.398 19.1792 28.6049C19.5764 28.9654 20.1683 28.4744 19.9033 28.0044L18.2267 25.0315C18.0526 24.7229 17.733 24.5296 17.3821 24.5207L14.0735 24.4361C13.5341 24.4224 13.3795 25.1857 13.8822 25.3802C14.1617 25.4884 14.2734 25.8293 14.1149 26.0902L10.8645 31.4373Z" fill="#DDE6ED" />
            <g filter="url(#filter0_i_12_39)">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.30448 0.333374C1.0641 0.333374 0.122838 1.45078 0.33355 2.67313L0.937812 6.17849H46.5423L47.2945 2.76359C47.5694 1.51554 46.6192 0.333374 45.3413 0.333374H2.30448Z" fill="black" fillOpacity="0.25" />
            </g>
            <g filter="url(#filter1_i_12_39)">
                <path fillRule="evenodd" clipRule="evenodd" d="M36.3699 51.8044C37.3356 51.8044 38.1634 51.1144 38.3373 50.1645L39.1069 45.9591H7.86121L8.50082 50.1091C8.65116 51.0845 9.49055 51.8044 10.4775 51.8044H36.3699Z" fill="black" fillOpacity="0.25" />
            </g>
            <defs>
                <filter id="filter0_i_12_39" x="0.303955" y="0.333374" width="47.0381" height="9.84509" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7.05" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_12_39" />
                </filter>
                <filter id="filter1_i_12_39" x="7.86133" y="45.9592" width="31.2456" height="9.84521" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="15.95" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_12_39" />
                </filter>
            </defs>
        </svg>

    );

}
export default Book;
