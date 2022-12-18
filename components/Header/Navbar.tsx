import { Box, Flex, Heading, Text, TextProps } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import Link from "next/link";
import React from "react";

const LinkStyle: TextProps = {
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: "1.2rem",
  pos: "relative",
  textColor: theme.color.primary.blue,
  fontWeight: 500,
  _hover: {
    _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
  },
  _after: {
    content: '""',
    pos: "absolute",
    w: "100%",
    transform: "scaleX(0)",
    h: "0.15rem",
    bottom: "-0.2rem",
    left: "0",
    bgColor: theme.color.primary.blue,
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
};

const Navbar = () => {
  return (
    <Flex align={"center"} justify={"space-between"} p={"3rem 5rem"}>
      <Link href={"/"}>
        <Heading>Daniel</Heading>
      </Link>
      <Flex gap={"3rem"} align={"center"}>
        <Link href={"/about"}>
          <Text {...LinkStyle}>About me</Text>
        </Link>
        <Link href={"/my-work"}>
          <Text {...LinkStyle}>My work</Text>
        </Link>
        <Link href={"/contact"}>
          <Text
            border={`1px solid ${theme.color.primary.blue}`}
            textColor={theme.color.primary.blue}
            p={"1rem 2rem"}
            borderRadius={"25px"}
            // textTransform={"uppercase"}
            fontWeight={500}
            fontSize={"1.5rem"}
            _hover={{
              bgColor: theme.color.primary.blue,
              textColor: theme.color.text.white,
            }}
            transition={"all 0.4s ease-out;"}
          >
            Say Hello
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
