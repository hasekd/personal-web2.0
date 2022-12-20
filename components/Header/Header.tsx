import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <Flex flexDir={"column"} align={"center"} pt={"5rem"}>
        <Heading fontSize={"5.5rem"} textAlign={"center"}>
          Frontend Developer & Designer
        </Heading>
        <Text fontSize={"2.3rem"} mt={"2rem"} mb={"5rem"} textAlign={"center"}>
          I code beautiful things and I love what I do.
        </Text>
        <Image
          src={require("../../img/programming-illustration.png")}
          alt="programming-illustration"
          width={750}
        />
      </Flex>
    </>
  );
};

export default Header;
