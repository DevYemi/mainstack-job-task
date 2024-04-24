'use client';
import React from 'react';
import { Icon, chakra, Tooltip } from '@chakra-ui/react'
import NavLink from '@/global-components/NavLink';
import { InvoicingIcon, LinkInBioIcon, MediaKitIcon, StoreIcon } from '@/global-components/custom-icons';

function FloatingAsideNav() {

    return (
        <chakra.div float={"left"} bg="white" left={"1.6rem"} w="fit-content" zIndex={8} boxShadow={"lg"} p="0.4rem" borderRadius={"10rem"} position={"sticky"} top={"50%"} transform={"translate(0, -50%)"} display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
            <Tooltip fontSize={"1.2rem"} fontWeight={400} placement='right' bg={"primary.300"} p={"0.8rem"} borderRadius={"0.6rem"} hasArrow label="Link In Bio">
                <NavLink
                    filter='grayscale(100%)'
                    p="0.8rem"
                    href={"#"}
                    borderRadius={"10rem"}
                    _hover={{
                        filter: "grayscale(0%)",
                        bg: "gray.50"
                    }}
                >
                    <Icon w={"2.4rem"} h={"2.4rem"} as={LinkInBioIcon} />
                </NavLink>
            </Tooltip>
            <Tooltip fontSize={"1.2rem"} fontWeight={400} placement='right' bg={"primary.300"} p={"0.8rem"} borderRadius={"0.6rem"} hasArrow label="Store">
                <NavLink
                    filter='grayscale(100%)'
                    p="0.8rem"
                    href={"#"}
                    borderRadius={"10rem"}
                    _hover={{
                        filter: "grayscale(0%)",
                        bg: "gray.50"
                    }}
                >
                    <Icon w={"2.4rem"} h={"2.4rem"} as={StoreIcon} />
                </NavLink>
            </Tooltip>
            <Tooltip fontSize={"1.2rem"} fontWeight={400} placement='right' bg={"primary.300"} p={"0.8rem"} borderRadius={"0.6rem"} hasArrow label="Media Kit">
                <NavLink
                    filter='grayscale(100%)'
                    p="0.8rem"
                    href={"#"}
                    borderRadius={"10rem"}
                    _hover={{
                        filter: "grayscale(0%)",
                        bg: "gray.50"
                    }}
                >
                    <Icon w={"2.4rem"} h={"2.4rem"} as={MediaKitIcon} />
                </NavLink>
            </Tooltip>
            <Tooltip fontSize={"1.2rem"} fontWeight={400} placement='right' bg={"primary.300"} p={"0.8rem"} borderRadius={"0.6rem"} hasArrow label="Invoicing">
                <NavLink
                    filter='grayscale(100%)'
                    p="0.8rem"
                    href={"#"}
                    borderRadius={"10rem"}
                    _hover={{
                        filter: "grayscale(0%)",
                        bg: "gray.50"
                    }}
                >
                    <Icon w={"2.4rem"} h={"2.4rem"} as={InvoicingIcon} />
                </NavLink>
            </Tooltip>
        </chakra.div>
    )
}

export default FloatingAsideNav;