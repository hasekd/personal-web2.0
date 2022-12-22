import { Flex, Text, TextProps } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LinkStyle: TextProps = {
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: "1.3rem",
  pos: "relative",
  textColor: theme.color.primary.blue,
  fontWeight: 600,
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
    <motion.div>
      <Flex
        align={"center"}
        justify={"space-between"}
        p={"2rem 5rem"}
        fontWeight={700}
      >
        <Link href={"/"}>
          <Image
            src={require("../../img/logo.png")}
            alt={"main-logo"}
            style={{ width: 100 }}
          />
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
              border={`2px solid ${theme.color.primary.blue}`}
              textColor={theme.color.primary.blue}
              p={"1rem 2.3rem"}
              borderRadius={"25px"}
              fontWeight={600}
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
    </motion.div>
  );
};

export default Navbar;
