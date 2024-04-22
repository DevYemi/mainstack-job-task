import React from "react";
import { IconTypes } from "./types";

interface propTypes extends IconTypes {
    isGray?: boolean
}

function StoreIcon({
    width = 24,
    height = 24,
    color = "",
    inheritColor = false,
    isGray
}: propTypes) {
    return (

        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9998 22.0599H4.97984C4.62984 22.0599 4.33984 21.7799 4.33984 21.4199V7.39995C4.33984 7.04995 4.61984 6.75995 4.97984 6.75995H18.9998C19.3498 6.75995 19.6398 7.03995 19.6398 7.39995V21.4199C19.6398 21.7699 19.3498 22.0599 18.9998 22.0599Z" fill="url(#paint0_linear_9860_1453)" />
            <path d="M20.4602 15.72L7.59017 5.22003C7.13017 4.84003 7.39017 4.09003 7.99017 4.09003H20.8602C21.2102 4.09003 21.5002 4.37003 21.5002 4.73003V15.24C21.5002 15.77 20.8802 16.06 20.4602 15.72Z" fill="url(#paint1_linear_9860_1453)" />
            <path d="M3.54 13.58L16.41 3.07C16.87 2.69 16.61 1.94 16.01 1.94H3.14C2.79 1.94 2.5 2.22 2.5 2.58V13.09C2.5 13.62 3.12 13.92 3.54 13.58Z" fill="url(#paint2_linear_9860_1453)" />
            <defs>
                <linearGradient id="paint0_linear_9860_1453" x1="4.34182" y1="14.4112" x2="19.6375" y2="14.4112" gradientUnits="userSpaceOnUse">
                    <stop stopColor={isGray ? "#999999" : "#FF9868"} />
                    <stop offset="1" stopColor={isGray ? "#999999" : "#FF5403"} />
                </linearGradient>
                <linearGradient id="paint1_linear_9860_1453" x1="7.35294" y1="9.97921" x2="21.5002" y2="9.97921" gradientUnits="userSpaceOnUse">
                    <stop stopColor={isGray ? "#777777" : "#03FFE5"} />
                    <stop offset="1" stopColor={isGray ? "#777777" : "#14B348"} />
                </linearGradient>
                <linearGradient id="paint2_linear_9860_1453" x1="2.5" y1="7.8319" x2="16.6472" y2="7.8319" gradientUnits="userSpaceOnUse">
                    <stop stopColor={isGray ? "#555555" : "#FCFF1C"} />
                    <stop offset="1" stopColor={isGray ? "#555555" : "#FF9D0A"} />
                </linearGradient>
            </defs>
        </svg>

    );
}

export default StoreIcon;
