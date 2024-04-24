"use client";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithRef, forwardRef, useMemo } from "react";

interface propTypes extends ComponentPropsWithRef<typeof Link> {}

/**
 * @description A Wrapper Component that helps add an aria-current value when the page is active
 *
 * @prop All props of a NextJs `Link` Component can be passed to this component
 *
 * */
const NavLink = forwardRef(function NavLink(
  { href, children, ...props }: propTypes,
  ref: React.ForwardedRef<any>,
) {
  const pathname = usePathname();

  const isActive = useMemo(() => href === pathname, [href, pathname]);
  return (
    <Link
      {...props}
      ref={ref}
      href={href}
      aria-current={isActive ? "page" : "false"}
    >
      {children}
    </Link>
  );
});

export default NavLink;
