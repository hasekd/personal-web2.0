import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <Flex
        flexDir={"column"}
        align={"center"}
        justify={"center"}
        p={"5rem 2rem 0 2rem"}
      >
        <Heading fontSize={{ base: "4rem", md: "5.5rem" }} textAlign={"center"}>
          Frontend Developer & Designer
        </Heading>
        <Text
          fontSize={{ base: "1.9rem", md: "2.3rem" }}
          mt={"2rem"}
          mb={"5rem"}
          textAlign={"center"}
        >
          I code beautiful things and I love what I do.
        </Text>
        <Image
          src={require("../../public/img/programming-illustration.webp")}
          alt="programming-illustration"
          width={500}
          height={0}
          style={{ width: 750 }}
          priority={true}
        />
      </Flex>
      <Footer />
    </>
  );
};

export default Header;
