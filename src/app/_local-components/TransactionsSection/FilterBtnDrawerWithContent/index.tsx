import { Button, Input, useDisclosure } from '@chakra-ui/react'
import React, { useMemo, useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    chakra
} from '@chakra-ui/react'
import { nanoid } from 'nanoid';
import DateRangeInput from '@/global-components/chakra-factory/DateRangeInput';
import SelectByCheckboxInput from '@/global-components/chakra-factory/SelectByCheckboxInput';

function FilterBtnDrawerWithContent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement | undefined>();


    const filterTimelines = useMemo(() => ([
        "Today",
        "Last 7 days",
        "This month",
        "Last 3 months",
        "This year",
        "Last year",
        "All time"
    ]), []);

    const transTypeFilter = useMemo(() => ([
        {
            value: "Store Transactions",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Get Tipped",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Withdrawals",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Chargebacks",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Cashbacks",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Refer & Earn",
            defaultValue: true,
            id: nanoid()
        },
    ]), [])
    const transStatusFilter = useMemo(() => ([
        {
            value: "Successful",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Pending",
            defaultValue: true,
            id: nanoid()
        },
        {
            value: "Failed",
            defaultValue: true,
            id: nanoid()
        },
    ]), [])
    return (
        <>
            <Button
                data-testid="filterBtnDrawerTrigger-testid"
                onClick={onOpen}
                ref={btnRef as any}
                size={"_md"}
                pl={"3rem"}
                pr={"2rem"}
                variant={"gray"}
                rightIcon={<IoIosArrowDown />}>
                Filter
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef as any}
            >
                <DrawerOverlay bg={"#e8e8e8a6"} />
                <DrawerContent px={"2.4rem"} py={"2rem"} m={"1.2rem"} rounded={"2rem"} maxWidth={"45.6rem"}>

                    <DrawerHeader
                        p={"0"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        fontSize={"2.4rem"}
                        lineHeight={"2.8rem"}
                        fontWeight={700}>
                        <chakra.p> Filter</chakra.p>
                        <DrawerCloseButton position={"static"} fontSize={"1.6rem"} />
                    </DrawerHeader>
                    <DrawerBody
                        data-testid="drawerBody-testid"
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"2.4rem"}
                        my={"2.4rem"}
                        p="0"
                        overflow={"revert"}
                    >
                        <chakra.div overflow={"hidden"}>
                            <chakra.div
                                display={"flex"}
                                alignItems={"center"}
                                gap={"1.2rem"}
                                overflowX={"auto"}
                                sx={{
                                    '::-webkit-scrollbar': {
                                        display: 'none'
                                    }
                                }}
                            >
                                {
                                    filterTimelines.map(timeline => (
                                        <Button
                                            height={"auto"}
                                            minWidth={"fit-content"}
                                            key={nanoid()}
                                            fontSize={"1.4rem"}
                                            lineHeight={"1.6rem"}
                                            fontWeight={600}
                                            py={"1rem"}
                                            px={"1.8rem"}
                                            variant='outline'
                                        >
                                            {timeline}
                                        </Button>
                                    ))
                                }

                            </chakra.div>
                        </chakra.div>
                        <DateRangeInput label={"Date Range"} />
                        <SelectByCheckboxInput
                            label={"Transaction Type"}
                            checkLists={transTypeFilter}
                        />
                        <SelectByCheckboxInput
                            label={"Transaction Status"}
                            checkLists={transStatusFilter}
                        />
                    </DrawerBody>

                    <DrawerFooter gap="1.2rem" display={"flex"} alignItems={"center"} p="0">
                        <Button
                            size={"_md"}
                            flex={"1"}
                            variant='outline'
                        >
                            Clear
                        </Button>
                        <Button
                            disabled
                            size={"_md"}
                            flex={"1"}>Apply</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    )
}

export default FilterBtnDrawerWithContent