"use client";
import React from "react";
import { Button, Icon, Skeleton, chakra } from "@chakra-ui/react";
import { CiCircleInfo } from "react-icons/ci";
import useSWR from "swr";
import { formatDigit } from "@/utils/formatInteger";
import WalletGraphSection from "./WalletGraphSection";
import { fetchBaseUrl, swrFetcher } from "@/fetchEndpoints/clientBaseApi";
import { _wallet } from "@/fetchEndpoints/path";
import { WalletDetailsDataType } from "@/fetchEndpoints/types";

function WalletsStatsSections() {
  const { isLoading, data, error } = useSWR<WalletDetailsDataType>(
    `${fetchBaseUrl}${_wallet}`,
    swrFetcher,
  );

  return (
    <chakra.section display={"flex"} gap={"12.4rem"}>
      <chakra.div
        display={"flex"}
        gap={"4.8rem"}
        flexDirection={"column"}
        flex={1}
      >
        <chakra.div display={"flex"} alignItems={"center"} gap={"6.4rem"}>
          <chakra.div display={"flex"} flexDirection={"column"} gap={"0.8rem"}>
            <chakra.p color={"gray.400"} layerStyle={"base-text"}>
              Available Balance
            </chakra.p>
            <Skeleton
              speed={1}
              w={"100%"}
              maxW={"18rem"}
              isLoaded={!isLoading}
              rounded={"1rem"}
            >
              <chakra.h1 color={"primary.300"} layerStyle={"2xl-text"}>
                USD {formatDigit.format(data?.balance || 0)}
              </chakra.h1>
            </Skeleton>
          </chakra.div>
          <Button isDisabled={isLoading} size={"_lg"} px={"5.2rem"}>
            Withdraw
          </Button>
        </chakra.div>
        <WalletGraphSection />
      </chakra.div>
      <chakra.div
        flexBasis={"27.1rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"3.2rem"}
      >
        <chakra.div
          display={"flex"}
          gap={"1.6rem"}
          justifyContent={"space-between"}
        >
          <chakra.div
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.8rem"}
          >
            <chakra.p layerStyle={"xxs-text"}>Ledger Balance</chakra.p>
            <Skeleton
              speed={1}
              isLoaded={!isLoading}
              h={"3rem"}
              w={""}
              rounded={"1rem"}
            >
              <chakra.h2 layerStyle={"xl-text"}>
                USD {formatDigit.format(data?.ledger_balance || 0)}
              </chakra.h2>
            </Skeleton>
          </chakra.div>
          <Icon color={"gray.300"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
        </chakra.div>
        <chakra.div
          display={"flex"}
          gap={"1.6rem"}
          justifyContent={"space-between"}
        >
          <chakra.div
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.8rem"}
          >
            <chakra.p layerStyle={"xxs-text"}>Total Payout</chakra.p>
            <Skeleton
              speed={1}
              isLoaded={!isLoading}
              h={"3rem"}
              w={""}
              rounded={"1rem"}
            >
              <chakra.h2 layerStyle={"xl-text"}>
                USD {formatDigit.format(data?.total_payout || 0)}
              </chakra.h2>
            </Skeleton>
          </chakra.div>
          <Icon color={"gray.300"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
        </chakra.div>
        <chakra.div
          display={"flex"}
          gap={"1.6rem"}
          justifyContent={"space-between"}
        >
          <chakra.div
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.8rem"}
          >
            <chakra.p layerStyle={"xxs-text"}>Total Revenue</chakra.p>
            <Skeleton
              speed={1}
              isLoaded={!isLoading}
              h={"3rem"}
              w={""}
              rounded={"1rem"}
            >
              <chakra.h2 layerStyle={"xl-text"}>
                USD {formatDigit.format(data?.total_revenue || 0)}
              </chakra.h2>
            </Skeleton>
          </chakra.div>
          <Icon color={"gray.300"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
        </chakra.div>
        <chakra.div
          display={"flex"}
          gap={"1.6rem"}
          justifyContent={"space-between"}
        >
          <chakra.div
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.8rem"}
          >
            <chakra.p layerStyle={"xxs-text"}>Pending Payout</chakra.p>
            <Skeleton
              speed={1}
              isLoaded={!isLoading}
              h={"3rem"}
              w={""}
              rounded={"1rem"}
            >
              <chakra.h2 layerStyle={"xl-text"}>
                USD {formatDigit.format(data?.pending_payout || 0)}
              </chakra.h2>
            </Skeleton>
          </chakra.div>
          <Icon color={"gray.300"} w={"2rem"} h={"2rem"} as={CiCircleInfo} />
        </chakra.div>
      </chakra.div>
    </chakra.section>
  );
}

export default WalletsStatsSections;
