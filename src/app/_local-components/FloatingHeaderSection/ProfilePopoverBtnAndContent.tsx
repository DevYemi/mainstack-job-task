import React, { useEffect, useState } from 'react';
import { Avatar, Icon, chakra } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoSettingsOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { TbApps } from "react-icons/tb";
import { GoBug } from "react-icons/go";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import useSWR from 'swr';
import { UserDetailsDataType } from '@/fetchEndpoints/user/types';
import { fetchBaseUrl, parseClientError, swrFetcher } from '@/fetchEndpoints/_shared/clientBaseApi';
import { _user } from '@/fetchEndpoints/user/path';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import generateToast from '@/utils/generateToast';

function ProfilePopoverBtnAndContent() {
    const { isLoading, data, error } = useSWR<UserDetailsDataType>(
        `${fetchBaseUrl}${_user}`,
        swrFetcher
    );

    useEffect(() => {
        // Display toast if there are any errors
        if (error) {
            const e = parseClientError(error);
            generateToast(e)
        }
    }, [error])
    return (
        <Popover placement="bottom-start" gutter={20} >
            <PopoverTrigger>
                <chakra.button
                    display={"flex"}
                    alignItems={"center"}
                    gap={"0.8rem"}
                    py={"0.4rem"}
                    pl={"0.5rem"}
                    pr={"1.2rem"}
                    bg={"#EFF1F6"}
                    borderRadius={"10rem"}
                >
                    <SkeletonCircle
                        w={"3.2rem"}
                        h={"3.2rem"}
                        isLoaded={!isLoading}
                    >
                        <Avatar
                            w={"3.2rem"}
                            h={"3.2rem"}
                            color={"white"}
                            name={`${data?.first_name} ${data?.last_name}`}
                            bgGradient={'linear(to-r, #5C6670, #131316)'}
                        />
                    </SkeletonCircle>

                    <Icon w={"2.4rem"} h={"2.4rem"} as={RxHamburgerMenu} />
                </chakra.button>
            </PopoverTrigger>
            <PopoverContent borderRadius={"1.6rem"} shadow={"md"} w={"40rem"}>
                <PopoverBody
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1.6rem"}
                    p={"1rem"}
                >
                    <chakra.div
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1rem"}
                        p={"0.8rem"}
                        color={"gray.400"}
                    >
                        <SkeletonCircle
                            w={"4.8rem"}
                            h={"4.8rem"}
                            isLoaded={!isLoading}
                        >
                            <Avatar
                                w={"4.8rem"}
                                h={"4.8rem"}
                                color={"white"}
                                name={`${data?.first_name} ${data?.last_name}`}
                                bgGradient={'linear(to-r, #5C6670, #131316)'}
                            />
                        </SkeletonCircle>
                        <SkeletonText
                            noOfLines={2}
                            skeletonHeight={"1rem"}
                            spacing={"0.8rem"}
                            isLoaded={!isLoading}
                        >
                            <chakra.div
                                display={"flex"}
                                flexDirection={"column"}
                                gap="0.4rem"
                                flex={1}
                            >
                                <chakra.h5 color={"primary.300"} layerStyle={"base-text"}>
                                    {`${data?.first_name} ${data?.last_name}`}
                                </chakra.h5>
                                <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
                                    {data?.email}
                                </chakra.p>
                            </chakra.div>
                        </SkeletonText>

                    </chakra.div>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={IoSettingsOutline} />
                        <chakra.p layerStyle={"base-text"}>
                            Settings
                        </chakra.p>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={CgNotes} />
                        <chakra.p layerStyle={"base-text"}>
                            Purchase History
                        </chakra.p>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={MdOutlineCardGiftcard} />
                        <chakra.p layerStyle={"base-text"}>
                            Refer And Earn
                        </chakra.p>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={TbApps} />
                        <chakra.p layerStyle={"base-text"}>
                            Integration
                        </chakra.p>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={GoBug} />
                        <chakra.p layerStyle={"base-text"}>
                            Report Bug
                        </chakra.p>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={MdOutlineSwitchAccount} />
                        <chakra.p layerStyle={"base-text"}>
                            Switch Account
                        </chakra.p>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        gap={"1.6rem"}
                        p={"0.8rem"}
                        color={"primary.300"}
                    >
                        <Icon w={"2rem"} h={"2rem"} as={PiSignOut} />
                        <chakra.p layerStyle={"base-text"}>
                            Sign Out
                        </chakra.p>
                    </chakra.button>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default ProfilePopoverBtnAndContent;