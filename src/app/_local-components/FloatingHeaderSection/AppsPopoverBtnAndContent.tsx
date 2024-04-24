import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Icon, chakra, useDisclosure } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from '@chakra-ui/react'
import { TbApps } from "react-icons/tb";
import NavLink from '@/global-components/NavLink';
import { IoIosArrowForward } from "react-icons/io";
import { InvoicingIcon, LinkInBioIcon, MediaKitIcon, StoreIcon } from '@/global-components/custom-icons';

function AppsPopoverBtnAndContent() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Popover
            placement="bottom-start"
            gutter={20}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}>
            <PopoverTrigger>
                <chakra.button
                    onClick={onOpen}
                    aria-expanded={isOpen}
                    display={"flex"}
                    color={"gray.400"}
                    alignItems={"center"}
                    gap={"2.4rem"}
                    px={"1.8rem"}
                    py={"0.8rem"}
                    borderRadius={"10rem"}
                    _hover={{
                        bg: "gray.50",
                    }}
                    _expanded={{
                        bg: "primary.300",
                        color: "white"
                    }}
                >
                    <chakra.div
                        display={"flex"}
                        alignItems={"center"}
                        gap={"0.8rem"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={TbApps} />
                        <chakra.p layerStyle={"base-text"}>
                            Apps
                        </chakra.p>
                    </chakra.div>
                    <chakra.div
                        display={isOpen ? "flex" : "none"}
                        alignItems={"center"}
                        gap={"0.8rem"}
                    >
                        <chakra.p layerStyle={"base-text"}>
                            Link In Bio
                        </chakra.p>
                        <Icon w={"1.6rem"} h={"1.6rem"} as={IoIosArrowDown} />
                    </chakra.div>

                </chakra.button>
            </PopoverTrigger>
            <PopoverContent borderRadius={"1.6rem"} shadow={"md"} w={"50rem"}>
                <PopoverBody
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"2.4rem"}
                    p={"2.4rem"}
                >
                    <NavLink
                        href={"#"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1rem"}
                        p={"0.8rem"}
                        color={"gray.400"}
                        _hover={{
                            boxShadow: "md",
                            borderRadius: "1.2rem"
                        }}
                    >
                        <chakra.span
                            border={"1px"}
                            borderRadius={"1.2rem"}
                            p={"1rem"}
                            borderColor={"gray.50"}
                        >
                            <Icon as={LinkInBioIcon} />
                        </chakra.span>
                        <chakra.div
                            display={"flex"}
                            flexDirection={"column"}
                            gap="0.4rem"
                            flex={1}
                        >
                            <chakra.h5 color={"primary.300"} layerStyle={"base-text"}>
                                Link In Bio
                            </chakra.h5>
                            <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
                                Manage Your Link In Bio
                            </chakra.p>
                        </chakra.div>
                        <Icon w={"1.2rem"} h={"1.2rem"} as={IoIosArrowForward} />
                    </NavLink>
                    <NavLink
                        href={"#"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1rem"}
                        p={"0.8rem"}
                        color={"gray.400"}
                        _hover={{
                            boxShadow: "md",
                            borderRadius: "1.2rem"
                        }}
                    >
                        <chakra.span
                            border={"1px"}
                            borderRadius={"1.2rem"}
                            p={"1rem"}
                            borderColor={"gray.50"}
                        >
                            <Icon as={StoreIcon} />
                        </chakra.span>
                        <chakra.div
                            display={"flex"}
                            flexDirection={"column"}
                            gap="0.4rem"
                            flex={1}
                        >
                            <chakra.h5 color={"primary.300"} layerStyle={"base-text"}>
                                Store
                            </chakra.h5>
                            <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
                                Manage Your Store Activities
                            </chakra.p>
                        </chakra.div>
                        <Icon w={"1.2rem"} h={"1.2rem"} as={IoIosArrowForward} />
                    </NavLink>
                    <NavLink
                        href={"#"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1rem"}
                        p={"0.8rem"}
                        color={"gray.400"}
                        _hover={{
                            boxShadow: "md",
                            borderRadius: "1.2rem"
                        }}
                    >
                        <chakra.span
                            border={"1px"}
                            borderRadius={"1.2rem"}
                            p={"1rem"}
                            borderColor={"gray.50"}
                        >
                            <Icon as={MediaKitIcon} />
                        </chakra.span>
                        <chakra.div
                            display={"flex"}
                            flexDirection={"column"}
                            gap="0.4rem"
                            flex={1}
                        >
                            <chakra.h5 color={"primary.300"} layerStyle={"base-text"}>
                                Media Kit
                            </chakra.h5>
                            <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
                                Manage Your Media Kit
                            </chakra.p>
                        </chakra.div>
                        <Icon w={"1.2rem"} h={"1.2rem"} as={IoIosArrowForward} />
                    </NavLink>
                    <NavLink
                        href={"#"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1rem"}
                        p={"0.8rem"}
                        color={"gray.400"}
                        _hover={{
                            boxShadow: "md",
                            borderRadius: "1.2rem"
                        }}
                    >
                        <chakra.span
                            border={"1px"}
                            borderRadius={"1.2rem"}
                            p={"1rem"}
                            borderColor={"gray.50"}
                        >
                            <Icon as={InvoicingIcon} />
                        </chakra.span>
                        <chakra.div
                            display={"flex"}
                            flexDirection={"column"}
                            gap="0.4rem"
                            flex={1}
                        >
                            <chakra.h5 color={"primary.300"} layerStyle={"base-text"}>
                                Invoicing
                            </chakra.h5>
                            <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
                                Manage Your Invoices
                            </chakra.p>
                        </chakra.div>
                        <Icon w={"1.2rem"} h={"1.2rem"} as={IoIosArrowForward} />
                    </NavLink>
                    <NavLink
                        href={"#"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1rem"}
                        p={"0.8rem"}
                        color={"gray.400"}
                        _hover={{
                            boxShadow: "md",
                            borderRadius: "1.2rem"
                        }}
                    >
                        <chakra.span
                            border={"1px"}
                            borderRadius={"1.2rem"}
                            p={"1rem"}
                            borderColor={"gray.50"}
                        >
                            <Icon as={InvoicingIcon} />
                        </chakra.span>
                        <chakra.div
                            display={"flex"}
                            flexDirection={"column"}
                            gap="0.4rem"
                            flex={1}
                        >
                            <chakra.h5 color={"primary.300"} layerStyle={"base-text"}>
                                Bookings
                            </chakra.h5>
                            <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
                                Manage Your Bookings
                            </chakra.p>
                        </chakra.div>
                        <Icon w={"1.2rem"} h={"1.2rem"} as={IoIosArrowForward} />
                    </NavLink>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default AppsPopoverBtnAndContent;