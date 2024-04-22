import React from "react";
import { IconTypes } from "./types";

interface propTypes extends IconTypes {
    isGray?: boolean
}

function InvoicingIcon({
    width = 24,
    height = 24,
    color = "",
    inheritColor = false,
    isGray = false,
}: propTypes) {
    return (

        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5202 6.64998V21.05C20.5202 21.63 20.0502 22.1 19.4702 22.1H9.29023C8.71023 22.1 8.24023 21.63 8.24023 21.05V20.16L17.3402 16.72C17.7002 16.58 17.9402 16.24 17.9402 15.85V5.59998H19.4702C20.0502 5.59998 20.5202 6.06998 20.5202 6.64998Z" fill="url(#paint0_linear_9860_1465)" />
            <path d="M17.9402 5.59998V15.86C17.9402 16.25 17.7002 16.59 17.3402 16.73L8.24023 20.17V6.64998C8.24023 6.06998 8.71023 5.59998 9.29023 5.59998H17.9402Z" fill="url(#paint1_linear_9860_1465)" />
            <path d="M17.94 2.92999V5.59999H9.28998C8.70998 5.59999 8.23998 6.06999 8.23998 6.64999V20.17L4.73998 21.49C4.12998 21.72 3.47998 21.27 3.47998 20.62V2.91999C3.47998 2.40999 3.89998 1.98999 4.40998 1.98999H17.01C17.52 1.99999 17.94 2.41999 17.94 2.92999Z" fill="url(#paint2_linear_9860_1465)" />
            <defs>
                <linearGradient id="paint0_linear_9860_1465" x1="8.2422" y1="13.8522" x2="20.5182" y2="13.8522" gradientUnits="userSpaceOnUse">
                    <stop stop-color={isGray ? "#999999" : "#FCFF1C"} />
                    <stop offset="1" stop-color={isGray ? "#999999" : "#FF9D0A"} />
                </linearGradient>
                <linearGradient id="paint1_linear_9860_1465" x1="8.2422" y1="12.8857" x2="17.9372" y2="12.8857" gradientUnits="userSpaceOnUse">
                    <stop stop-color={isGray ? "#777777" : "#FFDDCD"} />
                    <stop offset="1" stop-color={isGray ? "#777777" : "#FF5403"} />
                </linearGradient>
                <linearGradient id="paint2_linear_9860_1465" x1="3.48199" y1="11.7778" x2="17.937" y2="11.7778" gradientUnits="userSpaceOnUse">
                    <stop stop-color={isGray ? "#555555" : "#E7CFFF"} />
                    <stop offset="1" stop-color={isGray ? "#555555" : "#870FFF"} />
                </linearGradient>
            </defs>
        </svg>


    );
}

export default InvoicingIcon;
