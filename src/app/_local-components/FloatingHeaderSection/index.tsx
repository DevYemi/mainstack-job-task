"use client";
import React from "react";
import { chakra } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import NavLink from "@/global-components/NavLink";
import { MdOutlineAnalytics, MdOutlinePeopleAlt } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { AiOutlineBell } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import AppsPopoverBtnAndContent from "./AppsPopoverBtnAndContent";
import ProfilePopoverBtnAndContent from "./ProfilePopoverBtnAndContent";
import Image from "next/image";

function FloatingHeaderSection() {
  return (
    <chakra.header
      position={"sticky"}
      top={0}
      bg={"white"}
      zIndex={99}
      mx="1.6rem"
      borderRadius={"10rem"}
    >
      <chakra.div
        transform={"translateY(1.6rem)"}
        display={"flex"}
        alignItems={"center"}
        bg={"white"}
        p={"1.2rem"}
        shadow={"md"}
        borderRadius={"10rem"}
      >
        <chakra.div
          position={"relative"}
          w={"3.6rem"}
          h={"3.6rem"}
          minWidth={"3.6rem"}
        >
          <Image alt="Mainstack-Logo" src={"/imgs/mainstack-logo.webp"} fill />
        </chakra.div>

        <chakra.nav
          flex={1}
          display={"flex"}
          alignItems={"center"}
          gap={"2rem"}
          justifyContent={"center"}
        >
          <NavLink
            href={"#"}
            display={"flex"}
            color={"gray.400"}
            alignItems={"center"}
            gap={"0.8rem"}
            px={"1.8rem"}
            py={"0.8rem"}
            borderRadius={"10rem"}
            _hover={{
              bg: "gray.50",
            }}
            _activeLink={{
              bg: "primary.300",
              color: "white",
            }}
          >
            <Icon w={"2rem"} h={"2rem"} as={GrHomeRounded} />
            <chakra.p layerStyle={"base-text"}>Home</chakra.p>
          </NavLink>
          <NavLink
            href={"#"}
            display={"flex"}
            color={"gray.400"}
            alignItems={"center"}
            gap={"0.8rem"}
            px={"1.8rem"}
            py={"0.8rem"}
            borderRadius={"10rem"}
            _hover={{
              bg: "gray.50",
            }}
            _activeLink={{
              bg: "primary.300",
              color: "white",
            }}
          >
            <Icon w={"2rem"} h={"2rem"} as={MdOutlineAnalytics} />
            <chakra.p layerStyle={"base-text"}>Analytics</chakra.p>
          </NavLink>

          <NavLink
            href={"/"}
            display={"flex"}
            color={"gray.400"}
            alignItems={"center"}
            gap={"0.8rem"}
            px={"1.8rem"}
            py={"0.8rem"}
            borderRadius={"10rem"}
            _hover={{
              bg: "gray.50",
            }}
            _activeLink={{
              bg: "primary.300",
              color: "white",
            }}
          >
            <Icon w={"2rem"} h={"2rem"} as={FaMoneyBills} />
            <chakra.p layerStyle={"base-text"}>Revenue</chakra.p>
          </NavLink>
          <NavLink
            href={"#"}
            display={"flex"}
            color={"gray.400"}
            alignItems={"center"}
            gap={"0.8rem"}
            px={"1.8rem"}
            py={"0.8rem"}
            borderRadius={"10rem"}
            _hover={{
              bg: "gray.50",
            }}
            _activeLink={{
              bg: "primary.300",
              color: "white",
            }}
          >
            <Icon w={"2rem"} h={"2rem"} as={MdOutlinePeopleAlt} />
            <chakra.p layerStyle={"base-text"}>CRM</chakra.p>
          </NavLink>
          <AppsPopoverBtnAndContent />
        </chakra.nav>
        <chakra.div
          display={"flex"}
          alignItems={"center"}
          color={"gray.400"}
          gap={"2.8rem"}
        >
          <Icon w={"2rem"} h={"2rem"} as={AiOutlineBell} />
          <Icon w={"2rem"} h={"2rem"} as={BsChatLeftText} />
          <ProfilePopoverBtnAndContent />
        </chakra.div>
      </chakra.div>
    </chakra.header>
  );
}

export default FloatingHeaderSection;
