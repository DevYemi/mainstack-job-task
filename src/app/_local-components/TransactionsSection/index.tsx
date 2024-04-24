"use client";
import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  SkeletonCircle,
  SkeletonText,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import FilterBtnDrawerWithContent from "./FilterBtnDrawerWithContent";
import useSWR from "swr";
import { nanoid } from "nanoid";
import { formatDigit } from "@/utils/formatInteger";
import { format } from "date-fns";
import generateToast from "@/utils/generateToast";
import {
  fetchBaseUrl,
  parseClientError,
  swrFetcher,
} from "@/fetchEndpoints/clientBaseApi";
import { _transactions } from "@/fetchEndpoints/path";
import { TransactionDataType } from "@/fetchEndpoints/types";

function TransactionsSection() {
  const { isLoading, data, error } = useSWR<TransactionDataType[]>(
    `${fetchBaseUrl}${_transactions}`,
    swrFetcher,
  );

  useEffect(() => {
    // Display toast if there are any errors
    if (error) {
      const e = parseClientError(error);
      generateToast(e);
    }
  }, [error]);

  return (
    <chakra.section mt={"8.2rem"}>
      <chakra.div
        display={"flex"}
        justifyContent={"space-between"}
        gap={"2.4rem"}
      >
        <SkeletonText
          speed={1}
          spacing={4}
          noOfLines={2}
          skeletonHeight={"2rem"}
          isLoaded={!isLoading}
        >
          <chakra.div display={"flex"} flexDirection={"column"}>
            <chakra.h3 color={"primary.300"} layerStyle={"lg-text"}>
              {data?.length} Transactions
            </chakra.h3>

            <chakra.p color={"gray.400"} layerStyle={"xxs-text"}>
              Your transactions for the last 7 days
            </chakra.p>
          </chakra.div>
        </SkeletonText>

        <ButtonGroup isDisabled={isLoading} spacing={"1.2rem"}>
          <FilterBtnDrawerWithContent />
          <Button
            size={"_md"}
            pl={"3rem"}
            pr={"2rem"}
            variant={"gray"}
            rightIcon={<FiDownload />}
          >
            Export list
          </Button>
        </ButtonGroup>
      </chakra.div>
      <chakra.hr display={"block"} mt={"2.4rem"} mb="3.3rem" bg={"gray.50"} />
      <chakra.div display={"flex"} flexDirection={"column"} gap={"2.4rem"}>
        {isLoading
          ? new Array(7).fill(null).map(() => (
              <Stack
                key={nanoid()}
                alignItems={"center"}
                spacing={"1.45rem"}
                direction={"row"}
              >
                <SkeletonCircle speed={1} size={"4.8rem"} />
                <SkeletonText
                  speed={1}
                  flex={1}
                  spacing={3}
                  skeletonHeight={"1.6rem"}
                  noOfLines={2}
                />
              </Stack>
            ))
          : data?.map((item) => (
              <chakra.div
                key={nanoid()}
                display={"flex"}
                gap={"1.45rem"}
                alignItems={"center"}
              >
                <chakra.span
                  bg={item?.status === "successful" ? "#E3FCF2" : "#F9E3E0"}
                  display={"block"}
                  rounded={"10rem"}
                  p={"1.4rem"}
                >
                  {item.status === "successful" ? (
                    <GoArrowDownLeft color="#075132" />
                  ) : (
                    <GoArrowUpRight color="#961100" />
                  )}
                </chakra.span>

                <chakra.div
                  flex={1}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"0.9rem"}
                >
                  <chakra.h5 fontWeight={500} layerStyle={"base-text"}>
                    {item?.metadata?.product_name || item?.type || ""}
                  </chakra.h5>
                  <chakra.p
                    color="gray.400"
                    fontWeight={500}
                    layerStyle={"xxs-text"}
                  >
                    {item?.metadata?.name || item?.status || ""}
                  </chakra.p>
                </chakra.div>
                <chakra.div
                  textAlign={"right"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"0.4rem"}
                >
                  <chakra.h5 fontWeight={700} layerStyle={"base-text"}>
                    USD {formatDigit.format(item?.amount)}
                  </chakra.h5>
                  <chakra.p
                    color="gray.400"
                    fontWeight={500}
                    layerStyle={"xxs-text"}
                  >
                    {format(item.date, "PP")}
                  </chakra.p>
                </chakra.div>
              </chakra.div>
            ))}
      </chakra.div>
    </chakra.section>
  );
}

export default TransactionsSection;
