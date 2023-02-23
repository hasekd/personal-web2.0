import { Box, Flex, Text, Link, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "../../styles/theme";

const ProjectCard = ({ text, link, image, objectFit }: any) => {
  const [animation, setAnimation] = useState(false);

  const [isTabletOrSmaller] = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      pos={"relative"}
      textColor={theme.color.text.white}
      overflow={"hidden"}
      borderRadius={"1.5rem"}
      textAlign={"center"}
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      _active={{ borderRadius: "1.5rem" }}
      _hover={{ borderRadius: "1.5rem" }}
    >
      <Image
        src={image}
        alt={text}
        width={1000}
        height={0}
        style={{
          width: "46rem",
          height: `${isTabletOrSmaller ? "20rem" : "30rem"}`,
          objectFit: objectFit,
        }}
      />
      <Flex
        flexDir={"column"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        pos={"absolute"}
        top={0}
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
          top={{ base: "30%", md: "33%" }}
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
          top={{ base: "31%", md: "36%" }}
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
