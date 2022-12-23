import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import React from "react";

const SkillCard = ({ heading, text, tools, icon }: any) => {
  return (
    <Flex
      boxShadow={theme.shadow.boxShadow}
      flexDir={"column"}
      align={"center"}
      justify={"center"}
      maxW={{ base: "30rem", md: "40rem" }}
      gap={{ base: "1.8rem", md: "2.3rem" }}
      maxH={{ base: "30rem", md: "38rem" }}
      p={{ base: "4rem", md: "6rem" }}
      borderRadius={"1rem"}
      textColor={theme.color.text.white}
      bgColor={theme.color.primary.blue}
      textAlign={"center"}
    >
      <Flex
        justify={"center"}
        align={"center"}
        w={{ base: "5rem", md: "6rem" }}
        h={{ base: "5rem", md: "6rem" }}
        borderRadius={"50%"}
        p={"1.4rem"}
        textColor={"#fffdfd"}
        fontSize={{ base: "2.5rem", md: "3rem" }}
        bgColor={theme.color.primary.lightBlue}
      >
        <Icon as={icon} />
      </Flex>
      <Heading fontSize={{ base: "1.8rem", md: "2.5rem" }}>{heading}</Heading>
      <Text fontSize={{ base: "1.3rem", md: "1.7rem" }} textAlign={"center"}>
        {text}
      </Text>
      <Flex flexDir={"column"} align={"center"}>
        <Text
          textColor={theme.color.primary.lightBlue}
          fontSize={{ base: "1.3rem", md: "1.7rem" }}
        >
          Tools I use:
        </Text>
        <Text fontSize={{ base: "1.3rem", md: "1.7rem" }}>{tools}</Text>
      </Flex>
    </Flex>
  );
};

export default SkillCard;
