import React, { useMemo } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { GoDotFill } from "react-icons/go";
import { Icon, chakra } from "@chakra-ui/react";

function WalletGraphSection() {
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
              fill="transparent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </chakra.div>
      <chakra.div>
        <chakra.div position={"relative"} color={"#DBDEE5"}>
          <Icon
            transform={"translate(-50%, -45%)"}
            position={"absolute"}
            top={0}
            left={0}
            w={"1rem"}
            h={"1rem"}
            as={GoDotFill}
          />
          <chakra.hr w="100%" height={"0.2rem"} />
          <Icon
            transform={"translate(30%, -82%)"}
            position={"absolute"}
            right={0}
            w={"1rem"}
            h={"1rem"}
            as={GoDotFill}
          />
        </chakra.div>
        <chakra.div
          color={"gray.400"}
          layerStyle={"xxs-text"}
          mt={"1.5rem"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <chakra.p>Apr 1 , 2022</chakra.p>
          <chakra.p>Apr 30 , 2022</chakra.p>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
}

export default WalletGraphSection;
