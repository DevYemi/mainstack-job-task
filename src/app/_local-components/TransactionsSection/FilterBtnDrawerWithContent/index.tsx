import { Button, useDisclosure } from "@chakra-ui/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  chakra,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import DateRangeInput from "@/global-components/chakra-factory/DateRangeInput";
import SelectByCheckboxInput from "@/global-components/chakra-factory/SelectByCheckboxInput";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";
import { updateRevenueTransFilterState } from "@/lib/redux-toolkit/features/revenueTransFilterSlice";

function FilterBtnDrawerWithContent() {
  const globaFilterState = useAppSelector(
    (state) => state.revenueTransFilterSlice,
  );

  const [dateRange, setDateRange] = useState<[string, string] | null>(null);
  const [transType, setTransType] = useState<Array<string> | null>(null);
  const [transStatus, setTransStatus] = useState<Array<string> | null>(null);
  const [isApplyBtnDisabled, setIsApplyBtnDisabled] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | undefined>();
  const dispatch = useAppDispatch();

  const dateRangeDefaultValue: [Date | null, Date | null] = useMemo(() => {
    if (globaFilterState.dateRange) {
      return [
        new Date(globaFilterState.dateRange[0]),
        new Date(globaFilterState.dateRange[1]),
      ];
    }

    return [null, null];
  }, [globaFilterState.dateRange]);

  const filterTimelines = useMemo(
    () => [
      "Today",
      "Last 7 days",
      "This month",
      "Last 3 months",
      "This year",
      "Last year",
      "All time",
    ],
    [],
  );

  const transTypeFilter = useMemo(() => {
    let localFilter = [
      {
        value: "Store Transactions",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Get Tipped",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Withdrawals",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Chargebacks",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Cashbacks",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Refer & Earn",
        defaultValue: false,
        id: nanoid(),
      },
    ];

    localFilter = localFilter.map((item) => ({
      ...item,
      defaultValue: !!globaFilterState.transType?.includes(item.value),
    }));
    return localFilter;
  }, [globaFilterState.transType]);
  const transStatusFilter = useMemo(() => {
    let localFilter = [
      {
        value: "Successful",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Pending",
        defaultValue: false,
        id: nanoid(),
      },
      {
        value: "Failed",
        defaultValue: false,
        id: nanoid(),
      },
    ];
    localFilter = localFilter.map((item) => ({
      ...item,
      defaultValue: !!globaFilterState.transStatus?.includes(item.value),
    }));
    return localFilter;
  }, [globaFilterState.transStatus]);

  const onOpenWrapper = useCallback(() => {
    setDateRange(globaFilterState?.dateRange || null);
    setTransStatus(globaFilterState?.transStatus || null);
    setTransType(globaFilterState?.transType || null);
    onOpen();
  }, [
    globaFilterState?.dateRange,
    globaFilterState?.transStatus,
    globaFilterState?.transType,
    onOpen,
  ]);

  const onCloseWrapper = useCallback(() => {
    onClose();
    setIsApplyBtnDisabled(true);
    setDateRange(null);
    setTransStatus(null);
    setTransType(null);
  }, [onClose]);

  const handleOnClear = useCallback(() => {
    dispatch(
      updateRevenueTransFilterState({
        numOfActiveFilter: 0,
        dateRange: null,
        transStatus: null,
        transType: null,
      }),
    );
    onCloseWrapper();
  }, [dispatch, onCloseWrapper]);
  const handleOnApply = useCallback(() => {
    dispatch(
      updateRevenueTransFilterState({
        numOfActiveFilter: 0,
        dateRange,
        transStatus,
        transType,
      }),
    );
    onCloseWrapper();
  }, [dateRange, dispatch, onCloseWrapper, transStatus, transType]);

  const handleDateRangeChange = useCallback((dates: [Date, Date] | null) => {
    if (dates) {
      setDateRange([dates[0].toString(), dates[1].toString()]);
    } else {
      setDateRange(null);
    }

    setIsApplyBtnDisabled(false);
  }, []);
  const handleTransTypeChange = useCallback((value: Array<string> | null) => {
    setTransType(value);
    setIsApplyBtnDisabled(false);
  }, []);
  const handleTransStatusChange = useCallback((value: Array<string> | null) => {
    setTransStatus(value);
    setIsApplyBtnDisabled(false);
  }, []);

  return (
    <>
      <Button
        data-testid="filterBtnDrawerTrigger-testid"
        onClick={onOpenWrapper}
        ref={btnRef as any}
        size={"_md"}
        display={"flex"}
        alignItems={"center"}
        gap={"0.4rem"}
        pl={"3rem"}
        pr={"2rem"}
        variant={"gray"}
        rightIcon={<IoIosArrowDown />}
      >
        <chakra.span>Filter</chakra.span>
        {globaFilterState?.numOfActiveFilter > 0 && (
          <chakra.span
            fontSize={"1.2rem"}
            color={"white"}
            lineHeight={"1.2rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w="2rem"
            h="2rem"
            bg="primary.300"
            rounded={"10rem"}
          >
            {globaFilterState?.numOfActiveFilter}
          </chakra.span>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onCloseWrapper}
        finalFocusRef={btnRef as any}
      >
        <DrawerOverlay bg={"#e8e8e8a6"} />
        <DrawerContent
          px={"2.4rem"}
          py={"2rem"}
          mx={{ base: "0", lg: "1.2rem" }}
          my={"1.2rem"}
          rounded={"2rem"}
          maxWidth={"45.6rem"}
        >
          <DrawerHeader
            p={"0"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            fontSize={"2.4rem"}
            lineHeight={"2.8rem"}
            fontWeight={700}
          >
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
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {filterTimelines.map((timeline) => (
                  <Button
                    height={"auto"}
                    minWidth={"fit-content"}
                    key={nanoid()}
                    fontSize={"1.4rem"}
                    lineHeight={"1.6rem"}
                    fontWeight={600}
                    py={"1rem"}
                    px={"1.8rem"}
                    variant="outline"
                  >
                    {timeline}
                  </Button>
                ))}
              </chakra.div>
            </chakra.div>
            <DateRangeInput
              defaultValues={dateRangeDefaultValue}
              onDateRangeChange={handleDateRangeChange}
              label={"Date Range"}
            />
            <SelectByCheckboxInput
              onSelectChange={handleTransTypeChange}
              label={"Transaction Type"}
              checkLists={transTypeFilter}
            />
            <SelectByCheckboxInput
              onSelectChange={handleTransStatusChange}
              label={"Transaction Status"}
              checkLists={transStatusFilter}
            />
          </DrawerBody>

          <DrawerFooter
            gap="1.2rem"
            display={"flex"}
            alignItems={"center"}
            p="0"
          >
            <Button
              onClick={handleOnClear}
              size={"_md"}
              flex={"1"}
              variant="outline"
            >
              Clear
            </Button>
            <Button
              onClick={handleOnApply}
              size={"_md"}
              flex={"1"}
              isDisabled={isApplyBtnDisabled}
            >
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FilterBtnDrawerWithContent;
