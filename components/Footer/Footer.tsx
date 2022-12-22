import { Button, Flex, Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { theme } from "../../styles/theme";

const SocialIcon: LinkProps = {
  border: `2px solid ${theme.color.primary.white}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  w: "5.2rem",
  h: "5.2rem",
  fontSize: "2.3rem",
  _hover: {
    bgColor: theme.color.primary.white,
    color: theme.color.primary.blue,
  },
  transition: "all 0.4s ease-out",
};

const Footer = () => {
  return (
    <Flex
      flexDir={"column"}
      align={"center"}
      gap={"3rem"}
      textColor={theme.color.text.white}
      bgColor={theme.color.primary.blue}
      p={"4rem 0"}
    >
      <Image
        src={require("../../img/logo-2.png")}
        alt={"sub-logo"}
        style={{ width: 70 }}
      />
      <Text fontSize={"2.5rem"}>Still learning one day at a time.</Text>
      <Flex gap={"2rem"} align={"center"}>
        <Link
          {...SocialIcon}
          href={"https://www.linkedin.com/in/daniel-ha%C5%A1ek-00705517b/"}
          target="_blank"
        >
          <Icon as={FaLinkedinIn} />
        </Link>

        <Link {...SocialIcon} href={"https://twitter.com/"} target="_blank">
          <Icon as={AiOutlineTwitter} />
        </Link>

        <Button
          w={"5.2rem"}
          h={"5.2rem"}
          borderRadius={"50%"}
          border={`2px solid ${theme.color.primary.white}`}
          bgColor={"transparent"}
          fontSize={"2.1rem"}
          _hover={{
            bgColor: theme.color.primary.white,
            color: theme.color.primary.blue,
          }}
          transition={"all 0.4s ease-out"}
          onClick={() => (window.location.href = "mailto:hasek.dan1@gmail.com")}
        >
          <HiOutlineMail />
        </Button>
      </Flex>
      <Text fontSize={"1.7rem"} letterSpacing={"0.5px"}>
        Created by me &copy; {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
