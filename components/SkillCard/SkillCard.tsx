import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { theme } from "../../styles/theme";
import React from "react";

const SkillCard = ({ heading, text, tools, icon }: any) => {
  return (
    <Flex
      boxShadow={theme.shadow.boxShadow}
      flexDir={"column"}
      align={"center"}
      maxW={"40rem"}
      gap={"2rem"}
      p={"6rem"}
      borderRadius={"1rem"}
      textColor={theme.color.text.black}
      bgColor={theme.color.primary.white}
      textAlign={"center"}
    >
      <Icon
        as={icon}
        w={"6rem"}
        h={"6rem"}
        borderRadius={"50%"}
        p={"1.5rem"}
        bgColor={theme.color.primary.lightBlue}
      />
      <Heading fontSize={"2.5rem"}>{heading}</Heading>
      <Text fontSize={"1.7rem"} textAlign={"center"}>
        {text}
      </Text>
      <Flex flexDir={"column"} align={"center"}>
        <Text textColor={theme.color.primary.blue} fontSize={"1.7rem"}>
          Tools I use:
        </Text>
        <Text fontSize={"1.7rem"}>{tools}</Text>
      </Flex>
    </Flex>
  );
};

export default SkillCard;
