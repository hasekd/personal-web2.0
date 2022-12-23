import { Flex, Text, TextProps } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";

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

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Navbar = () => {
  const [width, height] = useWindowSize();

  return (
    <motion.div>
      <Flex
        align={"center"}
        justify={"space-between"}
        p={"2rem"}
        display={["none", "none", "flex", "flex"]}
        fontWeight={700}
      >
        <Link href={"/"}>
          <Image
            src={require("../../public/img/logo.avif")}
            alt={"main-logo"}
            style={{ width: 90 }}
            priority={true}
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
      {width < 767 ? <MobileNavbar /> : ""}
    </motion.div>
  );
};

export default Navbar;
