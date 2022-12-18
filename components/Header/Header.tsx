import { Box, chakra, Flex, Heading, Img, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const ProductImage = chakra(Image, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

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
