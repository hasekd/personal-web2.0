import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Flex flexDir={"column"} align={"center"} p={"3rem 2rem 5rem 2rem"}>
      <Box textAlign={"center"}>
        <Text
          fontSize={{ base: "3rem", md: "3.6rem" }}
          mb={"1rem"}
          fontWeight={700}
        >
          My Work
        </Text>
        <Text fontSize={{ base: "1.6rem", md: "2rem" }}>
          Here are a few projects I have worked on.
        </Text>
      </Box>

      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={"2rem"}
        mt={"5rem"}
      >
        <ProjectCard
          image={"/img/Archieshop.png"}
          text="Handmade dog beds with unique design"
          link="https://github.com/hasekd"
        />
        <ProjectCard
          image={"/img/coming-soon.jpeg"}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasm"
          link="https://github.com/hasekd"
        />
        <ProjectCard
          image={"/img/coming-soon.jpeg"}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaksmdkasmdkam"
          link="https://github.com/hasekd"
        />
        <ProjectCard
          image={"/img/coming-soon.jpeg"}
          text="jsdfkjsdfkjshdfajsndkasdkaskdaskdmaksdmkasmdkm"
          link="https://github.com/hasekd"
        />
      </Grid>
    </Flex>
  );
};

export default Projects;
