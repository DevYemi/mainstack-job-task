'use client';
import { Link } from '@chakra-ui/next-js';
import { usePathname } from 'next/navigation';

import React, { ComponentPropsWithRef, useMemo } from 'react';

interface propTypes extends ComponentPropsWithRef<typeof Link> {

}

function NavLink({ href, children, ...props }: propTypes) {
    const pathname = usePathname();

    const isActive = useMemo(() => href === pathname, [href, pathname])
    return (
        <Link
            {...props}
            href={href}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    )
}

export default NavLink
