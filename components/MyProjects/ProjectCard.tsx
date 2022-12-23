import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { theme } from "../../styles/theme";

const ProjectCard = ({ text, link, image }: any) => {
  const [animation, setAnimation] = useState(false);

  return (
    <Flex
      maxW={{ base: "28rem", md: "37rem" }}
      borderRadius={"1.5rem"}
      overflow="hidden"
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
    >
      <Box pos={"relative"} textColor={"white"} textAlign={"center"}>
        <Image src={image} alt="project-image" />
        <Box
          w={"100%"}
          h={"100%"}
          p={"0 2rem"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          opacity={animation ? "" : 0}
          bgColor={"#000"}
          transition={"all 0.5s ease-out"}
        >
          <Text
            mb={"1.5rem"}
            fontSize={{
              base: "1.1rem",
              sm: "0.95rem",
              md: "1.5rem",
              lg: "1.7rem",
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
            transition={"all 0.4s ease-out"}
          >
            Visit Website
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
