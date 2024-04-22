import React, { useEffect, useRef, useState } from 'react'

function useIsHover(ref: React.MutableRefObject<HTMLElement | undefined>) {
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {

        if (!ref.current) return;
        const element = ref.current
        const mouseEnterCallback = () => { setIsHovering(true) }
        const mouseLeaveCallback = () => { setIsHovering(false) }
        element.addEventListener("mouseenter", mouseEnterCallback);
        element.addEventListener("mouseleave", mouseLeaveCallback);

        return () => {
            if (element) {
                element.removeEventListener("mouseenter", mouseEnterCallback);
                element.removeEventListener("mouseleave", mouseLeaveCallback);
            }

        }
    }, [ref])

    return isHovering;
}

export default useIsHover