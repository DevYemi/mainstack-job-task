'use client';
import React, { useMemo } from 'react';
import { Icon, chakra } from '@chakra-ui/react'
import { CiCircleInfo } from "react-icons/ci";
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from "recharts";
import { GoDotFill } from "react-icons/go";

function TransactionsAnalyticsSections() {
    // Create a dummy Data for the graph
    const customData = useMemo(() => {
        const dataCount = 10;
        const store = [];

        const getRandomFromRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        for (let i = 0; i < dataCount; i++) {
            const storeData = { revenue: 100 };

            storeData.revenue = getRandomFromRange(0, 5000);

            store.push(storeData);
        }

        return store;
    }, []);
    return (
        <chakra.section display={"flex"} gap={"12.4rem"}>
            <chakra.div display={"flex"} gap={"4.8rem"} flexDirection={"column"} flex={1}>
                <chakra.div display={"flex"} alignItems={"center"} gap={"6.4rem"}>
                    <chakra.div display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
                        <chakra.p color={"gray.400"} layerStyle={"base-text"}>
                            Available Balance
                        </chakra.p>
                        <chakra.h1 color={"primary.300"} layerStyle={"2xl-text"}>
                            USD 120,500.00
                        </chakra.h1>
                    </chakra.div>
                    <chakra.button color={"white"} layerStyle={"base-text"} borderRadius={"10rem"} py={"1.4rem"} px={"5.2rem"} bg={"primary.300"}>
                        Withdraw
                    </chakra.button>
                </chakra.div>
                <chakra.div flex={1} display={"flex"} flexDirection={"column"}>
                    <chakra.div flex={1} w={"100%"} height={"10rem"}>
                        <ResponsiveContainer width={"100%"} height={"100%"}>
                            <AreaChart data={customData}>
                                <Tooltip />
                                <Area
                                    type="bump"
                                    strokeWidth={2}
                                    dataKey="revenue"
                                    stroke={"#FF5403"}
                                    fill='transparent'
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </chakra.div>
                    <chakra.div>
                        <chakra.div position={"relative"} color={"#DBDEE5"}>
                            <Icon transform={"translate(-50%, -45%)"} position={"absolute"} top={0} left={0} w={"1rem"} h={"1rem"} as={GoDotFill} />
                            <chakra.hr w="100%" height={"0.2rem"} />
                            <Icon transform={"translate(30%, -70%)"} position={"absolute"} right={0} w={"1rem"} h={"1rem"} as={GoDotFill} />
                        </chakra.div>
                        <chakra.div color={"gray.400"} layerStyle={"xxs-text"} mt={"1.5rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                            <chakra.p>
                                Apr 1 ,  2022
                            </chakra.p>
                            <chakra.p>
                                Apr 30 ,  2022
                            </chakra.p>
                        </chakra.div>
                    </chakra.div>
                </chakra.div>



            </chakra.div>
            <chakra.div flexBasis={"27.1rem"} display={"flex"} flexDirection={"column"} gap={"3.2rem"}>
                <chakra.div display={"flex"} justifyContent={"space-between"}>
                    <chakra.div display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
                        <chakra.p layerStyle={"xxs-text"}>Ledger Balance</chakra.p>
                        <chakra.h2 layerStyle={"xl-text"}>USD 0.00</chakra.h2>
                    </chakra.div>
                    <Icon color={"#C4C4C4"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
                </chakra.div>
                <chakra.div display={"flex"} justifyContent={"space-between"}>
                    <chakra.div display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
                        <chakra.p layerStyle={"xxs-text"}>Total Payout</chakra.p>
                        <chakra.h2 layerStyle={"xl-text"}>USD 0.00</chakra.h2>
                    </chakra.div>
                    <Icon color={"#C4C4C4"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
                </chakra.div>
                <chakra.div display={"flex"} justifyContent={"space-between"}>
                    <chakra.div display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
                        <chakra.p layerStyle={"xxs-text"}>Total Revenue</chakra.p>
                        <chakra.h2 layerStyle={"xl-text"}>USD 0.00</chakra.h2>
                    </chakra.div>
                    <Icon color={"#C4C4C4"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
                </chakra.div>
                <chakra.div display={"flex"} justifyContent={"space-between"}>
                    <chakra.div display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
                        <chakra.p layerStyle={"xxs-text"}>Pending Payout</chakra.p>
                        <chakra.h2 layerStyle={"xl-text"}>USD 0.00</chakra.h2>
                    </chakra.div>
                    <Icon color={"#C4C4C4"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
                </chakra.div>
            </chakra.div>
        </chakra.section>
    )
}

export default TransactionsAnalyticsSections