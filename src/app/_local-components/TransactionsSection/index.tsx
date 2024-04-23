'use client'
import React from 'react';
import { Button, ButtonGroup, chakra } from '@chakra-ui/react';
import { IoIosArrowDown } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import FilterBtnDrawerWithContent from './FilterBtnDrawerWithContent';

function TransactionsSection() {
    return (
        <chakra.section mt={"8.2rem"}>
            <chakra.div display={"flex"} justifyContent={"space-between"} gap={"2.4rem"}>
                <chakra.div display={"flex"} flexDirection={"column"}>
                    <chakra.h3 color={"primary.300"} layerStyle={"lg-text"}>
                        24 Transactions
                    </chakra.h3>
                    <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>Your transactions for the last 7 days</chakra.p>
                </chakra.div>
                <ButtonGroup spacing={"1.2rem"}>
                    <FilterBtnDrawerWithContent />
                    <Button size={"_md"} pl={"3rem"} pr={"2rem"} variant={"gray"} rightIcon={<FiDownload />}>Export list</Button>
                </ButtonGroup>
            </chakra.div>
            <chakra.hr display={"block"} mt={"2.4rem"} mb="3.3rem" bg={"gray.50"} />
            <chakra.div display={"flex"} flexDirection={"column"} gap={"2.4rem"}>
                <chakra.div display={"flex"} gap={"1.45rem"} alignItems={"center"}>
                    <chakra.span bg={"#E3FCF2"} display={"block"} rounded={"10rem"} p={"1.4rem"}>
                        <GoArrowDownLeft color='#075132' />
                    </chakra.span>
                    <chakra.div flex={1} display={"flex"} flexDirection={"column"} gap={"0.9rem"}>
                        <chakra.h5 fontWeight={500} layerStyle={"base-text"}>
                            Psychology of Money
                        </chakra.h5>
                        <chakra.p color="gray.400" fontWeight={500} layerStyle={"xxs-text"}>
                            Roy Cash
                        </chakra.p>
                    </chakra.div>
                    <chakra.div textAlign={"right"} display={"flex"} flexDirection={"column"} gap={"0.4rem"}>
                        <chakra.h5 fontWeight={700} layerStyle={"base-text"}>
                            USD 600
                        </chakra.h5>
                        <chakra.p color="gray.400" fontWeight={500} layerStyle={"xxs-text"}>
                            Apr 03,2022
                        </chakra.p>
                    </chakra.div>
                </chakra.div>
                <chakra.div display={"flex"} gap={"1.45rem"} alignItems={"center"}>
                    <chakra.span bg={"#E3FCF2"} display={"block"} rounded={"10rem"} p={"1.4rem"}>
                        <GoArrowDownLeft color="#075132" />
                    </chakra.span>
                    <chakra.div flex={1} display={"flex"} flexDirection={"column"} gap={"0.9rem"}>
                        <chakra.h5 fontWeight={500} layerStyle={"base-text"}>
                            Psychology of Money
                        </chakra.h5>
                        <chakra.p color="gray.400" fontWeight={500} layerStyle={"xxs-text"}>
                            Roy Cash
                        </chakra.p>
                    </chakra.div>
                    <chakra.div textAlign={"right"} display={"flex"} flexDirection={"column"} gap={"0.4rem"}>
                        <chakra.h5 fontWeight={700} layerStyle={"base-text"}>
                            USD 600
                        </chakra.h5>
                        <chakra.p color="gray.400" fontWeight={500} layerStyle={"xxs-text"}>
                            Apr 03,2022
                        </chakra.p>
                    </chakra.div>
                </chakra.div>
                <chakra.div display={"flex"} gap={"1.45rem"} alignItems={"center"}>
                    <chakra.span bg={"#F9E3E0"} display={"block"} rounded={"10rem"} p={"1.4rem"}>
                        <GoArrowUpRight color='#961100' />
                    </chakra.span>
                    <chakra.div flex={1} display={"flex"} flexDirection={"column"} gap={"0.9rem"}>
                        <chakra.h5 fontWeight={500} layerStyle={"base-text"}>
                            Psychology of Money
                        </chakra.h5>
                        <chakra.p color="gray.400" fontWeight={500} layerStyle={"xxs-text"}>
                            Roy Cash
                        </chakra.p>
                    </chakra.div>
                    <chakra.div textAlign={"right"} display={"flex"} flexDirection={"column"} gap={"0.4rem"}>
                        <chakra.h5 fontWeight={700} layerStyle={"base-text"}>
                            USD 600
                        </chakra.h5>
                        <chakra.p color="gray.400" fontWeight={500} layerStyle={"xxs-text"}>
                            Apr 03,2022
                        </chakra.p>
                    </chakra.div>
                </chakra.div>
            </chakra.div>
        </chakra.section>
    )
}

export default TransactionsSection