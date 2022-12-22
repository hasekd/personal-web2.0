import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import React from "react";

const SkillCard = ({ heading, text, tools, icon }: any) => {
  return (
    <Flex
      boxShadow={theme.shadow.boxShadow}
      flexDir={"column"}
      align={"center"}
      maxW={"40rem"}
      gap={"2.3rem"}
      p={"7rem"}
      borderRadius={"1rem"}
      textColor={theme.color.text.white}
      bgColor={theme.color.primary.blue}
      textAlign={"center"}
    >
      <Flex
        justify={"center"}
        align={"center"}
        w={"6rem"}
        h={"6rem"}
        borderRadius={"50%"}
        p={"1.4rem"}
        textColor={"#fffdfd"}
        fontSize={"3rem"}
        bgColor={theme.color.primary.lightBlue}
      >
        <Icon as={icon} />
      </Flex>
      <Heading fontSize={"2.5rem"}>{heading}</Heading>
      <Text fontSize={"1.7rem"} textAlign={"center"}>
        {text}
      </Text>
      <Flex flexDir={"column"} align={"center"}>
        <Text textColor={theme.color.primary.lightBlue} fontSize={"1.7rem"}>
          Tools I use:
        </Text>
        <Text fontSize={"1.7rem"}>{tools}</Text>
      </Flex>
    </Flex>
  );
};

export default SkillCard;
