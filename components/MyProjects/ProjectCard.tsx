import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "../../styles/theme";

const ProjectCard = ({ text, link, image }: any) => {
  const [animation, setAnimation] = useState(false);

  return (
    <Box
      bgImage={image}
      maxW={{ base: "30rem", md: "40rem" }}
      minH={{ base: "25rem", md: "30rem" }}
      bgPosition={"center"}
      bgSize={"cover"}
      borderRadius={"1.5rem"}
      overflow="hidden"
      textColor={theme.color.text.white}
      textAlign={"center"}
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
    >
      <Flex
        flexDir={"column"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        opacity={animation ? "" : 0}
        p={"0 2rem"}
        bgColor={"#000"}
        transition={"all 0.5s ease-out"}
      >
        <Text
          mb={"1.5rem"}
          fontSize={{
            base: "1.6rem",
            md: "1.8rem",
            lg: "1.9rem",
          }}
          wordBreak={"break-word"}
          pos={"relative"}
          top={"30%"}
        >
          {text}
        </Text>

        <Link
          href={link}
          lineHeight={{ base: "3rem", md: "4.2rem" }}
          display={"inline-block"}
          p={"0 2rem"}
          textAlign={"center"}
          border={`2px solid ${theme.color.primary.blue}`}
          fontSize={{ base: "1.1rem", md: "1.6rem" }}
          fontWeight={600}
          borderRadius={"3rem"}
          textDecoration={"none"}
          pos={"relative"}
          top={"33%"}
          _hover={{ bgColor: theme.color.primary.blue }}
          target="_blank"
          transition={"all 0.4s ease-out"}
        >
          Visit Website
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
