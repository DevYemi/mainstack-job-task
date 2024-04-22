'use client';
import { Link } from '@chakra-ui/next-js';
import { usePathname } from 'next/navigation';

import React, { ComponentPropsWithRef, forwardRef, useMemo } from 'react';

interface propTypes extends ComponentPropsWithRef<typeof Link> {

}

const NavLink = forwardRef(function NavLink({
    href,
    children,
    ...props
}: propTypes,
    ref: React.ForwardedRef<any>,
) {
    const pathname = usePathname();

    const isActive = useMemo(() => href === pathname, [href, pathname])
    return (
        <Link
            {...props}
            ref={ref}
            href={href}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    )
})

export default NavLink
